import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import {resolve} from 'path'

// https://vitejs.dev/config/
module.exports = defineConfig({
 root: resolve(__dirname, './'),
 build: {
   outDir: resolve(__dirname, './build')
},
})
