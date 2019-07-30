import React, { FC } from 'react';

import s from './index.module.scss';

const Header: FC = ({ children }) => (
  <header className={s.header}>{children}</header>
);

export default Header;
