const btn = document.querySelector("#contents-btn")
const div = document.querySelector("#contents-inner")
console.log("s")
btn.onclick = () => {
	div.classList.toggle("hidden")
}
