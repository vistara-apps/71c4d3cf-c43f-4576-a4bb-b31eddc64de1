'use client';

import { useState, useRef } from 'react';
import { Camera, X, Loader2 } from 'lucide-react';

interface CameraViewProps {
  onCapture: (imageData: string) => void;
  onClose: () => void;
  isLoading: boolean;
}

export function CameraView({ onCapture, onClose, isLoading }: CameraViewProps) {
  const [capturedImage, setCapturedImage] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        const imageData = reader.result as string;
        setCapturedImage(imageData);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleCapture = () => {
    if (capturedImage) {
      onCapture(capturedImage);
    }
  };

  const handleRetake = () => {
    setCapturedImage(null);
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  return (
    <div className="fixed inset-0 bg-bg z-50 flex flex-col">
      {/* Header */}
      <div className="flex items-center justify-between p-4 bg-surface/95 backdrop-blur-sm">
        <button
          onClick={onClose}
          className="p-2 hover:bg-fg/5 rounded-full transition-colors duration-200"
          disabled={isLoading}
        >
          <X className="w-6 h-6 text-fg" />
        </button>
        <span className="font-semibold text-fg">Scan Item</span>
        <div className="w-10" />
      </div>

      {/* Camera View */}
      <div className="flex-1 relative bg-black flex items-center justify-center">
        {capturedImage ? (
          <img
            src={capturedImage}
            alt="Captured item"
            className="max-w-full max-h-full object-contain"
          />
        ) : (
          <div className="text-center space-y-4 p-8">
            <Camera className="w-16 h-16 text-fg/40 mx-auto" />
            <p className="text-fg/60">
              Click the button below to select an image
            </p>
          </div>
        )}

        {/* Scanning Overlay */}
        {isLoading && (
          <div className="absolute inset-0 bg-black/80 flex items-center justify-center">
            <div className="text-center space-y-4">
              <Loader2 className="w-12 h-12 text-primary animate-spin mx-auto" />
              <p className="text-fg font-medium">Analyzing item...</p>
            </div>
          </div>
        )}
      </div>

      {/* Controls */}
      <div className="p-6 bg-surface space-y-4">
        {!capturedImage ? (
          <>
            <input
              ref={fileInputRef}
              type="file"
              accept="image/*"
              capture="environment"
              onChange={handleFileSelect}
              className="hidden"
              id="camera-input"
            />
            <label
              htmlFor="camera-input"
              className="block w-full bg-primary hover:bg-accent text-white font-semibold py-4 px-6 rounded-xl text-center cursor-pointer transition-all duration-200"
            >
              <Camera className="w-6 h-6 inline-block mr-2" />
              Take Photo
            </label>
          </>
        ) : (
          <div className="flex gap-3">
            <button
              onClick={handleRetake}
              className="flex-1 bg-surface border border-fg/20 hover:bg-fg/5 text-fg font-semibold py-4 px-6 rounded-xl transition-all duration-200"
              disabled={isLoading}
            >
              Retake
            </button>
            <button
              onClick={handleCapture}
              className="flex-1 bg-primary hover:bg-accent text-white font-semibold py-4 px-6 rounded-xl transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
              disabled={isLoading}
            >
              {isLoading ? (
                <>
                  <Loader2 className="w-5 h-5 inline-block mr-2 animate-spin" />
                  Scanning...
                </>
              ) : (
                'Scan Item'
              )}
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
