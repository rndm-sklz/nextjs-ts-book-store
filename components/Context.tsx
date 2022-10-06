import React from 'react';
import { IContext } from 'pages/types';

const Context = React.createContext<IContext>({} as IContext);

export default Context;
