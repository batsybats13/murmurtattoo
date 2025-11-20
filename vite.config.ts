import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      output: {
        manualChunks: (id) => {
          // Выделяем reactbits в отдельный чанк (тяжелая библиотека)
          if (id.includes("@appletosolutions/reactbits")) {
            return "reactbits";
          }
          // НЕ разделяем React - оставляем в основном бандле для стабильности
          // React, React-DOM и React-Router должны быть вместе
          // Остальные тяжелые библиотеки можно разделить
          if (
            id.includes("framer-motion") ||
            id.includes("gsap") ||
            id.includes("matter-js") ||
            id.includes("ogl") ||
            id.includes("gl-matrix") ||
            id.includes("three")
          ) {
            return "vendor";
          }
        },
      },
    },
    chunkSizeWarningLimit: 1000,
  },
  optimizeDeps: {
    include: [
      "gsap",
      "matter-js",
      "ogl",
      "gl-matrix",
      "three-stdlib",
      "@motionone/types",
      "postprocessing",
      "meshline",
      "@chakra-ui/react",
      "@emotion/react",
      "@emotion/styled",
      "@react-three/postprocessing",
      "@react-three/rapier",
      "@appletosolutions/reactbits",
    ],
  },
  define: {
    // Fix for React DevTools semver error with React 19
    "process.env": {},
  },
});
