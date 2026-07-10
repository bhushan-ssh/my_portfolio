'use client';

import { useState, useCallback } from 'react';
import { useDropzone } from 'react-dropzone';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card } from '@/components/ui/card';
import { Upload, X, FileText, Image as ImageIcon, Plus } from 'lucide-react';

interface Certificate {
  id: string;
  file: File;
  preview: string;
  name: string;
  issuer: string;
  date: string;
}

export function AdminCertificateUpload() {
  const [certificates, setCertificates] = useState<Certificate[]>([]);
  const [editingId, setEditingId] = useState<string | null>(null);

  const onDrop = useCallback((acceptedFiles: File[]) => {
    acceptedFiles.forEach((file) => {
      const reader = new FileReader();
      reader.onload = () => {
        const newCert: Certificate = {
          id: Math.random().toString(36).substr(2, 9),
          file,
          preview: reader.result as string,
          name: file.name.replace(/\.[^/.]+$/, ''),
          issuer: '',
          date: new Date().toISOString().split('T')[0],
        };
        setCertificates((prev) => [newCert, ...prev]);
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

  const handleRemove = (id: string) => {
    setCertificates((prev) => prev.filter((cert) => cert.id !== id));
    setEditingId(null);
  };

  const handleUpdate = (id: string, field: string, value: string) => {
    setCertificates((prev) =>
      prev.map((cert) =>
        cert.id === id ? { ...cert, [field]: value } : cert
      )
    );
  };

  const getFileIcon = (file: File) => {
    return file.type === 'application/pdf' ? (
      <FileText className="w-8 h-8 text-red-500" />
    ) : (
      <ImageIcon className="w-8 h-8 text-blue-500" />
    );
  };

  return (
    <div className="space-y-6">
      <div
        {...getRootProps()}
        className={`border-2 border-dashed rounded-lg p-12 text-center cursor-pointer transition-colors ${
          isDragActive
            ? 'border-blue-500 bg-blue-500/10'
            : 'border-slate-600 bg-slate-800/50 hover:border-slate-500'
        }`}
      >
        <input {...getInputProps()} />
        <Upload className="w-12 h-12 mx-auto mb-4 text-slate-400" />
        <p className="text-lg font-medium text-white mb-2">
          {isDragActive ? 'Drop your certificates here' : 'Drag certificates here or click to select'}
        </p>
        <p className="text-sm text-slate-400">
          Supports images (PNG, JPG, GIF, WebP) and PDFs
        </p>
      </div>

      {certificates.length > 0 && (
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-semibold text-white">
              Uploaded Certificates ({certificates.length})
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {certificates.map((cert) => (
              <Card
                key={cert.id}
                className={`relative p-4 bg-slate-800 border-slate-700 hover:border-slate-600 transition-all cursor-pointer ${
                  editingId === cert.id ? 'border-blue-500' : ''
                }`}
                onClick={() => setEditingId(editingId === cert.id ? null : cert.id)}
              >
                <div className="mb-4">
                  {cert.file.type === 'application/pdf' ? (
                    <div className="w-full aspect-video bg-slate-700 rounded flex items-center justify-center">
                      {getFileIcon(cert.file)}
                    </div>
                  ) : (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img
                      src={cert.preview}
                      alt={cert.name}
                      className="w-full aspect-video object-cover rounded"
                    />
                  )}
                </div>

                <div className="space-y-3">
                  {editingId === cert.id ? (
                    <>
                      <div>
                        <label className="text-xs font-medium text-slate-400">Title</label>
                        <Input
                          value={cert.name}
                          onChange={(e) =>
                            handleUpdate(cert.id, 'name', e.target.value)
                          }
                          className="mt-1 bg-slate-700 border-slate-600 text-white"
                          placeholder="Certificate title"
                        />
                      </div>

                      <div>
                        <label className="text-xs font-medium text-slate-400">Issuer</label>
                        <Input
                          value={cert.issuer}
                          onChange={(e) =>
                            handleUpdate(cert.id, 'issuer', e.target.value)
                          }
                          className="mt-1 bg-slate-700 border-slate-600 text-white"
                          placeholder="Issuing organization"
                        />
                      </div>

                      <div>
                        <label className="text-xs font-medium text-slate-400">Date</label>
                        <Input
                          type="date"
                          value={cert.date}
                          onChange={(e) =>
                            handleUpdate(cert.id, 'date', e.target.value)
                          }
                          className="mt-1 bg-slate-700 border-slate-600 text-white"
                        />
                      </div>
                    </>
                  ) : (
                    <>
                      <div>
                        <p className="text-sm font-medium text-white truncate">
                          {cert.name || 'Untitled'}
                        </p>
                        {cert.issuer && (
                          <p className="text-xs text-slate-400 truncate">
                            {cert.issuer}
                          </p>
                        )}
                        <p className="text-xs text-slate-500 mt-1">{cert.date}</p>
                      </div>
                    </>
                  )}
                </div>

                <div className="mt-4 flex gap-2">
                  {editingId === cert.id && (
                    <Button
                      size="sm"
                      variant="outline"
                      className="flex-1 text-xs"
                      onClick={(e) => {
                        e.stopPropagation();
                        setEditingId(null);
                      }}
                    >
                      Done
                    </Button>
                  )}
                  <Button
                    size="sm"
                    variant="destructive"
                    className="flex-1"
                    onClick={(e) => {
                      e.stopPropagation();
                      handleRemove(cert.id);
                    }}
                  >
                    <X className="w-4 h-4" />
                  </Button>
                </div>

                <p className="text-xs text-slate-500 mt-2 text-center">
                  {cert.file.name}
                </p>
              </Card>
            ))}
          </div>

          <div className="mt-8 p-4 bg-blue-500/10 border border-blue-500/20 rounded-lg">
            <p className="text-sm text-blue-400">
              <strong>Note:</strong> Currently storing certificates in browser session. 
              To make changes persistent, connect a database or cloud storage integration in your project settings.
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
