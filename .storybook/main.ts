import type { StorybookConfig } from '@storybook/nextjs';

import { join, dirname } from "path"

function getAbsolutePath(value: string): any {
  return dirname(require.resolve(join(value, 'package.json')))
}
const config: StorybookConfig = {
  "stories": [
    "../packages/ui/src/components/**/*.story.@(js|jsx|mjs|ts|tsx)"
  ],
  "addons": [],
  "framework": {
    "name": getAbsolutePath('@storybook/nextjs'),
    "options": {}
  }
};
export default config;