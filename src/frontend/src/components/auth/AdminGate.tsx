import { ReactNode } from 'react';
import { Button } from '@/components/ui/button';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Loader2, LogIn, ShieldAlert } from 'lucide-react';
import { useInternetIdentity } from '@/hooks/useInternetIdentity';

interface AdminGateProps {
  children: ReactNode;
}

export default function AdminGate({ children }: AdminGateProps) {
  const { identity, login, loginStatus, isInitializing } = useInternetIdentity();

  if (isInitializing) {
    return (
      <div className="flex items-center justify-center py-12">
        <Loader2 className="h-8 w-8 animate-spin text-muted-foreground" />
      </div>
    );
  }

  if (!identity) {
    return (
      <Alert>
        <LogIn className="h-4 w-4" />
        <AlertTitle>Authentication Required</AlertTitle>
        <AlertDescription className="space-y-4">
          <p>You need to log in to access the admin dashboard.</p>
          <Button 
            onClick={login} 
            disabled={loginStatus === 'logging-in'}
          >
            {loginStatus === 'logging-in' ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Logging in...
              </>
            ) : (
              'Log In'
            )}
          </Button>
        </AlertDescription>
      </Alert>
    );
  }

  return <>{children}</>;
}
