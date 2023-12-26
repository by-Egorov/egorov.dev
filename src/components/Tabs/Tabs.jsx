import {useState} from 'react'
import { Link, useLocation } from 'react-router-dom'
import style from './Tabs.module.scss'
import classNames from 'classnames'
import html from '../../assets/html.svg'
import scss from '../../assets/scss.svg'
import js from '../../assets/js.svg'
import json from '../../assets/json.svg'
import jsx from '../../assets/react-icon.svg'
import md from '../../assets/md.svg'
const Tabs = ({ customStyleTabs, customStyleItem }) => {
	const tabsClasses = classNames(style.tabs, customStyleTabs)
	const tabsItemClasses = classNames(style.tabs__item, customStyleItem)
	const activeClasses = classNames(
		`${style.tabs__item_active} ${style.tabs__item}`,
		customStyleItem
	)
	const location = useLocation()

	const [active, setActive] = useState('home')
	const isLinkActive = path => location.pathname === path
	const handleLinkClick = path => {
		setActive(path)
	}

	return (
		<div className={tabsClasses}>
			<Link
				to='/home'
				className={isLinkActive('/home') ? activeClasses : tabsItemClasses}
				onClick={() => handleLinkClick('/home')}
			>
				<img src={jsx} alt='' />
				home.jsx
			</Link>
			<Link
				to='/about'
				className={isLinkActive('/about') ? activeClasses : tabsItemClasses}
				onClick={() => handleLinkClick('/about')}
			>
				<img src={html} alt='' />
				about.html
			</Link>
			<Link
				to='/skills'
				className={isLinkActive('/skills') ? activeClasses : tabsItemClasses}
				onClick={() => handleLinkClick('/skills')}
			>
				<img src={json} alt='' />
				skills.json
			</Link>
			<Link
				to='/projects'
				className={isLinkActive('/projects') ? activeClasses : tabsItemClasses}
				onClick={() => handleLinkClick('/projects')}
			>
				<img src={js} alt='' />
				projects.js
			</Link>
			<Link
				to='/contacts'
				className={isLinkActive('/contacts') ? activeClasses : tabsItemClasses}
				onClick={() => handleLinkClick('/contacts')}
			>
				<img src={scss} alt='' />
				contacts.scss
			</Link>
			<Link
				to='/github'
				className={isLinkActive('/github') ? activeClasses : tabsItemClasses}
				onClick={() => handleLinkClick('/github')}
			>
				<img src={md} alt='' />
				github.md
			</Link>
		</div>
	)
}
export default Tabs
