const data = [{
        id: 0,
        img: 'images/apple1.jpeg',
        name: 'Apple1',
        price: 180000,
        //save: 25,
        quantity: 'cart-quantity',
        delivery: 'In 3 - 4 days',
        itemInCart: false,
    },

    {
        id: 1,
        img: 'images/apple2.jpeg',
        name: 'Apple2',
        price: 20000,
        //save: 50,
        quantity: 'cart-quantity',
        delivery: 'In 3 - 4 days',
        itemInCart: false,
    },

    {
        id: 2,
        img: 'images/apple3.jpeg',
        name: 'Apple3',
        price: 250000,
        //save: 30,
        quantity: 'cart-quantity',
        delivery: 'In 3 - 4 days',
        itemInCart: false,
    },
    {
        id: 3,
        img: 'images/apple4.jpeg',
        name: 'Apple4',
        price: 260000,
        //save: 35,
        quantity: 'cart-quantity',
        delivery: 'In 3 - 4 days',
        itemInCart: false,
    },
    {
        id: 4,
        img: 'images/redmi1.jpeg',
        name: 'REDMI',
        price: 50000,
        //save: 15,
        quantity: 'cart-quantity',
        delivery: 'In 3 - 4 days',
        itemInCart: false,
    },
    {
        id: 5,
        img: 'images/redmi2.jpeg',
        name: 'Remdi Note 9',
        price: 60000,
        //save: 25,
        quantity: 'cart-quantity',
        delivery: 'In 3 - 4 days',
        itemInCart: false,
    },
    {
        id: 6,
        img: 'images/redmi3.jpeg',
        name: 'Redmi 8',
        price: 500000,
        //save: 20,
        quantity: 'cart-quantity',
        delivery: 'In 3 - 4 days',
        itemInCart: false,
    },
    {
        id: 7,
        img: 'images/redmi4.jpeg',
        name: 'Redmi  small',
        price: 39000,
        //save: 10,
        quantity: 'cart-quantity',
        delivery: 'In 3 - 4 days',
        itemInCart: false,
    },
    {
        id: 8,
        img: 'images/Nokia3.jpeg',
        name: 'Nokia 1',
        price: 70000,
        //save: 40,
        quantity: 'cart-quantity',
        delivery: 'In 3 - 4 days',
        itemInCart: false,
    },
    {
        id: 9,
        img: 'images/nokia4.jpeg',
        name: 'Nokia smart Phone2',
        price: 120000,
        //save: 40,
        quantity: 'cart-quantity',
        delivery: 'In 3 - 4 days',
        itemInCart: false,
    },
    {
        id: 10,
        img: 'images/Nokia5.jpeg',
        name: 'Nokia Edge2',
        price: 780000,
        //save: 50,
        quantity: 'cart-quantity',
        delivery: 'In 3 - 4 days',
        itemInCart: false,
    },

    {
        id: 11,
        img: 'images/nokia1.jpeg',
        name: 'Nokia 234',
        price: 560000,
        //save: 50,
        quantity: 'cart-quantity',
        delivery: 'In 3 - 4 days',
        itemInCart: false,
    },
    {
        id: 12,
        img: 'images/samsung1.jpeg',
        name: 'Samsong',
        price: 70000,
        //save: 50,
        quantity: 'cart-quantity',
        delivery: 'In 3 - 4 days',
        itemInCart: false,
    },
    {
        id: 13,
        img: 'images/samsung2.jpeg',
        name: 'Samsung 234',
        price: 60000,
        //save: 50,
        quantity: 'cart-quantity',
        delivery: 'In 3 - 4 days',
        itemInCart: false,
    },
    {
        id: 14,
        img: 'images/samsung3.jpeg',
        name: 'Samsung 45',
        price: 70000,
        //save: 45,
        quantity: 'cart-quantity',
        delivery: 'In 3 - 4 days',
        itemInCart: false,
    },
    {
        id: 15,
        img: 'images/samsung3.jpeg',
        name: 'Samsung ',
        price: 560000,
        //save: 45,
        quantity: 'cart-quantity',
        delivery: 'In 3 - 4 days',
        itemInCart: false,
    },
    {
        id: 16,
        img: 'images/infinix1.jpg',
        name: 'Infinix 1 ',
        price: 100000,
        //save: 45,
        quantity: 'cart-quantity',
        delivery: 'In 3 - 4 days',
        itemInCart: false,
    },
    {
        id: 17,
        img: 'images/infinix2.jpeg',
        name: 'Infinix 2 ',
        price: 6100000,
        //save: 45,
        quantity: 'cart-quantity',
        delivery: 'In 3 - 4 days',
        itemInCart: false,
    },
    {
        id: 18,
        img: 'images/infinix3.jpeg',
        name: 'Infinix 3 ',
        price: 6100000,
        //save: 45,
        quantity: 'cart-quantity',
        delivery: 'In 3 - 4 days',
        itemInCart: false,
    },
    {
        id: 19,
        img: 'images/infinix4.jpeg',
        name: 'Infinix 4 ',
        price: 1560000,
        //save: 45,
        quantity: 'cart-quantity',
        delivery: 'In 3 - 4 days',
        itemInCart: false,
    },
];

let cartList = []; // Array to stored all the listed items in the ARRAY
let i;
let detail = document.getElementsByClassName('card-item');
let detailsimg = document.getElementById('detail-img');
let detailtitle = document.getElementById('details-title');
let detailprice = document.getElementById('detail-price');
let cartquantity = document.getElementsByClassName('cart-quantity');
//let you_save = document.getElementById('you-save');
let detailspage = document.getElementById('details-page');
let back = document.getElementById('back');

