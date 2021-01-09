const btn = document.querySelector("#contents-btn")
const div = document.querySelector("#contents-inner")
btn.onclick = () => {
	div.classList.toggle("hidden")
}
