import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

// https://vite.dev/config/
export default defineConfig({
	plugins: [react()],
	build: {
		chunkSizeWarningLimit: 1000, // Set a larger size limit, e.g., 1000kB
	},
});
