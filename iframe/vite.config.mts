import {defineConfig} from "vite";

export default defineConfig({
    base: "/iframe",
    build: {
        sourcemap: "inline"
    },
    preview: {
        port: 8081,
        strictPort: true,
        headers: {
            "Cross-Origin-Opener-Policy": "same-origin",
            "Cross-Origin-Embedder-Policy": "require-corp",
            "Cross-Origin-Resource-Policy": "same-origin",
            "Access-Control-Allow-Origin": "http://localhost:8080"
        },
        cors: false
    }
});
