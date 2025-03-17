
import { useState } from "react";
import { useAuth } from "@/context/AuthContext";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { User } from "lucide-react";

type AuthMode = "signin" | "signup";

export function AuthModal() {
  const [isOpen, setIsOpen] = useState(false);
  const [mode, setMode] = useState<AuthMode>("signin");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  
  const { currentUser, signIn, signUp, logout } = useAuth();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    try {
      if (mode === "signin") {
        await signIn(email, password);
      } else {
        await signUp(email, password);
      }
      setIsOpen(false);
      resetForm();
    } catch (error) {
      // Error is handled in AuthContext
    } finally {
      setIsLoading(false);
    }
  };

  const resetForm = () => {
    setEmail("");
    setPassword("");
  };

  const toggleMode = () => {
    setMode(mode === "signin" ? "signup" : "signin");
    resetForm();
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        {currentUser ? (
          <Button 
            variant="outline" 
            size="sm" 
            className="flex items-center gap-2"
            onClick={(e) => {
              e.preventDefault();
              logout();
            }}
          >
            <User className="h-4 w-4" />
            Sign Out
          </Button>
        ) : (
          <Button 
            variant="outline" 
            size="sm" 
            className="flex items-center gap-2"
          >
            <User className="h-4 w-4" />
            Sign In
          </Button>
        )}
      </DialogTrigger>
      
      {!currentUser && (
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>
              {mode === "signin" ? "Sign In" : "Create Account"}
            </DialogTitle>
          </DialogHeader>
          
          <form onSubmit={handleSubmit} className="space-y-4 pt-4">
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="your@email.com"
                required
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="password">Password</Label>
              <Input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••"
                required
                minLength={6}
              />
            </div>
            
            <div className="flex flex-col space-y-4 pt-2">
              <Button type="submit" disabled={isLoading}>
                {isLoading
                  ? "Loading..."
                  : mode === "signin"
                  ? "Sign In"
                  : "Create Account"}
              </Button>
              
              <Button
                type="button"
                variant="link"
                onClick={toggleMode}
                className="self-center"
              >
                {mode === "signin"
                  ? "Don't have an account? Sign Up"
                  : "Already have an account? Sign In"}
              </Button>
            </div>
          </form>
        </DialogContent>
      )}
    </Dialog>
  );
}
