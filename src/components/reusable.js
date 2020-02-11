export const cartAnimation = () => {
	const body = document.querySelector('body');
	const div = document.createElement('div');
	div.classList.add('add-cart-bubble');
	div.innerHTML = '<i class="las la-cart-plus"></i>';
	body.appendChild(div);
	setTimeout(() => {
		div.remove();
	}, 4000);
};
