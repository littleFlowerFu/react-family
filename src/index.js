import React from 'react';
import ReactDom from 'react-dom';

import getRouter from 'router/router';
import { AppContainer } from 'react-hot-loader';
import {Provider} from 'react-redux';
import store from './redux/store';

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
      <Provider store={store}>
        {RootElement}
      </Provider>
    </AppContainer>,
    document.getElementById('app')
  )
}

// if(module.hot) {
//   module.hot.accept();
// }

// ReactDom.render(
//   getRouter(), document.getElementById('app'));