import {Link} from 'react-router-dom'
import style from './Social.module.scss'
const Social = () => {
return (
<div className={style.social}>
<h3> Reach Out Via Socials </h3>

	<ul className={style.social__list}>
		<li className={style.social__list_item}><span>.social</span> &#123;</li>
		<li className={style.social__list_item}>telegram: <Link to='https://t.me/@EgorovAlexDev' target='_blank' className={style.social__list_item_link}>EgorovAlexDev</Link>;</li>
		<li className={style.social__list_item}>github: <Link to='https://github.com/by-Egorov' target='_blank' className={style.social__list_item_link}>by-Egorov</Link>;</li>
		<li className={style.social__list_item}>vkontakte: <Link to='https://vk.com/egorov.aleks' target='_blank' className={style.social__list_item_link}>Egorov Aleksandr</Link>;</li>
		<li className={style.social__list_item}>email: <Link to='mailto:egorov.dev@gmail.com' target='_blank' className={style.social__list_item_link}>egorov.dev@gmail.com</Link>;</li>
		<li className={style.social__list_item}> &#125;</li>
	</ul>

</div>
)
}
export default Social