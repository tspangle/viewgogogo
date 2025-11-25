// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  // 确保输出静态 HTML
  output: 'static',
  // 可选：压缩 HTML
  compressHTML: true,
});