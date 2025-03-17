
import { createContext, useContext, useEffect, useState, ReactNode } from "react";
import { 
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  User
} from "firebase/auth";
import { auth } from "@/lib/firebase";
import { useToast } from "@/hooks/use-toast";

interface AuthContextType {
  currentUser: User | null;
  signUp: (email: string, password: string) => Promise<void>;
  signIn: (email: string, password: string) => Promise<void>;
  logout: () => Promise<void>;
  loading: boolean;
}

const AuthContext = createContext<AuthContextType | null>(null);

export function useAuth() {
  return useContext(AuthContext) as AuthContextType;
}

export function AuthProvider({ children }: { children: ReactNode }) {
  const [currentUser, setCurrentUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const { toast } = useToast();

  async function signUp(email: string, password: string) {
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      toast({
        title: "Cuenta creada",
        description: "Tu cuenta ha sido creada exitosamente.",
      });
    } catch (error) {
      if (error instanceof Error) {
        toast({
          title: "Error al crear cuenta",
          description: error.message,
          variant: "destructive",
        });
      }
      throw error;
    }
  }

  async function signIn(email: string, password: string) {
    try {
      await signInWithEmailAndPassword(auth, email, password);
      toast({
        title: "¡Bienvenido de vuelta!",
        description: "Has iniciado sesión exitosamente.",
      });
    } catch (error) {
      if (error instanceof Error) {
        toast({
          title: "Error al iniciar sesión",
          description: error.message,
          variant: "destructive",
        });
      }
      throw error;
    }
  }

  async function logout() {
    try {
      await signOut(auth);
      toast({
        title: "Sesión cerrada",
        description: "Has cerrado sesión exitosamente.",
      });
    } catch (error) {
      if (error instanceof Error) {
        toast({
          title: "Error al cerrar sesión",
          description: error.message,
          variant: "destructive",
        });
      }
      throw error;
    }
  }

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setCurrentUser(user);
      setLoading(false);
    });

    return unsubscribe;
  }, []);

  const value = {
    currentUser,
    signUp,
    signIn,
    logout,
    loading
  };

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
}
