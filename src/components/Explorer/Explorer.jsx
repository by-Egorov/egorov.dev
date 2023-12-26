import { VscChevronDown } from 'react-icons/vsc'
import Tabs from '../Tabs/Tabs'
import style from './Explorer.module.scss'
const Eplorer = () => {
	return (
		<>
			<div className={style.explorer}>
				<div className={style.explorer__title}>
					{' '}
					<p>Explorer</p>
				</div>
				<div className={style.explorer__menu}>
					<div className={style.explorer__menu_title}>
						<span>
							<VscChevronDown size={20} />
						</span>
						<p>Portfolio</p>
					</div>

					<Tabs
						customStyleItem={style.explorer__item}
						customStyleTabs={style.explorer__tabs}
					/>
				</div>
			</div>
		</>
	)
}
export default Eplorer
