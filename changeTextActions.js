
export const editText = text => {
	return {
		type: 'EDIT',
		in_text: text,
	}
}

export const pressBtn = () => {
	return {
		type: 'PRESS_BTN',
	}
}