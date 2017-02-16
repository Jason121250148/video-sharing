import React, { Component, PropTypes } from 'react';
import { browserHistory, IndexRoute, Route, Router } from 'react-router';
import { render } from 'react-dom';

export default class ProjectApp extends Component {
    render() {
        var ivaInstance = new Iva(
            'project-app',//父容器id或者父容器DOM对象，给父容器设置宽高640px*480px以上可以获得最佳的浏览体验；
            {
                 appkey: '410idWDt',//必填，请在控制台查看应用标识
                 video: 'http://v.youku.com/v_show/id_XMjUxMTMxNjI3Mg==.html?from=y1.3-idx-beta-1519-23042.223465.1-1',
                 videoStartPrefixSeconds: 0,//选填，跳过片头，默认为0
                 videoEndPrefixSeconds: 0,//选填，跳过片尾，默认为0
             },
        );
        global.vjj = ivaInstance;
        return (
            <div>
            </div>
        );
    }
}

$(() => {
  render(
      <Router history={browserHistory}>
          <Route path="/project/app" component={ProjectApp}>
          </Route>
      </Router>, document.getElementById('project-app'));
});
