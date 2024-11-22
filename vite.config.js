import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import million from "million/compiler"; // https://million.dev/docs

export default defineConfig({

 plugins: [million.vite({auto:true, mute:true}),react()],
})