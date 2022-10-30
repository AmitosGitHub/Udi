import { HomePage } from './pages/home-page.jsx'
import { AboutUs } from './pages/about-us.jsx'
import { Signup } from './pages/Signup.jsx'
import { Login } from './pages/Login.jsx'

// Routes accesible from the main navigation (in AppHeader)
const routes = [
  {
    path: 'home',
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
    path: 'about',
    component: <AboutUs />,
    label: 'About us',
  },
]

export default routes
