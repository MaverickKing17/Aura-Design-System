import React, { useState } from 'react';
import { X, Sparkles, Loader2, Type as TypeIcon, Image as ImageIcon, Tag } from 'lucide-react';
import { Button } from './Button';
import { Material } from '../types';
import { GoogleGenAI, Type as GenAIType } from "@google/genai";

interface GenerateMaterialModalProps {
  onClose: () => void;
  onGenerate: (material: Material) => void;
}

export const GenerateMaterialModal: React.FC<GenerateMaterialModalProps> = ({ onClose, onGenerate }) => {
  const [name, setName] = useState('');
  const [type, setType] = useState('Natural Stone');
  const [description, setDescription] = useState('');
  const [isGenerating, setIsGenerating] = useState(false);

  const handleGenerate = async () => {
    if (!name || !description) return;

    setIsGenerating(true);

    try {
      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

      // 1. Generate Image
      const imagePrompt = `Close-up, high-fidelity, photorealistic architectural texture photography of ${name} (${type}). ${description}. Style: Luxury construction material sample, even lighting, sharp details, top-down view.`;
      
      const imagePromise = ai.models.generateContent({
        model: 'gemini-2.5-flash-image',
        contents: imagePrompt,
      });

      // 2. Generate Metadata
      const metadataPrompt = `Generate a JSON object for a luxury construction material.
      Name: ${name}
      Type: ${type}
      Description: ${description}
      
      Fields required:
      - origin: string (City, Country)
      - pricePerSqFt: number (integer between 100 and 600)
      - leadTimeWeeks: number (integer between 4 and 24)
      - supplier: string (Sophisticated company name)
      - matchScore: number (integer between 85 and 99)
      
      Return strictly valid JSON.`;

      const metadataPromise = ai.models.generateContent({
        model: 'gemini-2.5-flash',
        contents: metadataPrompt,
        config: {
            responseMimeType: "application/json",
            responseSchema: {
                type: GenAIType.OBJECT,
                properties: {
                    origin: { type: GenAIType.STRING },
                    pricePerSqFt: { type: GenAIType.NUMBER },
                    leadTimeWeeks: { type: GenAIType.NUMBER },
                    supplier: { type: GenAIType.STRING },
                    matchScore: { type: GenAIType.NUMBER }
                }
            }
        }
      });

      const [imageResponse, metadataResponse] = await Promise.all([imagePromise, metadataPromise]);

      // Process Image
      let imageUrl = 'https://picsum.photos/400/300'; // Fallback
      if (imageResponse.candidates?.[0]?.content?.parts) {
        for (const part of imageResponse.candidates[0].content.parts) {
          if (part.inlineData && part.inlineData.data) {
            imageUrl = `data:${part.inlineData.mimeType};base64,${part.inlineData.data}`;
            break;
          }
        }
      }

      // Process Metadata
      const metadataText = metadataResponse.text;
      let metadata = {
        origin: 'Unknown',
        pricePerSqFt: 0,
        leadTimeWeeks: 0,
        supplier: 'Unknown',
        matchScore: 90
      };
      
      try {
        if (metadataText) {
             metadata = JSON.parse(metadataText);
        }
      } catch (e) {
        console.error("Failed to parse metadata JSON", e);
      }

      const newMaterial: Material = {
        id: `gen-${Date.now()}`,
        name,
        type,
        origin: metadata.origin || 'Custom Origin',
        matchScore: metadata.matchScore || 88,
        pricePerSqFt: metadata.pricePerSqFt || 200,
        currency: 'USD',
        leadTimeWeeks: metadata.leadTimeWeeks || 8,
        verified: false, // Generated materials are not verified yet
        provenanceId: 'Pending Verification',
        imageUrl,
        supplier: metadata.supplier || 'Custom Supplier'
      };

      onGenerate(newMaterial);
      onClose();

    } catch (error) {
      console.error("Error generating material:", error);
      // Handle error (could add error state to UI)
    } finally {
      setIsGenerating(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div 
        className="absolute inset-0 bg-primary/40 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      ></div>
      
      <div className="relative bg-surface rounded-lg shadow-2xl w-full max-w-lg overflow-hidden animate-fade-in border border-gray-100">
        <div className="bg-primary p-6 text-white flex justify-between items-center">
            <h3 className="font-serif text-xl flex items-center gap-2">
                <Sparkles className="text-accent" size={20} />
                Generate Custom Material
            </h3>
            <button onClick={onClose} className="text-white/70 hover:text-white">
                <X size={20} />
            </button>
        </div>

        <div className="p-6 space-y-6">
            <div>
                <label className="block text-sm font-medium text-gray-700 mb-2 flex items-center gap-2">
                    <Tag size={16} /> Material Name
                </label>
                <input 
                    type="text" 
                    className="w-full px-4 py-2 border border-gray-300 rounded focus:ring-1 focus:ring-accent focus:border-accent outline-none"
                    placeholder="e.g. Noir Saint Laurent Marble"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
            </div>

            <div>
                <label className="block text-sm font-medium text-gray-700 mb-2 flex items-center gap-2">
                    <TypeIcon size={16} /> Category
                </label>
                <select 
                    className="w-full px-4 py-2 border border-gray-300 rounded focus:ring-1 focus:ring-accent focus:border-accent outline-none bg-white"
                    value={type}
                    onChange={(e) => setType(e.target.value)}
                >
                    <option value="Natural Stone">Natural Stone</option>
                    <option value="Architectural Steel">Architectural Steel</option>
                    <option value="Exotic Wood">Exotic Wood</option>
                    <option value="Ceramic">Ceramic</option>
                    <option value="Composite">Composite</option>
                </select>
            </div>

            <div>
                <label className="block text-sm font-medium text-gray-700 mb-2 flex items-center gap-2">
                    <ImageIcon size={16} /> Visual Description (AI Prompt)
                </label>
                <textarea 
                    className="w-full px-4 py-2 border border-gray-300 rounded focus:ring-1 focus:ring-accent focus:border-accent outline-none h-32 resize-none"
                    placeholder="Describe the texture, colors, patterns, and finish..."
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                />
                <p className="text-xs text-gray-400 mt-2">The AI will generate a photorealistic texture and estimate technical specifications based on this description.</p>
            </div>
            
            <div className="flex gap-3 pt-2">
                <Button variant="outline" className="flex-1" onClick={onClose} disabled={isGenerating}>Cancel</Button>
                <Button 
                    variant="primary" 
                    className="flex-1" 
                    onClick={handleGenerate}
                    disabled={!name || !description || isGenerating}
                >
                    {isGenerating ? (
                        <>
                            <Loader2 className="animate-spin mr-2" size={18} /> Generating...
                        </>
                    ) : (
                        "Generate Material"
                    )}
                </Button>
            </div>
        </div>
      </div>
    </div>
  );
};