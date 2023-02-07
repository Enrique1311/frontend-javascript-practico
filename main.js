const menuEmail = document.querySelector('.navbar-email');
const descktopMenu = document.querySelector('.desktop-menu');

const menuIcon = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');

const shoppingCartIcon = document.querySelector('.navbar-shopping-cart');
const shoppingCartContainer = document.querySelector('#shoppingCartContainer');

const cardsContainer = document.querySelector('.cards-container');

menuEmail.addEventListener('click', toggleDescktopMenu);

function toggleDescktopMenu() {
	shoppingCartContainer.classList.contains('inactive')
		? null
		: toggleShoppingCart();
	descktopMenu.classList.toggle('inactive');
}

menuIcon.addEventListener('click', toggleMobileMenu);

function toggleMobileMenu() {
	shoppingCartContainer.classList.contains('inactive')
		? null
		: toggleShoppingCart();
	mobileMenu.classList.toggle('inactive');
}

shoppingCartIcon.addEventListener('click', toggleShoppingCart);

function toggleShoppingCart() {
	mobileMenu.classList.contains('inactive') ? null : toggleMobileMenu();
	descktopMenu.classList.contains('inactive') ? null : toggleDescktopMenu();
	shoppingCartContainer.classList.toggle('inactive');
}

const productList = [];
productList.push({
	name: 'Jeans',
	price: 15000,
	image: 'https://images.pexels.com/photos/1598507/pexels-photo-1598507.jpeg',
});
productList.push({
	name: 'Shorts',
	price: 12000,
	image:
		'https://images.pexels.com/photos/1760078/pexels-photo-1760078.jpeg?auto=compress&cs=tinysrgb&w=400',
});
productList.push({
	name: 'Remera',
	price: 6000,
	image:
		'https://images.pexels.com/photos/8053341/pexels-photo-8053341.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
});
productList.push({
	name: 'Jeans',
	price: 15000,
	image: 'https://images.pexels.com/photos/1598507/pexels-photo-1598507.jpeg',
});
productList.push({
	name: 'Shorts',
	price: 12000,
	image:
		'https://images.pexels.com/photos/1760078/pexels-photo-1760078.jpeg?auto=compress&cs=tinysrgb&w=400',
});
productList.push({
	name: 'Remera',
	price: 6000,
	image:
		'https://images.pexels.com/photos/8053341/pexels-photo-8053341.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
});

for (product of productList) {
	const productCard = document.createElement('div');
	productCard.classList.add('product-card');

	const productImg = document.createElement('img');
	productImg.setAttribute('src', product.image);

	const productInfo = document.createElement('div');
	productInfo.classList.add('product-info');

	const productInfoDiv = document.createElement('div');

	const productPrice = document.createElement('p');
	productPrice.innerText = '$' + product.price;

	const productName = document.createElement('p');
	productName.innerText = product.name;

	const productFigure = document.createElement('figure');

	const productImgCart = document.createElement('img');
	productImgCart.setAttribute('src', './icons/bt_add_to_cart.svg');

	productCard.appendChild(productImg);
	productCard.appendChild(productInfo);
	productInfoDiv.appendChild(productPrice);
	productInfoDiv.appendChild(productName);
	productInfo.appendChild(productInfoDiv, productFigure);
	productInfo.appendChild(productFigure);
	productFigure.appendChild(productImgCart);
	cardsContainer.appendChild(productCard);
}
