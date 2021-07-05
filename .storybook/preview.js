import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport';
import './storybook.scss';
import prettier from 'prettier/esm/standalone';
import htmlParser from 'prettier/esm/parser-html';

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: { expanded: true },
  viewport: { viewports: INITIAL_VIEWPORTS },
  docs: {
    transformSource: (src) => {
      // Remove `() => `` from stories
      const match = /^\(\) => [`'"](.*)['`"]$/sm.exec(src);
      // Pretty print the Docs code source
      return match ? prettier.format(match[1].trim(), {printWidth: 120, parser: "html", plugins: [htmlParser]}) : src;
    }
  }
}