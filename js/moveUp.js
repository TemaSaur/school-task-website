$(document).ready(() => {
	$("body").append('<div id="moveUp-blok"><a href="#top" id="moveUp-linc">^</a></div>')

	const up = $("#moveUp-blok")
	const link = $("#moveUp-linc")

	up.css({
		"height": "50px",
		"width": "50px",
		"border-radius": "50%",
		"position": "fixed",
		"bottom": "100px",
		"right": "100px",
		"background": "#000000",
		"opacity": "0.6",
	})

	link.css({
		"height": "100%",
		"width": "100%",
		"display": "flex",
		"justify-content": "center",
		"align-items": "center",
		"color": "#ffffff",
		"font-size": "45px",
		"text-decoration": "none",
		"font-family": "\"Segoe UI\", Consolas"
	})
})