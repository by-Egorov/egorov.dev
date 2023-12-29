import {Link} from 'react-router-dom'
import style from './Projects.module.scss'
import timerPreview from '../../assets/timer-icon.png'
import myCarPreview from '../../assets/mycar-icon.png'
const Projects = () => {
return (
<div className={style.project}>
<h3>Stuff I've Built So Far</h3>
<div className={style.project__cards}>
	<div className={`${style.card} ${style.card__timer}`}>
		<div className={style.card__preview}>
			<img src={timerPreview} alt="timer" />
		</div>
		<div className={style.card__content}>
		<div className={style.card__content_title}>Timer</div>
		<div className={style.card__content_description}>Простой таймер. В рамках обучения работа с датой и временем.</div>
		<div className={style.card__content_technologies}>
			<span className={`${style.card__content_technologies_item} ${style.item_react}`}>React</span>
			<span className={`${style.card__content_technologies_item} ${style.item_scss}`}>scss</span>
		</div>
		<div className={style.card__content_links}>
			<div className={style.card__content_links_github}><Link to='https://github.com/by-Egorov/timer-react' target='_blank'>Source Code</Link></div>
			<div className={style.card__content_links_visit}><Link to='https://timer-react-mocha.vercel.app/' target='_blank'>Visit site</Link></div>
		</div>
		</div>
	</div>

	<div className={`${style.card} ${style.card__mycar}`}>
		<div className={style.card__preview}>
			<img src={myCarPreview} alt="mycar" />
		</div>
		<div className={style.card__content}>
		<div className={style.card__content_title}>myCar</div>
		<div className={style.card__content_description}>Приложение для смартфона. Запись и учет расходов. В рамках обучения, использовал Redux для управления состоянием приложения. Для записи данных использовал MongoDB и сервер написанный на Node.js</div>
		<div className={style.card__content_technologies}>
			<span className={`${style.card__content_technologies_item} ${style.item_react}`}>React</span>
			<span className={`${style.card__content_technologies_item} ${style.item_scss}`}>scss</span>
			<span className={`${style.card__content_technologies_item} ${style.item_node}`}>Node.js</span>
			<span className={`${style.card__content_technologies_item} ${style.item_mongodb}`}>mongodb</span>
			<span className={`${style.card__content_technologies_item} ${style.item_redux}`}>redux</span>
			<span className={`${style.card__content_technologies_item} ${style.item_axios}`}>axios</span>
		</div>
		<div className={style.card__content_links}>
			<div className={style.card__content_links_github}><Link to='https://github.com/by-Egorov/myApp/tree/master/myApp' target='_blank'>Source Code</Link></div>
			<div className={style.card__content_links_visit}><Link to='https://my-car-rho.vercel.app/' target='_blank'>Visit site</Link></div>
		</div>
		</div>

	</div>
	
</div>
</div>
)
}
export default Projects