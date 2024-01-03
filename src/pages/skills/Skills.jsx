import LinearProgress from '@mui/material/LinearProgress'
import style from './Skills.module.scss'
import react from '../../assets/atom.png'
import js from '../../assets/java-script.png'
import sass from '../../assets/sass.png'
import node from '../../assets/nodejs.png'
const Skills = () => {

	const progress = {
		react: 40,
		node: 25,
		js: 60,
		sass: 75,
	}

	return (
		<div className={style.skills}>
			<div className={`${style.skills__skill} ${style.skill_react}`}>
				<div className={style.skills__skill_image}>
					<img src={react} alt='react' />
				</div>
				<div className={style.skills__skill_progress}>
					<LinearProgress variant='determinate' value={progress.react} />
					{progress.react}%
				</div>

				<div className={style.skills__skill_title}>
					<p>React</p>
				</div>
			</div>
			<div className={`${style.skills__skill} ${style.skill_js}`}>
			<div className={style.skills__skill_image}>
					<img src={js} alt='js' />
				</div>
				<div className={style.skills__skill_progress}>
					<LinearProgress variant='determinate' value={progress.js} />{' '}
					{progress.js}%
				</div>

				<div className={style.skills__skill_title}>
					<p>JavaScript</p>
				</div>
			</div>
			<div className={`${style.skills__skill} ${style.skill_sass}`}>
			<div className={style.skills__skill_image}>
					<img src={sass} alt='sass' />
				</div>
				<div className={style.skills__skill_progress}>
					<LinearProgress variant='determinate' value={progress.sass} />{' '}
					{progress.sass}%
				</div>

				<div className={style.skills__skill_title}>
					<p>Sass</p>
				</div>
			</div>
			<div className={`${style.skills__skill} ${style.skill_node}`}>
				<div className={style.skills__skill_image}>
					<img src={node} alt='node' />
				</div>
				<div className={style.skills__skill_progress}>
					<LinearProgress variant='determinate' value={progress.node} />{' '}
					{progress.node}%
				</div>

				<div className={style.skills__skill_title}>
					<p>Node.js</p>
				</div>
			</div>
		</div>
	)
}
export default Skills
