import { PageModel } from '../model/PageModel';
import * as React from 'react';
import { Hello } from '../components/Hello';
import { ComponentModel } from '../model/ComponentModel';

export interface DynamicComponentListProps {
  pageModel: PageModel;
}

interface ReactComponentRegistry {
  [index: string]: React.ComponentClass;
}

export class ReactDynamicComponentList extends React.Component<DynamicComponentListProps> {
  registry: ReactComponentRegistry = {
    HELLO: Hello,
  };

  componentFactory = (componentType: string): React.ComponentClass => {
    return this.registry[componentType];
  }

  constructComponents = (componentModel: ComponentModel) => {
    const componentClass = this.componentFactory(componentModel.type);
    const properties = {
      ...componentModel.properties,
      key: componentModel.id,
    };

    return React.createElement(componentClass, properties);
  }

  render() {

    const components = this.props.pageModel.components.map(this.constructComponents);

    return (
      <div>
        { components }
      </div>
    );
  }
}
