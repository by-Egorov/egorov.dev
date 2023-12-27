import { useState } from 'react'
import { VscPassFilled } from 'react-icons/vsc'
import { useForm } from 'react-hook-form'
import style from './Form.module.scss'
const Form = () => {
	const {
		register,
		handleSubmit,
		formState: { errors },
		reset,
	} = useForm()

	const [isSendMessage, setIsSendMessage] = useState(false)

	const sendMsg = () => {
		setIsSendMessage(true)
		setTimeout(() => {
			setIsSendMessage(false)
		}, 2000)
	}
	const submitFormToGoogleForms = async data => {
		const date = new Date()

		const options = {
			year: 'numeric',
			month: 'long',
			day: 'numeric',
			weekday: 'long',
			hour: 'numeric',
			minute: 'numeric',
			second: 'numeric',
		}
		try {
			const currentDate = date.toLocaleString('ru', options)
			const messageWithTime = {
				...data,
				time: currentDate,
				message: data.message.replace(/\n/g, ' '),
			}

			const response = await fetch(
				'https://65126cf9b8c6ce52b3959ac0.mockapi.io/message',
				{
					method: 'POST',
					headers: {
						'Content-Type': 'application/json',
					},
					body: JSON.stringify(messageWithTime),
				}
			)
			if (response.ok) {
				sendMsg()
				reset()
			}
		} catch (error) {
			console.error(error)
		}
	}
return (
<>
<form className={style.form}>
					<div className={style.form__inputs}>
						<div className={style.form__inputs_input}>
							<label>Name</label>
							<input
								{...register('name', {
									required: true,
								})}
								type='text'
							/>
							{errors?.name?.type === 'required' && (
								<p className={style.err}>Это поле не может быть пустым</p>
							)}
						</div>

						<div className={style.form__inputs_input}>
							<label> Email </label>
							<input
								{...register('email', {
									required: true,
									pattern:
										/[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/,
								})}
							/>
							{errors?.email?.type === 'required' && (
								<p className={style.err}>Это поле не может быть пустым</p>
							)}
							{errors?.email?.type === 'pattern' && (
								<p className={style.err}>Введите корректный email</p>
							)}
						</div>
						{isSendMessage && (
							<div className={style.messageOk}>
								<VscPassFilled size={35} />
								сообщение отправлено
							</div>
						)}
					</div>
					<div className={style.form__inputs_input}>
						<label> Message </label>
						<textarea
							{...register('message', {
								required: true,
							})}
							className={style.form__textArea}
						/>
						{errors?.message?.type === 'required' && (
							<p className={style.err}>Это поле не может быть пустым</p>
						)}
					</div>
					<div className={style.form__button}>
						<button onClick={handleSubmit(submitFormToGoogleForms)}>
							Submit
						</button>
					</div>
				</form>
</>
)
}
export default Form