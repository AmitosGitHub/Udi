import React from 'react'

// const { Switch, Route } = ReactRouterDOM
import { Routes, Route } from 'react-router'

import routes from './routes'

import { AppHeader } from './cmps/app-header'
import { AppFooter } from './cmps/app-footer'

export class RootCmp extends React.Component {
  render() {
    return (
      <div className="app main-container ">
        <AppHeader />
        <main>
          <Routes>
            {routes.map((route) => (
              <Route
                key={route.path}
                exact={true}
                element={route.component}
                path={route.path}
              />
            ))}
          </Routes>
        </main>
        <AppFooter />
      </div>
    )
  }
}
