import React, { Component, PropTypes } from 'react';
import { browserHistory, IndexRoute, Route, Router } from 'react-router';
import { render } from 'react-dom';

export default class ProjectApp extends Component {
    render() {
        var ivaInstance = new Iva(
             'project-app',//父容器id或者父容器DOM对象，给父容器设置宽高640px*480px以上可以获得最佳的浏览体验；
             {
               appkey: '410idWDt',//必填，请在控制台查看应用标识
               live: false,//选填，是否是直播流，默认为false
               video: 'http://v.youku.com/v_show/id_XMjUxMTMxNjI3Mg==.html?from=y1.3-idx-beta-1519-23042.223465.1-1',//必填，播放地址（http://www.tudou.com/programs/view/tM_vZCQy2uM/）或者资源地址（http://7xi4ig.com2.z0.glb.qiniucdn.com/shapuolang_ts.mp4）
               title: '小视频',//选填，视频标题
               cover: '视频封面url',//选填，视频封面url
               videoStartPrefixSeconds: 0,//选填，跳过片头，默认为0
               videoEndPrefixSeconds: 0,//选填，跳过片尾，默认为0
               /* 以下参数可以在“控制台->项目看板->应用管理->播放器设置”进行全局设置，前端设置可以覆盖全局设置 */
               skinSelect: 1,//选填，播放器皮肤，可选0、1、2，默认为0，
               autoplay: false,//选填，是否自动播放，默认为false
               rightHand: true,//选填，是否开启右键菜单，默认为false
               autoFormat: false,//选填，是否自动选择最高清晰度，默认为false
               bubble: true,//选填，是否开启云泡功能，默认为true
               jumpStep: 10,//选填，左右方向键快退快进的时间
               tagTrack: false,//选填，云链是否跟踪，默认为false
               tagShow: false,//选填，云链是否显示，默认为false
               tagDuration: 5,//选填，云链显示时间，默认为5秒
               tagFontSize: 16//选填，云链文字大小，默认为16像素
           },
            );
            global.vjj = ivaInstance;
            console.log(ivaInstance);
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
