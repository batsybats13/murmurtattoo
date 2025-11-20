import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
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
