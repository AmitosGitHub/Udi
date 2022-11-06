import React from 'react'

// const { Switch, Route } = ReactRouterDOM
import { Routes, Route } from 'react-router'

import routes from './routes.js'

import { AppHeader } from './cmps/app-header'
import { AppFooter } from './cmps/app-footer'

export class RootCmp extends React.Component {
  render() {
    return (
      <section className=" main-container">
        <div className="app ">
          <header>
            <AppHeader />
          </header>
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
          <footer>
            <AppFooter />
          </footer>
        </div>
      </section>
    )
  }
}
