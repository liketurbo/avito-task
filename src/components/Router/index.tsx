import { createBrowserHistory } from 'history';
import React, { FC, useContext, useEffect, useState } from 'react';
import { Route, Router as ReactRouterDOM } from 'react-router-dom';

import RouterContext from './context';

const Router: FC = ({ children }) => {
  const history = createBrowserHistory({ basename: process.env.PUBLIC_URL });

  return (
    <RouterContext.Provider value={history}>
      <ReactRouterDOM history={history}>{children}</ReactRouterDOM>
    </RouterContext.Provider>
  );
};

const useRouter = () => {
  const history = useContext(RouterContext);
  const [location, setLocation] = useState(history.location);

  useEffect(() => {
    const unListen = history.listen(newLocation => {
      setLocation(newLocation);
    });

    return () => unListen();
  }, [history]);

  return {
    ...history,
    location
  };
};

export { Route, useRouter, Router };
