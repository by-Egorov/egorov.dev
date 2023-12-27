import Form from '../../components/Form/Form'
import Social from '../../components/Social/Social'
import style from './Contact.module.scss'
const Contacts = () => {	
	return (
		<div className={style.contacts}>
			<div className={style.contacts__wrapper}>
				<h3> Reach Out Via Socials </h3>
				<Social/>
			</div>
			<div className={style.contacts__wrapper}>
				<h3>Or Fill Out This Form</h3>
				<Form/>
			</div>
		</div>
	)
}
export default Contacts
