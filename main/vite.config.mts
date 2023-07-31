import {defineConfig} from "vite";

export default defineConfig({
    server: {
        port: 8080,
        strictPort: true,
        headers: {
            "Cross-Origin-Opener-Policy": "same-origin",
            "Cross-Origin-Embedder-Policy": "require-corp",
        },
        proxy: {
            '/iframe': {
                target: 'http://localhost:8081/',
            }
        },
        cors: false
    }
});

