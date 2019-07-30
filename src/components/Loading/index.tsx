import React from 'react';
import ReactLoading from 'react-loading';

import s from './index.module.scss';

const Loading = () => (
  <ReactLoading className={s.loading} type="spin" color="#0091d9" />
);

export default Loading;
