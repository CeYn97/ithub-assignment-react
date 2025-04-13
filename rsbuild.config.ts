import { defineConfig } from '@rsbuild/core';
import { pluginReact } from '@rsbuild/plugin-react';
import { pluginSvgr } from '@rsbuild/plugin-svgr';

export default defineConfig({
  html: {
    title: "Feedback",
    meta: {
      description: "feedback widget"
    }
  },
  plugins: [pluginReact(), pluginSvgr()],
});
