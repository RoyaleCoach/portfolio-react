import Navbar from './Navbar'
import Footer from './Footer'
import ScrollProgress from './ScrollProgress'
import ScrollToTop from './ScrollToTop'
import FloatingTerminal from '../ui/FloatingTerminal'

export default function Layout({ children }) {
  return (
    <>
      <ScrollProgress />
      <Navbar />
      <main>{children}</main>
      <Footer />
      <ScrollToTop />
      <FloatingTerminal />
    </>
  )
}