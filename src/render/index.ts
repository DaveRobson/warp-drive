import ReactRenderer from './ReactRenderer';
import { PageModel } from '../model/PageModel';
import { HELLO } from '../model/ComponentType'

export = (elementId: string) => {

  const pageModel: PageModel = {
    id: 'Home',
    components: [
      {
        id: 'Hello',
        type: HELLO,
        properties: {
          compiler: 'typescript',
          framework: 'react',
        },
      },
    ],
  };

  ReactRenderer(elementId, pageModel);
};
