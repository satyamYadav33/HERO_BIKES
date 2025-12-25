
import React, { useState, useRef } from 'react';
import { GoogleGenAI } from "@google/genai";
import { Sparkles, Download, X, Upload, Loader2, Wand2 } from 'lucide-react';

interface ImageEditorProps {
  initialImage?: string;
  onClose: () => void;
}

const ImageEditor: React.FC<ImageEditorProps> = ({ initialImage, onClose }) => {
  const [prompt, setPrompt] = useState('');
  const [currentImage, setCurrentImage] = useState(initialImage || '');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setCurrentImage(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const applyAiEdit = async () => {
    if (!currentImage || !prompt) return;
    setLoading(true);
    setError(null);

    try {
      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
      
      // Extract base64 data and mime type
      const base64Parts = currentImage.split(',');
      const mimeType = base64Parts[0].match(/:(.*?);/)?.[1] || 'image/png';
      const base64Data = base64Parts[1];

      const response = await ai.models.generateContent({
        model: 'gemini-2.5-flash-image',
        contents: {
          parts: [
            {
              inlineData: {
                data: base64Data,
                mimeType: mimeType,
              },
            },
            {
              text: `Please edit this image based on the following request: ${prompt}. Return only the edited image.`,
            },
          ],
        },
      });

      let foundImage = false;
      if (response.candidates?.[0]?.content?.parts) {
        for (const part of response.candidates[0].content.parts) {
          if (part.inlineData) {
            const newBase64 = part.inlineData.data;
            setCurrentImage(`data:${part.inlineData.mimeType};base64,${newBase64}`);
            foundImage = true;
            break;
          }
        }
      }

      if (!foundImage) {
        setError("AI didn't return an image. It might have responded with text instead.");
        console.log("Text response:", response.text);
      }
    } catch (err: any) {
      console.error("AI Edit Error:", err);
      setError("Failed to edit image. " + (err.message || "Please check your connection and prompt."));
    } finally {
      setLoading(false);
    }
  };

  const downloadImage = () => {
    const link = document.createElement('a');
    link.href = currentImage;
    link.download = 'hero-bike-edit.png';
    link.click();
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8 bg-slate-900/95 backdrop-blur-xl">
      <div className="bg-white w-full max-w-5xl rounded-[40px] overflow-hidden shadow-2xl flex flex-col lg:flex-row h-full max-h-[90vh]">
        {/* Preview Area */}
        <div className="flex-1 bg-slate-100 flex items-center justify-center p-6 relative overflow-hidden group">
          {currentImage ? (
            <img 
              src={currentImage} 
              alt="Preview" 
              className="max-w-full max-h-full object-contain rounded-2xl shadow-xl transition-transform duration-500 group-hover:scale-[1.02]" 
            />
          ) : (
            <div className="text-center">
              <div className="w-20 h-20 bg-slate-200 rounded-full flex items-center justify-center mx-auto mb-4 text-slate-400">
                <Upload size={32} />
              </div>
              <p className="text-slate-500 font-bold">No Image Selected</p>
            </div>
          )}
          
          <button 
            onClick={onClose}
            className="absolute top-6 left-6 w-12 h-12 bg-white/80 backdrop-blur text-slate-900 rounded-full flex items-center justify-center hover:bg-red-600 hover:text-white transition-all shadow-lg"
          >
            <X size={24} />
          </button>
        </div>

        {/* Controls Area */}
        <div className="w-full lg:w-[400px] p-8 flex flex-col h-full border-l border-slate-100">
          <div className="mb-8">
            <h2 className="text-2xl font-black flex items-center gap-2 mb-2">
              <Sparkles className="text-red-600" />
              AI Studio
            </h2>
            <p className="text-slate-500 text-sm">Use Gemini 2.5 Flash to transform your bike captures with text prompts.</p>
          </div>

          <div className="flex-1 space-y-6">
            <div>
              <label className="block text-xs font-bold uppercase tracking-widest text-slate-400 mb-3">Your Prompt</label>
              <textarea 
                value={prompt}
                onChange={(e) => setPrompt(e.target.value)}
                placeholder="e.g., 'Add a cinematic sunrise background', 'Apply a grainy retro film filter', 'Make the bike color matte black'..."
                className="w-full h-32 px-4 py-3 bg-slate-50 border border-slate-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-red-600/20 focus:border-red-600 resize-none transition-all text-sm"
              />
            </div>

            <div className="flex flex-col gap-3">
              <button 
                onClick={applyAiEdit}
                disabled={loading || !currentImage || !prompt}
                className={`w-full py-4 rounded-2xl font-bold flex items-center justify-center gap-3 transition-all ${loading ? 'bg-slate-100 text-slate-400' : 'bg-red-600 text-white hover:bg-red-700 shadow-lg shadow-red-600/20 hover:scale-[1.02]'}`}
              >
                {loading ? <Loader2 className="animate-spin" /> : <Wand2 size={20} />}
                {loading ? 'Processing...' : 'Apply AI Magic'}
              </button>

              <button 
                onClick={() => fileInputRef.current?.click()}
                className="w-full py-4 bg-white border border-slate-200 text-slate-900 rounded-2xl font-bold flex items-center justify-center gap-3 hover:bg-slate-50 transition-all"
              >
                <Upload size={20} className="text-red-600" />
                Upload Photo
              </button>
              <input type="file" ref={fileInputRef} onChange={handleImageUpload} className="hidden" accept="image/*" />
            </div>

            {error && (
              <div className="p-4 bg-red-50 text-red-600 text-xs font-medium rounded-xl border border-red-100 animate-in fade-in slide-in-from-top-2">
                {error}
              </div>
            )}
          </div>

          <div className="pt-8 border-t border-slate-100 flex gap-4">
            <button 
              onClick={downloadImage}
              disabled={!currentImage}
              className="flex-1 py-4 bg-slate-900 text-white rounded-2xl font-bold flex items-center justify-center gap-2 hover:bg-black transition-all disabled:opacity-50"
            >
              <Download size={18} />
              Save
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImageEditor;
