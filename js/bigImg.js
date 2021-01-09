// jQuery
$(document).ready(() => {
	const imgs = $('.gr')
	$('body').append('<div id="hiden-blak"><img id="bigImg" draggable="false"></div>')
	imgs.css('cursor', 'zoom-in')

	const img = $('#bigImg')
	const block = $('#hiden-blak')

	let overflow;

	block.css({
		'height': '100vh',
		'width': '100vw',
		'position': 'fixed',
		'z-index': '998',
		'top': '100%',
		'left': '0',
		'background': '#00000060',
		'opacity': '0',
		'cursor': 'zoom-out',
		'transition': 'all .4s'
	})
	img.css({
		'max-height': '80%',
		'max-width': '90%',
		'width': 'auto',
		'position': 'absolute',
		'z-index': '999',
		'top': '50%',
		'left': '50%',
		'transform': 'translate(-50%,-50%)',
		'cursor': 'arrow !important'
	})

	imgs.click(e => {
		c = e.currentTarget
		let src = $(c).attr('src')
		img.attr('src', src)
		block.css({
			'top': '0',
			'opacity': '1'
		})
		
		overflow = $("body").css("overflow-y")
		console.log(overflow)
		$('body').css('overflow-y', 'hidden')
	})

	block.click(() => {
		block.css({
			'top': '100%',
			'opacity': '0'
		})
		$('body').css('overflow-y', overflow)
	})
})