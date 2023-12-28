import Form from '../../components/Form/Form'
import Social from '../../components/Social/Social'
import style from './Contact.module.scss'
const Contacts = () => {	
	return (
		<div className={style.contacts}>
			<div className={style.contacts__wrapper}>
				<Social/>
			</div>
			<div className={style.border}></div>
			<div className={style.contacts__wrapper}>
				<Form/>
			</div>
		</div>
	)
}
export default Contacts
