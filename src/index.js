import React from 'react';
import ReactDom from 'react-dom';

import getRouter from 'router/router';
import { AppContainer } from 'react-hot-loader';
/*初始化*/
renderWidthHotReload(getRouter());

/*热更新*/
if(module.hot) {
  module.hot.accept('./router/router', () => {
    const getRouter = require('./router/router').default;
    renderWidthHotReload(getRouter());
  })
}

function renderWidthHotReload(RootElement) {
  ReactDom.render(
    <AppContainer>
      {RootElement}
    </AppContainer>,
    document.getElementById('app')
  )
}

// if(module.hot) {
//   module.hot.accept();
// }

// ReactDom.render(
//   getRouter(), document.getElementById('app'));