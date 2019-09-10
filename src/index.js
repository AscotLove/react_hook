import React, { Suspense } from  'react';
import { render } from 'react-dom';

import { Spin } from 'antd';
// import { Provider } from 'react-redux';
// 导入组件
import store from './redux/store';
import App from './App';



render(<Suspense fallback={<Spin size="large"/>}>

    <App />

</Suspense>, document.getElementById('root'));
