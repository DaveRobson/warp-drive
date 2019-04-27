import * as React from 'react';
import * as ReactDOM from 'react-dom';

import { PageModel } from '../model/PageModel';
import { ReactDynamicComponentList } from './ReactDynamicComponentList';

export = (elementId: string, pageModel: PageModel) => {
  console.log(elementId);

  ReactDOM.render(
    <ReactDynamicComponentList pageModel={ pageModel }/>,
    document.getElementById(elementId),
  );
};
