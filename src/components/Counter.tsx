import { useState } from "react"
import "./Counter.scss"
export const Counter = () => {
	// Используем useState для создания состояния счетчика
	const [count, setCount] = useState(0)

	// Функция для увеличения счетчика
	const incrementCount = () => {
		setCount(count + 1)
	}

	// Функция для уменьшения счетчика
	const decrementCount = () => {
		setCount(count - 1)
	}

	return (
		<div>
			<h2>Счетчик</h2>
			<p>Текущее значение: {count}</p>
			<button className="plus" onClick={incrementCount}>
				Увеличить
			</button>
			<button onClick={decrementCount}>Уменьшить</button>
		</div>
	)
}
