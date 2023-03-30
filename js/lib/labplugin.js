import {HelloModel, HelloView, version} from './index';
import {VaporVisualizerModel, VaporVisualizerView} from './index';
import {IJupyterWidgetRegistry} from '@jupyter-widgets/base';

export const helloWidgetPlugin = {
  id: 'jupyter-vapor-widget:plugin',
  requires: [IJupyterWidgetRegistry],
  activate: function(app, widgets) {
      widgets.registerWidget({
          name: 'jupyter-vapor-widget',
          version: version,
          exports: { HelloModel, VaporVisualizerModel, VaporVisualizerView, HelloView }
      });
  },
  autoStart: true
};

export default helloWidgetPlugin;
