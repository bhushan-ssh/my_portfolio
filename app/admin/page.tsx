'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Lock, AlertCircle } from 'lucide-react';

const ADMIN_PASSWORD = process.env.NEXT_PUBLIC_ADMIN_PASSWORD || 'admin123';

export default function AdminLoginPage() {
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setIsLoading(true);

    // Simulate a small delay for UX
    await new Promise((resolve) => setTimeout(resolve, 300));

    if (password === ADMIN_PASSWORD) {
      // Store session in sessionStorage (cleared when browser closes)
      sessionStorage.setItem('adminSession', 'authenticated');
      router.push('/admin/dashboard');
    } else {
      setError('Invalid password. Please try again.');
      setPassword('');
    }

    setIsLoading(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 flex items-center justify-center p-4">
      <Card className="w-full max-w-md shadow-2xl border-slate-700">
        <CardHeader className="space-y-2">
          <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-blue-500/10 mx-auto">
            <Lock className="w-6 h-6 text-blue-500" />
          </div>
          <CardTitle className="text-center text-2xl">Admin Panel</CardTitle>
          <CardDescription className="text-center">
            Certificate Management System
          </CardDescription>
        </CardHeader>

        <CardContent>
          <form onSubmit={handleLogin} className="space-y-4">
            <div className="space-y-2">
              <label htmlFor="password" className="text-sm font-medium">
                Admin Password
              </label>
              <Input
                id="password"
                type="password"
                placeholder="Enter admin password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                disabled={isLoading}
                className="border-slate-600"
                autoFocus
              />
            </div>

            {error && (
              <div className="flex items-start gap-3 p-3 rounded-lg bg-red-500/10 border border-red-500/20">
                <AlertCircle className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
                <p className="text-sm text-red-600 dark:text-red-400">{error}</p>
              </div>
            )}

            <Button
              type="submit"
              disabled={isLoading || !password}
              className="w-full"
            >
              {isLoading ? 'Verifying...' : 'Access Admin Panel'}
            </Button>
          </form>

          <p className="text-xs text-muted-foreground text-center mt-4">
            This is a secure admin area. Session data is stored temporarily.
          </p>
        </CardContent>
      </Card>
    </div>
  );
}
