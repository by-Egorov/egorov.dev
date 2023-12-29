import {Link} from 'react-router-dom'
import style from './Card.module.scss'
import classNames from 'classnames'
const Card = ({preview, title, description, linkVisit, linkGithub, technologiesContent, customStyle}) => {
	const cardClasses = classNames(style.preview_bg, customStyle)
return (
<div className={style.card}>
		<div className={`${style.card__preview} ${customStyle}`}>
			<img src={preview} alt="timer" />
		</div>
		<div className={style.card__content}>
		<div className={style.card__content_title}>{title}</div>
		<div className={style.card__content_description}>{description}</div>
		<div className={style.card__content_technologies}>
			{technologiesContent}
		</div>
		<div className={style.card__content_links}>
			<div className={style.card__content_links_github}><Link to={linkGithub} target='_blank'>Source Code</Link></div>
			<div className={style.card__content_links_visit}><Link to={linkVisit} target='_blank'>Visit site</Link></div>
		</div>
		</div>
	</div>
)
}
export default Card