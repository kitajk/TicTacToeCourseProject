import { useState } from 'react'

export default function Player({ name, symbol }) {
	const [isEditing, setIsEditing] = useState(false)
	const [inputValue, setInputValue] = useState(name)

	function handleEdit() {
		if (isEditing) {
			if (inputValue.trim() !== '') {
				setInputValue(inputValue)
				setIsEditing(false)
			}
		} else {
			setIsEditing(true)
		}
	}

	return (
		<li>
			<span className='player'>
				{isEditing ? (
					<input id='name' type='text' required value={inputValue} onChange={e => setInputValue(e.target.value)} />
				) : (
					<span className='player-name'>{inputValue}</span>
				)}
				<span className='player-symbol'>{symbol}</span>
			</span>
			<button onClick={handleEdit}>{isEditing ? 'OK' : 'Edit'}</button>
		</li>
	)
}
