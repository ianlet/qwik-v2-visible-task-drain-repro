import { defineConfig } from "vite";
import { qwikVite } from "@qwik.dev/core/optimizer";

export default defineConfig({
  plugins: [qwikVite()],
  test: {
    globals: true,
    environment: "happy-dom",
  },
});
