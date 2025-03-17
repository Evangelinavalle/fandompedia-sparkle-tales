
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// Configuración de Firebase para tu aplicación
// Para añadir tu información del proyecto de Firebase:
// 1. Ve a firebase.console.google.com
// 2. Selecciona tu proyecto
// 3. En la configuración del proyecto, encuentra la sección "Your apps"
// 4. Copia los valores de configuración

const firebaseConfig = {
  apiKey: "ESCRIBE_TU_API_KEY_AQUÍ",
  authDomain: "ESCRIBE_TU_AUTH_DOMAIN_AQUÍ",
  projectId: "ESCRIBE_TU_PROJECT_ID_AQUÍ",
  storageBucket: "ESCRIBE_TU_STORAGE_BUCKET_AQUÍ",
  messagingSenderId: "ESCRIBE_TU_MESSAGING_SENDER_ID_AQUÍ",
  appId: "ESCRIBE_TU_APP_ID_AQUÍ",
  measurementId: "ESCRIBE_TU_MEASUREMENT_ID_AQUÍ"
};

// Inicializa Firebase
// Usando getApps para evitar errores de inicialización duplicada
let app;
try {
  app = initializeApp(firebaseConfig);
} catch (error) {
  // Si ya existe una app, usa la existente
  console.error("Error inicializando Firebase:", error);
}

export const auth = getAuth(app);
export default app;
