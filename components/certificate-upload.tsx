'use client';

import { useState, useCallback } from 'react';
import { useDropzone } from 'react-dropzone';
import { Upload, X, FileText, Image as ImageIcon } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

interface Certificate {
  id: string;
  file: File;
  preview: string;
  caption: string;
  issuer: string;
}

export function CertificateUpload() {
  const [certificates, setCertificates] = useState<Certificate[]>([]);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [editCaption, setEditCaption] = useState('');
  const [editIssuer, setEditIssuer] = useState('');

  const onDrop = useCallback((acceptedFiles: File[]) => {
    acceptedFiles.forEach((file) => {
      const reader = new FileReader();
      reader.onload = () => {
        const newCert: Certificate = {
          id: Math.random().toString(36).substr(2, 9),
          file,
          preview: reader.result as string,
          caption: '',
          issuer: '',
        };
        setCertificates((prev) => [...prev, newCert]);
      };
      reader.readAsDataURL(file);
    });
  }, []);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: {
      'image/*': ['.jpeg', '.jpg', '.png', '.gif', '.webp'],
      'application/pdf': ['.pdf'],
    },
  });

  const isImage = (file: File) => file.type.startsWith('image/');

  const startEdit = (cert: Certificate) => {
    setEditingId(cert.id);
    setEditCaption(cert.caption);
    setEditIssuer(cert.issuer);
  };

  const saveEdit = () => {
    if (editingId) {
      setCertificates((prev) =>
        prev.map((cert) =>
          cert.id === editingId
            ? { ...cert, caption: editCaption, issuer: editIssuer }
            : cert
        )
      );
      setEditingId(null);
      setEditCaption('');
      setEditIssuer('');
    }
  };

  const removeCertificate = (id: string) => {
    setCertificates((prev) => prev.filter((cert) => cert.id !== id));
  };

  return (
    <div className="space-y-6">
      {/* Upload Area */}
      <div
        {...getRootProps()}
        className={`border-2 border-dashed rounded-lg p-8 sm:p-12 text-center cursor-pointer transition-all ${
          isDragActive
            ? 'border-accent bg-accent/5'
            : 'border-border hover:border-accent/50 hover:bg-muted/50'
        }`}
      >
        <input {...getInputProps()} />
        <div className="flex flex-col items-center gap-3">
          <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center">
            <Upload className="w-6 h-6 text-accent" />
          </div>
          <div>
            <p className="text-foreground font-medium">
              {isDragActive
                ? 'Drop your certificates here'
                : 'Drag & drop certificates here, or click to select'}
            </p>
            <p className="text-sm text-muted-foreground mt-1">
              Supported: PDF, PNG, JPG, WebP, GIF
            </p>
          </div>
        </div>
      </div>

      {/* Certificates Grid */}
      {certificates.length > 0 && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {certificates.map((cert) => (
            <div
              key={cert.id}
              className="border border-border rounded-lg overflow-hidden bg-background hover:shadow-lg transition-shadow"
            >
              {/* Preview */}
              <div className="relative w-full h-48 bg-muted flex items-center justify-center overflow-hidden">
                {isImage(cert.file) ? (
                  <img
                    src={cert.preview}
                    alt={cert.caption || cert.file.name}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <div className="flex flex-col items-center gap-2">
                    <FileText className="w-12 h-12 text-muted-foreground" />
                    <span className="text-sm text-muted-foreground">PDF</span>
                  </div>
                )}
                <button
                  onClick={() => removeCertificate(cert.id)}
                  className="absolute top-2 right-2 p-1 bg-red-500/10 hover:bg-red-500/20 rounded transition-colors"
                  title="Remove certificate"
                >
                  <X className="w-4 h-4 text-red-500" />
                </button>
              </div>

              {/* Caption and Issuer */}
              <div className="p-4 space-y-3">
                {editingId === cert.id ? (
                  <>
                    <div className="space-y-2">
                      <label className="text-xs font-medium text-muted-foreground">
                        Certificate Name
                      </label>
                      <Input
                        placeholder="e.g., AWS Solutions Architect"
                        value={editCaption}
                        onChange={(e) => setEditCaption(e.target.value)}
                        className="text-sm"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-xs font-medium text-muted-foreground">
                        Issuer/Organization
                      </label>
                      <Input
                        placeholder="e.g., Amazon Web Services"
                        value={editIssuer}
                        onChange={(e) => setEditIssuer(e.target.value)}
                        className="text-sm"
                      />
                    </div>
                    <div className="flex gap-2 pt-2">
                      <Button
                        size="sm"
                        onClick={saveEdit}
                        className="flex-1"
                      >
                        Save
                      </Button>
                      <Button
                        size="sm"
                        variant="outline"
                        onClick={() => setEditingId(null)}
                        className="flex-1"
                      >
                        Cancel
                      </Button>
                    </div>
                  </>
                ) : (
                  <>
                    <div
                      onClick={() => startEdit(cert)}
                      className="cursor-pointer hover:opacity-70 transition-opacity"
                    >
                      {cert.caption ? (
                        <p className="font-medium text-foreground text-sm">
                          {cert.caption}
                        </p>
                      ) : (
                        <p className="text-sm text-muted-foreground italic">
                          Click to add certificate name
                        </p>
                      )}
                      {cert.issuer && (
                        <p className="text-xs text-muted-foreground mt-1">
                          {cert.issuer}
                        </p>
                      )}
                    </div>
                    <Button
                      size="sm"
                      variant="outline"
                      onClick={() => startEdit(cert)}
                      className="w-full"
                    >
                      Edit Details
                    </Button>
                  </>
                )}

                {/* File Info */}
                <div className="pt-2 border-t border-border">
                  <p className="text-xs text-muted-foreground truncate">
                    {cert.file.name}
                  </p>
                  <p className="text-xs text-muted-foreground">
                    {(cert.file.size / 1024).toFixed(2)} KB
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Empty State */}
      {certificates.length === 0 && (
        <div className="text-center py-8">
          <ImageIcon className="w-12 h-12 text-muted-foreground mx-auto mb-3 opacity-50" />
          <p className="text-muted-foreground">
            No certificates uploaded yet. Start by dragging & dropping above.
          </p>
        </div>
      )}

      {/* Download Note */}
      {certificates.length > 0 && (
        <div className="p-4 bg-blue-50 dark:bg-blue-950 border border-blue-200 dark:border-blue-800 rounded-lg">
          <p className="text-sm text-blue-900 dark:text-blue-100">
            💡 <strong>Note:</strong> These certificates are stored locally in your browser. 
            To save them permanently, you may want to integrate with a backend storage service.
          </p>
        </div>
      )}
    </div>
  );
}
