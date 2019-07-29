import { History } from 'history';
import { createContext } from 'react';

const RouterContext = createContext<History>(null as any);

export default RouterContext;
