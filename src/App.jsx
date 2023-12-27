import { BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Explorer from './components/Explorer/Explorer'
import Footer from './components/Footer/Footer'
import Header from './components/Header/Header'
import SideBar from './components/SideBar/SideBar'
import Tabs from './components/Tabs/Tabs'
import Home from './pages/home/Home.jsx'
import About from './pages/about/About.jsx'
import Projects from './pages/project/Projects.jsx'
import Skills from './pages/skills/Skills.jsx'
import Contacts from './pages/contacts/Contacts.jsx'
import Github from './pages/github/Github.jsx'
function App() {
	
	return (
		<Router>
			<div className='main'>
				<Header />
				<div className='main__body'>
					<div className='sideBar'>
						<SideBar />
					</div>
					<div className='explorer'>
						<Explorer />
					</div>
					<div className='content'>
						<Tabs />
						<div className='content__body'>
							<Routes>
								<Route path='/' element={<Home />} />
								<Route path='/about' element={<About />} />
								<Route path='/projects' element={<Projects />} />
								<Route path='/skills' element={<Skills />} />
								<Route path='/contacts' element={<Contacts />} />
								<Route path='/github' element={<Github />} />
							</Routes>
						</div>
					</div>
				</div>
			</div>
			<footer className='footer'>
				<Footer />
			</footer>
		</Router>
	)
}

export default App
