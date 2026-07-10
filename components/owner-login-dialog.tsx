'use client';

import { useState } from 'react';
import { Lock } from 'lucide-react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { authenticateOwner } from '@/lib/auth';

interface OwnerLoginDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onSuccess: () => void;
}

export function OwnerLoginDialog({
  open,
  onOpenChange,
  onSuccess,
}: OwnerLoginDialogProps) {
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setIsLoading(true);

    try {
      if (authenticateOwner(password)) {
        setPassword('');
        onOpenChange(false);
        onSuccess();
      } else {
        setError('Invalid password. Please try again.');
      }
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[400px]">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            <Lock className="w-5 h-5" />
            Portfolio Owner Access
          </DialogTitle>
          <DialogDescription>
            Enter your password to unlock certificate upload features.
          </DialogDescription>
        </DialogHeader>

        <form onSubmit={handleLogin} className="space-y-4">
          <div className="space-y-2">
            <label className="text-sm font-medium text-foreground">
              Password
            </label>
            <Input
              type="password"
              placeholder="Enter password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              disabled={isLoading}
              autoFocus
            />
            {error && (
              <p className="text-sm text-red-500">{error}</p>
            )}
          </div>

          <div className="flex gap-2">
            <Button
              type="submit"
              disabled={isLoading || !password}
              className="flex-1"
            >
              {isLoading ? 'Unlocking...' : 'Unlock'}
            </Button>
            <Button
              type="button"
              variant="outline"
              onClick={() => {
                onOpenChange(false);
                setPassword('');
                setError('');
              }}
              disabled={isLoading}
              className="flex-1"
            >
              Cancel
            </Button>
          </div>

          <p className="text-xs text-muted-foreground text-center">
            This feature is only available to the portfolio owner.
          </p>
        </form>
      </DialogContent>
    </Dialog>
  );
}
