import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  plugins: [react(), tailwindcss()],
  // Relative asset URLs work on GitHub Pages and when the build is previewed
  // from a different path or host.
  base: "./",
});
