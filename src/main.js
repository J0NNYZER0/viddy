import Button from './components/elements/Button'
import DangerousHtml from './components/elements/DangerousHtml'
import MainTitle from './components/elements/MainTitle'
import MenuIcon from './components/elements/MenuIcon'
import Contact from './components/forms/Contact'
import Login from './components/forms/Login'
import Reconfirm from './components/forms/Reconfirm'
import Register from './components/forms/Register'
import Hero from './components/heros/Index'
import WithModal from './components/heros/WithModal'
import Footer from './components/layout/footer/Index'
import Header from './components/layout/header/Index'
import Modal from './components/modals/Index'
import Notification from './components/notifications/Index'
import Slideshow from './components/slideshows/Index'
import WithProgressBar from './components/slideshows/WithProgressBar'

export default {
  Elements: {
    Button,
    DangerousHtml,
    MainTitle,
    MenuIcon
  },
  Forms: {
    Contact,
    Login,
    Reconfirm,
    Register
  },
  Hero,
  Heros: {
    WithModal
  },
  Layout: {
    Header,
    Footer
  },
  Modal,
  Notification,
  Slideshow,
  Slideshows: {
    WithProgressBar
  }
}
