//your code here

const evaText = document.getElementById('evaluatedText');
const count = document.getElementById('letterCount');

evaText.addEventListener('input', () => {
	const text = evaText.value;
	count.textContent = text.length;
})