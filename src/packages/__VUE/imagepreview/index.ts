import ImagePreview from './index.vue';
import { h } from 'vue';
import { ImageInterface } from './types';
import { CreateComponent } from '@/packages/utils/util';
import { Interceptor } from '@/packages/utils/util';

export class ImagePreviewOptions {
  show: Boolean = false;
  images: ImageInterface[] = [];
  videos?: [] = [];
  contentClose?: Boolean = true;
  initNo?: Number = 0;
  paginationVisible?: Boolean = false;
  paginationColor?: String = '';
  autoplay?: Number | String = 0;
  isWrapTeleport?: Boolean = false;
  showIndex?: boolean = true;
  closeable?: boolean = false;
  closeIcon?: string = 'circle-close';
  closeIconPosition?: String = 'top-right';
  beforeClose?: Interceptor;
  maxZoom?: number = 3;
  minZoom?: number = 1 / 3;
  isLoop?: boolean = true;
  close?(): void;
  change?(index: number): void;
  teleport?: string | HTMLElement = 'body';
}

class ImagePreviewFunction {
  options: ImagePreviewOptions = new ImagePreviewOptions();

  constructor(_options: ImagePreviewOptions) {
    const options = Object.assign(this.options, _options);
    const intertace = CreateComponent(options, {
      name: 'imagepreview',
      wrapper: {
        setup() {
          return () => {
            return h(ImagePreview, options);
          };
        }
      }
    });
  }
}

const _ImagePreview = (options: ImagePreviewOptions): ImagePreviewFunction => new ImagePreviewFunction(options);
_ImagePreview.install = (app: any) => {
  app.use(ImagePreview);
  app.config.globalProperties.$imagepreview = _ImagePreview;
};

export { ImagePreview };
export default _ImagePreview;
