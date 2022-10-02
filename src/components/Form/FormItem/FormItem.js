import { useState } from 'react'
import style from './FormItem.module.css'
import Slider from './Slider/Slider.js'

function FormItem(props) {

	const handleInputChange = (event) => {
		props.onFormItemChange(event.target.value)
	}

	const handleInputBlur = (event) => {
		let value = event.target.value
		const { min, max } = props.sliderSettings
		if (value < min) {
			value = min
		} 
		if (value > max) {
			value = max
		}
		props.onFormItemChange(value)
	}

	return (
		<div className={style.formItem}>
			<label>
				<h2 className={style.title}>{props.title}</h2>
				<br/>
				<div className={style.inputWrapper}>
					<input name={props.name} 
						value={props.inputValue ?? props.value} 
						onBlur={handleInputBlur} 
						onChange={handleInputChange} 
						className={style.input} 
						type="text"
						maxlength={props.maxlength} 
					/>
					<div className={style.details}>
						{props.details}
					</div>
					<Slider 
						value={props.value} 
						onValueChange={props.onFormItemChange} 
						{...props.sliderSettings}
					/>
				</div>
			</label>
		</div>
	)
}

export default FormItem




