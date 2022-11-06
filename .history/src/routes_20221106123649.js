import { HomePage } from './pages/home-page.jsx'
import { AboutUs } from './pages/about-us.jsx'
import { Signup } from './pages/Signup.jsx'
import { Login } from './pages/Login.jsx'
import { AddProduct } from './pages/add-product.jsx'
import { InfluentsStore } from './pages/influents-store.jsx'
import { Details } from './pages/details.jsx'
import { Dashboard } from './pages/dashboard.jsx'

// Routes accesible from the main navigation (in AppHeader)
const routes = [
  {
    path: '',
    component: <HomePage />,
    label: 'Home 🏠',
  },
  {
    path: 'login',
    component: <Login />,
    label: 'Login ',
  },
  {
    path: 'signup',
    component: <Signup />,
    label: 'Signup',
  },
  {
    path: 'add-product',
    component: <AddProduct />,
    label: 'add-product',
  },
  {
    path: 'influents-store',
    component: <InfluentsStore />,
    label: 'influents-store',
  },
  {
    path: 'details/:id',
    component: <Details />,
    label: 'details',
  },

  {
    path: 'about',
    component: <AboutUs />,
    label: 'About us',
  },
  {
    path: 'dashboard',
    component: <Dashboard />,
    label: 'dashboard',
  },
]

export default routes
