import Projects from '../Projects/Projects'
import About from './About/About'
import Banner from './Banner/Banner'
import ContractMe from './ContractMe/ContractMe'
import Services from './Services/Services'
import Skills from './Skills/Skills'
import Intro from './Intro/Intro'
import useTitle from '../../components/hook/useTitle'
export default function Home() {
  useTitle('Portfolio')
  return (
    <div>
      <Intro/>
      <Banner />
      <About />
      <Services />
      <Skills />
      <Projects />
      <ContractMe />
    </div>
  )
}
