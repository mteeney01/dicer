import * as React from 'react';
import { Route } from 'react-router-dom';
import { Layout } from './components/Layout';
import { Home } from './components/Home';
import { Roller } from './components/Roller';

export const routes = <Layout>
    <Route exact path='/' component={ Home } />
    <Route path='/roller' component={ Roller } />
</Layout>;
