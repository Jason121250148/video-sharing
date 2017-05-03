import React, { Component, PropTypes } from 'react';
import { browserHistory, IndexRoute, Route, Router } from 'react-router';
import { render } from 'react-dom';

export default class ProjectApp extends Component {
    render() {
        this._generateVideo();
        this._addKeyboardListenr();
        return (
            <div>
            </div>
        );
    }

    _generateVideo()
    {
        this.iva = new Iva(
            'project-app',//父容器id或者父容器DOM对象，给父容器设置宽高640px*480px以上可以获得最佳的浏览体验；
            {
                 appkey: '410idWDt',//必填，请在控制台查看应用标识
                 video: 'http://v.youku.com/v_show/id_XMjUxMTMxNjI3Mg==.html?from=y1.3-idx-beta-1519-23042.223465.1-1',
                 videoStartPrefixSeconds: 0,//选填，跳过片头，默认为0
                 videoEndPrefixSeconds: 0,//选填，跳过片尾，默认为0
             },
        );
        console.log(this.iva);
        global.iva = this.iva;
    }

    _addKeyboardListenr()
    {
        $('#project-app').on('keypress', function(e) {
            e.preventDefault();
            const keyCode = e.keyCode;
            // 13: pause or start
            if (keyCode === 13)
            {
                if (global.iva.player.isPlaying())
                {
                    global.iva.player.pause();
                }
                else
                {
                    global.iva.player.play();
                }
            }
            // 44: go back
            // 46: go forward
        });
    }
}

$(() => {
  render(
      <Router history={browserHistory}>
          <Route path="/project/app" component={ProjectApp}>
          </Route>
      </Router>, document.getElementById('project-app'));
});
