import style from './SideBar.module.scss'
import { Link, useLocation } from 'react-router-dom'
import {
	VscFiles,
	VscGithubAlt,
	VscJson,
	VscEdit,
	VscMail,
	VscSettingsGear,
	VscAccount,
} from 'react-icons/vsc'
const SideBar = () => {
	const location = useLocation()
	const isLinkActive = path => location.pathname === path
	return (
		<>
			<div className={style.sidebar}>
				<div className={style.sidebar__icons}>
					<div
						className={
							isLinkActive('/')
								? ` ${style.sidebar__icons_item} ${style.active}`
								: style.sidebar__icons_item
						}
					>
						<Link to='/home'>
							<VscFiles size={25} />
						</Link>
					</div>
					<div
						className={
							isLinkActive('/github')
								? ` ${style.sidebar__icons_item} ${style.active}`
								: style.sidebar__icons_item
						}
					>
						<Link to='/github'>
							<VscGithubAlt size={25} />
						</Link>
					</div>
					<div
						className={
							isLinkActive('/projects')
								? ` ${style.sidebar__icons_item} ${style.active}`
								: style.sidebar__icons_item
						}
					>
						<Link to='/projects'>
							<VscJson size={25} />
						</Link>
					</div>
					<div
						className={
							isLinkActive('/skills')
								? ` ${style.sidebar__icons_item} ${style.active}`
								: style.sidebar__icons_item
						}
					>
						<Link to='/skills'>
							<VscEdit size={25} />
						</Link>
					</div>
					<div
						className={
							isLinkActive('/contacts')
								? ` ${style.sidebar__icons_item} ${style.active}`
								: style.sidebar__icons_item
						}
					>
						<Link to='/contacts'>
							<VscMail size={25} />
						</Link>
					</div>
				</div>
				<div className={style.sidebar__icons}>
					<div className={style.sidebar__icons_item}>
						<Link>
							<VscAccount size={25} />
						</Link>
					</div>
					<div className={style.sidebar__icons_item}>
						<Link>
							<VscSettingsGear size={25} />
						</Link>
					</div>
				</div>
			</div>
		</>
	)
}
export default SideBar
