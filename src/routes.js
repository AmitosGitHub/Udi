import { HomePage } from './pages/home-page.jsx'
import { AboutUs } from './pages/about-us.jsx'

// Routes accesible from the main navigation (in AppHeader)
const routes = [
  {
    path: 'home',
    component: <HomePage />,
    label: 'Home 🏠',
  },
  // {
  //   path: '',
  //   component: <StayApp />,
  //   label: 'Stays',
  // },

  {
    path: 'about',
    component: <AboutUs />,
    label: 'About us',
  },
]

export default routes
