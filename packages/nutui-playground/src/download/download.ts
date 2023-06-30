import { saveAs } from 'file-saver';

import index from './template/index.html?raw';
import main from './template/main.js?raw';
import pkg from './template/package.json?raw';
import config from './template/vite.config.js?raw';
import readme from './template/README.md?raw';
import { ReplStore } from '@vue/repl';

export async function downloadProject(store: ReplStore) {
  if (!confirm('Download project files?')) {
    return;
  }

  const { default: JSZip } = await import('jszip');
  const zip = new JSZip();

  // basic structure
  zip.file('index.html', index);
  zip.file('package.json', pkg);
  zip.file('vite.config.js', config);
  zip.file('README.md', readme);

  // project src
  const src = zip.folder('src')!;
  src.file('main.js', main);

  const files = store.getFiles();
  src.file('App.vue', files['App.vue']);

  const blob = await zip.generateAsync({ type: 'blob' });
  saveAs(blob, 'nutui-project.zip');
}
