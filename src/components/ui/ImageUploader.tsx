"use client";

import React, { useState, useRef, DragEvent, ChangeEvent } from 'react';
import { Upload, X, Image as ImageIcon } from 'lucide-react';
import { toast } from 'sonner';
import Image from 'next/image';

interface ImageUploaderProps {
  value?: string;
  onChange: (url: string) => void;
  className?: string;
}

const ImageUploader: React.FC<ImageUploaderProps> = ({ value, onChange, className = '' }) => {
  const [isUploading, setIsUploading] = useState(false);
  const [preview, setPreview] = useState<string | null>(value || null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const uploadFile = async (file: File) => {
    if (!file.type.startsWith('image/')) {
      toast.error('Please select an image file');
      return;
    }

    if (file.size > 5 * 1024 * 1024) { // 5MB limit
      toast.error('File size must be less than 5MB');
      return;
    }

    setIsUploading(true);
    try {
      const formData = new FormData();
      formData.append('file', file);

      const response = await fetch('/api/upload', {
        method: 'POST',
        body: formData,
      });

      if (!response.ok) {
        throw new Error('Upload failed');
      }

      const data = await response.json();
      setPreview(data.url);
      onChange(data.url);
      toast.success('Image uploaded successfully');
    } catch (error) {
      console.error('Upload error:', error);
      toast.error('Failed to upload image');
    } finally {
      setIsUploading(false);
    }
  };

  const handleDrop = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    const files = Array.from(e.dataTransfer.files);
    if (files.length > 0) {
      uploadFile(files[0]);
    }
  };

  const handleFileSelect = (e: ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files && files.length > 0) {
      uploadFile(files[0]);
    }
  };

  const handleClick = () => {
    fileInputRef.current?.click();
  };

  const handleRemove = () => {
    setPreview(null);
    onChange('');
  };

  return (
    <div className={`space-y-2 ${className}`}>
      <label className="text-sm font-semibold text-slate-300">Blog Image</label>

      {preview ? (
        <div className="relative">
          <Image
            src={preview}
            alt="Preview"
            width={500}
            height={200}
            className="w-full h-48 object-cover rounded-xl border border-slate-700/50"
          />
          <button
            type="button"
            onClick={handleRemove}
            className="absolute top-2 right-2 p-1 bg-red-500/20 border border-red-500/30 rounded-lg text-red-300 hover:bg-red-500/30 transition-colors"
          >
            <X className="w-4 h-4" />
          </button>
        </div>
      ) : (
        <div
          onDrop={handleDrop}
          onDragOver={(e) => e.preventDefault()}
          onClick={handleClick}
          className="relative border-2 border-dashed border-slate-700/50 rounded-xl p-8 text-center cursor-pointer hover:border-slate-600/50 transition-colors group"
        >
          <input
            ref={fileInputRef}
            type="file"
            accept="image/*"
            onChange={handleFileSelect}
            className="hidden"
          />

          <div className="flex flex-col items-center gap-4">
            {isUploading ? (
              <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-400"></div>
            ) : (
              <div className="p-3 bg-slate-800/50 rounded-xl group-hover:bg-slate-700/50 transition-colors">
                <Upload className="w-6 h-6 text-slate-400" />
              </div>
            )}

            <div>
              <p className="text-sm font-medium text-slate-200">
                {isUploading ? 'Uploading...' : 'Drop image here or click to browse'}
              </p>
              <p className="text-xs text-slate-500 mt-1">
                PNG, JPG, GIF up to 5MB
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ImageUploader;