back.addEventListener('click', refreshPage); // Click Event to Home Page
let addtoCarts = document.querySelectorAll('#add-to-cart');
let cart = document.getElementById('cart');
cart.addEventListener('click', displayCart);
let carts = document.getElementById('carts');

carts.addEventListener('click', () => addtoCart(getId)); // click event to add items to cart from details Page

let getId;
let home = document.getElementById('logo');
home.addEventListener('click', hideCart); // Click event to hide cart page and reture back to home Page known as logo

//Click event on dynamically created Element to Remove itemms from lists

document.addEventListener('click', function(e) {
    if (e.target.id == 'remove') {
        let itemid = e.target.parentNode.id;
        removeFromCart(itemid);
    }
});

//click event to display details page
for (i = 0; i < data.length; i++) {
    detail[i].addEventListener('click', handleDetails);
}

//click events to add items to cart from home page cart icon
addtoCarts.forEach(val =>
    val.addEventListener('click', () => addtoCart(val.parentNode.id))
);

//detail Function
function handleDetails() {
    detailspage.style.display = 'block';
    getId = this.parentNode.id;
    detailsimg.src = data[getId].img;
    detailtitle.innerHTML = data[getId].name;
    detailprice.innerHTML = 'Price : $' + data[getId].price;
    cartquantity.innerHTML = data[getId].quantity;
    //you_save.innerHTML = 'You save : ($ ' + data[getId].save + ')';
}

//function to displays cart page
function displayCart() {
    document.getElementById('main').style.display = 'none';
    document.getElementById('details-page').style.display = 'none';
    document.getElementById('cart-container').style.display = 'block';
    if (cartList.length == 0) {
        document.getElementById('cart-with-items').style.display = 'none';
        document.getElementById('empty-cart').style.display = 'block';
    } else {
        document.getElementById('cart-with-items').style.display = 'block';
        document.getElementById('empty-cart').style.display = 'none';
    }
}

//add item to the cart
function addtoCart(id) {
    if (!data[id].itemInCart) {
        cartList = [...cartList, data[id]];
        addItem();
        alert('item added to your cart Successfully');
    } else {
        alert('items aleready in cart, pls pick another item');
    }
    data[id].itemInCart = true;
}
let totalAmount;
let totalItems;
//let totalSavings;
let cartquantitys;

//add item to the Cart
function addItem() {
    totalAmount = 0;
    totalItems = 0;
    //totalSavings = 0;
    cartquantitys = 0;
    let clrNode = document.getElementById('item-body');
    clrNode.innerHTML = '';
    cartList.map(cart => {
        let cartCont = document.getElementById('item-body');
        totalAmount = totalAmount + cart.price;
        //totalSavings = totalSavings + cart.save;
        cartquantitys = cartquantitys + cart.quantity;
        totalItems = totalItems + 1;
        let tempCart = document.createElement('div');
        tempCart.setAttribute('class', 'cart-list');
        tempCart.setAttribute('id', cart.id);

        let listImg = document.createElement('img');
        listImg.setAttribute('id', 'list-img');
        listImg.src = cart.img;
        tempCart.appendChild(listImg);

        let listName = document.createElement('h3');
        listName.setAttribute('class', 'list-name');
        listName.innerHTML = cart.name;
        tempCart.appendChild(listName);
        let listPay = document.createElement('h3');
        listPay.setAttribute('class', 'pay');
        listPay.innerHTML = cart.price;
        tempCart.appendChild(listPay);

        let listQuantity = document.createElement('h3');
        listQuantity.setAttribute('class', 'quantity');
        listQuantity.innerHTML = '1';
        tempCart.appendChild(listQuantity);
        let listTrash = document.createElement('i');
        listTrash.setAttribute('id', 'remove');
        tempCart.appendChild(listTrash);

        cartCont.appendChild(tempCart);
    });
    document.getElementById('total-amount').innerHTML =
        'Total Items : $ ' + totalAmount;
    document.getElementById('total-items').innerHTML =
        'Total Amount : $ ' + totalItems;
    document.getElementsByClassName('cart-quantity').innerHTML =
        //document.getElementById('you-saved').innerHTML =
        //'You Saved : $ ' + totalSavings;
        document.getElementById('total').style.display = 'block';
}

//code to hide your cart Page
function hideCart() {
    document.getElementById('main').style.display = 'block';
    document.getElementById('cart-container').style.display = 'none';
}

//back to home Page from details Page
function refreshPage() {
    detailspage.style.display = 'none';
}

//remove item from the Cart
function removeFromCart(itemid) {
    data[itemid].itemInCart = false;
    cartList = cartList.filter(list => list.id != itemid);
    addItem();
    if (cartList.length == 0) {
        document.getElementById('cart-with-items').style.display = 'none';
        document.getElementById('empty-cart').style.display = 'block';
    }
}

// update total
function updatetotal() {
    let cartcontent = document.getElementById('details-page')[0];
    let cartboxes = cartcontent.getElementsByClassName('details-card');
    for (let i = 0; i < cartboxes.length; i++) {
        let cartBox = cartboxes[i];
        let priceElement = cartBox.getElementById('detail-price')[0];
        let quantityElements = cartBox.getElementById('cart-quantity')[0];
        let quantityvaluz = quantityElements.value;
    }
}