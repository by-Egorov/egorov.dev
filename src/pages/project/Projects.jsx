import style from './Projects.module.scss'
import timerPreview from '../../assets/timer-icon.png'
import myCarPreview from '../../assets/mycar-icon.png'
import shopPreview from '../../assets/shop-icon.png'
import walletPreview from '../../assets/wallet-icon.png'
import todoPreview from '../../assets/todo-icon.png'
import Card from '../../components/Card/Card'
const Projects = () => {
	return (
		<div className={style.project}>
			<h3>Stuff I`ve Built So Far</h3>
			<div className={style.project__cards}>
				<Card
					customStyle={style.timer_prev_bg}
					preview={timerPreview}
					title='Таймер'
					description='Простой таймер. В рамках обучения работа с датой и временем.'
					linkGithub='https://github.com/by-Egorov/timer-react'
					linkVisit='https://timer-react-mocha.vercel.app/'
					technologiesContent={
						<>
							<span
								className={`${style.card__technologies_item} ${style.item_react}`}
							>
								React
							</span>
							<span
								className={`${style.card__technologies_item} ${style.item_scss}`}
							>
								scss
							</span>
						</>
					}
				/>
				<Card
					customStyle={style.mycar_prev_bg}
					preview={myCarPreview}
					title='myCar'
					description='Приложение для смартфона. Запись и учет расходов. В рамках
					обучения, использовал Redux для управления состоянием приложения.
					Для записи данных использовал MongoDB и сервер написанный на
					Node.js'
					linkGithub='https://github.com/by-Egorov/myApp/tree/master/myApp'
					linkVisit='https://my-car-rho.vercel.app/'
					technologiesContent={
						<>
							<span
								className={`${style.card__technologies_item} ${style.item_react}`}
							>
								React
							</span>
							<span
								className={`${style.card__technologies_item} ${style.item_scss}`}
							>
								scss
							</span>
							<span
								className={`${style.card__technologies_item} ${style.item_node}`}
							>
								Node.js
							</span>
							<span
								className={`${style.card__technologies_item} ${style.item_mongodb}`}
							>
								mongodb
							</span>
							<span
								className={`${style.card__technologies_item} ${style.item_redux}`}
							>
								redux
							</span>
							<span
								className={`${style.card__technologies_item} ${style.item_axios}`}
							>
								axios
							</span>
						</>
					}
				/>
				<Card
					customStyle={style.shop_prev_bg}
					preview={shopPreview}
					title='Онлайн магазин'
					description='Приложение для смартфона. Задача реализовать корзину товаров, добавление и удаление, изменение цены. В рамках
					обучения, для записи данных использовал MongoDB и сервер написанный на
					Node.js'
					linkGithub='https://github.com/by-Egorov/mern-app-client'
					linkVisit='https://egorov-mern-app.vercel.app/'
					technologiesContent={
						<>
							<span
								className={`${style.card__technologies_item} ${style.item_react}`}
							>
								React
							</span>
							<span
								className={`${style.card__technologies_item} ${style.item_scss}`}
							>
								scss
							</span>
							<span
								className={`${style.card__technologies_item} ${style.item_node}`}
							>
								Node.js
							</span>
							<span
								className={`${style.card__technologies_item} ${style.item_mongodb}`}
							>
								mongodb
							</span>
							<span
								className={`${style.card__technologies_item} ${style.item_axios}`}
							>
								axios
							</span>
						</>
					}
				/>
				<Card
					customStyle={style.wallet_prev_bg}
					preview={walletPreview}
					title='Wallet'
					description='Приложение для смартфона. Запись и учет расходов и доходов.'
					linkGithub='https://github.com/by-Egorov/-wallet'
					linkVisit='https://egorov-wallet.vercel.app/'
					technologiesContent={
						<>
							<span
								className={`${style.card__technologies_item} ${style.item_react}`}
							>
								React
							</span>
							<span
								className={`${style.card__technologies_item} ${style.item_scss}`}
							>
								scss
							</span>
						</>
					}
				/>
				<Card
					customStyle={style.todo_prev_bg}
					preview={todoPreview}
					title='Список задач'
					description='Приложение для смартфона. Список задач, удаление и изменение задачи.'
					linkGithub='https://github.com/by-Egorov/-list-task?tab=readme-ov-file'
					linkVisit='https://list-task-three.vercel.app/'
					technologiesContent={
						<>
							<span
								className={`${style.card__technologies_item} ${style.item_react}`}
							>
								React
							</span>
							<span
								className={`${style.card__technologies_item} ${style.item_css}`}
							>
								css
							</span>
						</>
					}
				/>
	
			</div>
		</div>
	)
}
export default Projects
