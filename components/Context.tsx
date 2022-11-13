import React from 'react';
import { IContext } from 'types/types';

const Context = React.createContext<IContext>({} as IContext);

export default Context;
