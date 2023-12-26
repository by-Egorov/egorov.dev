import style from './Footer.module.scss'
import { VscSourceControl, VscWarning, VscError, VscCheckAll, VscColorMode } from "react-icons/vsc"
import { FaReact } from "react-icons/fa"
const Footer = () => {
	return <>
	<div className={style.footer}>
		<div className={style.footer__info}>
		<span className={style.footer__info_item}><VscSourceControl /> main</span>
		<span className={style.footer__info_item}><VscError /> 0</span>
		<span className={style.footer__info_item}><VscWarning /> 0</span>
		</div>
		<div className={style.footer__info}>
		<span className={style.footer__info_item}><FaReact /> Powered by React JS</span>
		<span className={style.footer__info_item}><VscCheckAll /> Prettier</span>
		<span className={style.footer__info_item}><VscColorMode /></span>
		</div>
	</div>
	</>
}
export default Footer
