import React, { FC } from 'react';

import s from './index.module.scss';

const Grid: FC = ({ children }) => <div className={s.grid}>{children}</div>;

export default Grid;
