'use client';

import { useState, useEffect } from 'react';
import { Award, Lock } from 'lucide-react';
import { CERTIFICATIONS } from '@/lib/portfolio-config';
import { CertificateUpload } from './certificate-upload';
import { OwnerLoginDialog } from './owner-login-dialog';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Button } from '@/components/ui/button';
import { isPortfolioOwner, logoutOwner } from '@/lib/auth';

export function CertificationsSection() {
  const [isOwner, setIsOwner] = useState(false);
  const [showLoginDialog, setShowLoginDialog] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    setIsOwner(isPortfolioOwner());
  }, []);

  if (!mounted) return null;

  const handleLoginSuccess = () => {
    setIsOwner(true);
  };

  const handleLogout = () => {
    logoutOwner();
    setIsOwner(false);
  };

  return (
    <section className="border-t border-border bg-muted py-16 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground">Certifications</h2>
          {isOwner && (
            <Button
              size="sm"
              variant="outline"
              onClick={handleLogout}
              className="flex items-center gap-2"
            >
              <Lock className="w-4 h-4" />
              Logout
            </Button>
          )}
        </div>

        <Tabs defaultValue="verified" className="w-full">
          <TabsList className="grid w-full max-w-md grid-cols-2">
            <TabsTrigger value="verified">Verified</TabsTrigger>
            {isOwner ? (
              <TabsTrigger value="upload">My Certificates</TabsTrigger>
            ) : (
              <TabsTrigger
                value="upload"
                onClick={() => setShowLoginDialog(true)}
                disabled
                className="opacity-50 cursor-not-allowed"
              >
                My Certificates
              </TabsTrigger>
            )}
          </TabsList>

          {/* Verified Certifications Tab */}
          <TabsContent value="verified" className="mt-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {CERTIFICATIONS.map((cert) => (
                <a
                  key={cert.name}
                  href={cert.credentialLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group p-6 bg-background border border-border rounded-lg hover:border-accent/70 hover:shadow-md transition-all duration-200"
                >
                  <div className="flex gap-4">
                    <div className="flex-shrink-0">
                      <div className="flex items-center justify-center w-12 h-12 rounded-full bg-accent/10">
                        <Award size={24} className="text-accent" />
                      </div>
                    </div>
                    <div className="flex-grow">
                      <h3 className="font-semibold text-foreground text-base group-hover:text-accent transition-colors">{cert.name}</h3>
                      <p className="text-sm text-muted-foreground mt-1">{cert.organization}</p>
                      <p className="text-xs text-muted-foreground mt-2">{cert.date}</p>
                    </div>
                  </div>
                </a>
              ))}
            </div>
          </TabsContent>

          {/* Upload Certificates Tab */}
          {isOwner && (
            <TabsContent value="upload" className="mt-8">
              <div className="bg-background rounded-lg p-6 sm:p-8">
                <div className="mb-6">
                  <h3 className="text-lg font-semibold text-foreground mb-2">Upload Your Certificates</h3>
                  <p className="text-sm text-muted-foreground">
                    Add images or PDFs of your certificates with titles and issuer information. Similar to Google Drive, you can drag and drop, add captions, and organize your documents.
                  </p>
                </div>
                <CertificateUpload />
              </div>
            </TabsContent>
          )}
        </Tabs>

        {!isOwner && (
          <div className="mt-6 p-4 bg-blue-50 dark:bg-blue-950 border border-blue-200 dark:border-blue-800 rounded-lg flex items-center justify-between">
            <div>
              <p className="text-sm text-blue-900 dark:text-blue-100">
                <Lock className="w-4 h-4 inline mr-2" />
                <strong>Portfolio owner?</strong> Click on "My Certificates" tab to unlock certificate uploads.
              </p>
            </div>
            <Button
              size="sm"
              variant="outline"
              onClick={() => setShowLoginDialog(true)}
              className="ml-4"
            >
              Unlock
            </Button>
          </div>
        )}
      </div>

      <OwnerLoginDialog
        open={showLoginDialog}
        onOpenChange={setShowLoginDialog}
        onSuccess={handleLoginSuccess}
      />
    </section>
  );
}
