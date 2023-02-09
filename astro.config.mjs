import image from "@astrojs/image";
import { defineConfig } from "astro/config";

// https://astro.build/config
import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  integrations: [image({
    serviceEntryPoint: "@astrojs/image/sharp"
  }), react()]
});