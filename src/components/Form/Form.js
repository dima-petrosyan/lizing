import FormItem from './FormItem/FormItem.js'
import './Form.css'
import { useState } from 'react'

function Form(props) {

	const [price, setPrice] = useState(1000000)
	const [percent, setPercent] = useState(10)
	const [period, setPeriod] = useState(1)

	const firstPay = Math.round(percent / 100 * price)
	const monthPay = firstPay + (period * Math.round((price - firstPay) * ((0.035 * Math.pow((1 + 0.035), period)) / 
			(Math.pow((1 + 0.035), period) - 1))))

	const handleSubmit = (event) => {
		Array.from(event.target.elements).forEach((item) => {
			item.classList.add('disabled')
			item.setAttribute('disabled', true)
		})
		const formData = new FormData(event.target)
		props.sendData(formData)
	}

	return (
		<form onSubmit={handleSubmit}>
			<div className='row'>
				<FormItem
					maxlength='7'
					name='price' 
					title='Стоимость автомобиля'
					details='₽'
					sliderSettings={{
						min: 1000000,
						max: 6000000,
						step: 1,
					}}
					value={price}
					onFormItemChange={(value) => setPrice(value)}
				/>
				<FormItem 
					maxlength='6'
					name='percent'
					title='Первоначальный взнос' 
					details={`${percent}%`} 
					sliderSettings={{
						min: 10,
						max: 60,
						step: 1,
					}}
					value={percent}
					inputValue={firstPay}
					onFormItemChange={(value) => setPercent(value)}
				/>
				<FormItem 
					maxlength='2'
					name='period'
					title='Срок лизинга' 
					details='мес.' 
					sliderSettings={{
						min: 1,
						max: 60,
						step: 1,
					}}
					value={period}
					onFormItemChange={(value) => setPeriod(value)}
				/>
			</div>
			<div className='row'>
				<div className='resultItem'>
					<h2>Сумма договора лизинга</h2>
					<h1>{firstPay + period * monthPay} ₽</h1>
				</div>
				<div className='resultItem'>
					<h2>Ежемесячный платеж от</h2>
					<h1>{monthPay} ₽</h1>
				</div>
				<input type='submit' value='Оставить заявку' className='button' />
			</div>
		</form>
	)
}

export default Form 
























