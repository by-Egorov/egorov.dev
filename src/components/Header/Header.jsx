import icon from '../../assets/favicon.svg'
import style from './Header.module.scss'
const Header = () => {
	return (
		<>
			<div className={style.wrapper}>
				<div className={style.header}>
					<div className={style.header__icon}>
						<img src={icon} alt='header icon' width={18} height={18} />
					</div>
					<div className={style.header__left_fake_menu}>
						<div className={style.fake_menu_item}>File</div>
						<div className={style.fake_menu_item}>Edit</div>
						<div className={style.fake_menu_item}>View</div>
						<div className={style.fake_menu_item}>Go</div>
						<div className={style.fake_menu_item}>Run</div>
						<div className={style.fake_menu_item}>Terminal</div>
						<div className={style.fake_menu_item}>Help</div>
					</div>
					<p className={style.header__title}>Egorov.dev</p>
					<div className={style.header__right_fake_menu}>
						<div
							className={`${style.header__right_fake_menu_circle} ${style.green}`}
						></div>
						<div
							className={`${style.header__right_fake_menu_circle} ${style.orange}`}
						></div>
						<div
							className={`${style.header__right_fake_menu_circle} ${style.red}`}
						></div>
					</div>
				</div>
			</div>
		</>
	)
}
export default Header
