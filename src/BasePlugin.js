import { FlexPlugin } from 'flex-plugin';
import React from 'react';
import CustomTaskListComponent from './CustomTaskListComponent';

export default class BasePlugin extends FlexPlugin {
  name = 'BasePlugin';

  init(flex, manager) {
    flex.AgentDesktopView.Panel1.Content.add(<CustomTaskListComponent key="demo-component" />, {
      sortOrder: -1,
    });
  }
}
