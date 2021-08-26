// Memory
const buttonFor8GBMemory =document.getElementById('memory-8');
const buttonFor16GBMemory =document.getElementById('memory-16');

// Storage
const buttonFor256GB =document.getElementById('storage-256');
const buttonFor512GB =document.getElementById('storage-512');
const buttonFor1TB =document.getElementById('storage-1tb');

// Delivery
const freeDelivery = document.getElementById('free-delivery');
const expensiveDelivery = document.getElementById('expensive-delivery');

// promo code
const promoValue = document.getElementById('promo-code');
const apllyButton = document.getElementById('apply-button');
// Notify msg
const notify = document.getElementById('notify-msg');


// Update price function
function priceUpdate(product,price){
    const productPrice = document.getElementById(product +'-price');
    productPrice.innerText = Number(price);
    totalPrice();
}

// total price function
function totalPrice(){
    const bestPrice = document.getElementById('normal-price');
    const subTotalPrice = document.getElementById('sul-total');
    const memoryPrice = document.getElementById('memory-price');
    const storagePrice = document.getElementById('storage-price');
    const deliveryPrice = document.getElementById('delivery-price');
    const totalprice = document.getElementById('total');
    const bestPriceValue = Number(bestPrice.innerText);    
    const memoryPriceValue = Number(memoryPrice.innerText);
    const storagePriceValue = Number(storagePrice.innerText);
    const deliveryPriceValue = Number(deliveryPrice.innerText);
    const total = bestPriceValue + memoryPriceValue + storagePriceValue + deliveryPriceValue;
    subTotalPrice.innerText = total;
    totalprice.innerText = total;
}
// promo code function
function promoCode(){
    const promoCodeInput = promoValue;
    const promoCodeInputValue = promoCodeInput.value;
    const matchCode = 'mackbook';
    if(promoCodeInputValue == matchCode){
          const previousTotalPrice = document.getElementById('total');
          const previousTotalPriceValue = Number(previousTotalPrice.innerText)
          const discountAmount  = previousTotalPriceValue * 0.2;
          const newTotalPrice = previousTotalPriceValue -discountAmount;
          previousTotalPrice.innerText = newTotalPrice;
          notify.style.display = 'none';
          apllyButton.disabled = true;
    }
    else{
        notify.style.display = 'block';


    }
    promoCodeInput.value = '';
}
// For selected function
function isContain(elem){
    return elem.classlist.contains('selected');
}
// For Memory 

buttonFor8GBMemory.addEventListener('click',function(){
    if(isContain != true){
        buttonFor8GBMemory.classList.add('selected');
        buttonFor16GBMemory.classList.remove('selected');
    }
    priceUpdate('memory',0);
})
buttonFor16GBMemory.addEventListener('click',function(){
    if(isContain != true){
        buttonFor8GBMemory.classList.remove('selected');
        buttonFor16GBMemory.classList.add('selected');
    }
    priceUpdate('memory',180);
})

// For SSD 

buttonFor256GB.addEventListener('click',function(){
    if(isContain != true){
        buttonFor256GB.classList.add('selected');
        buttonFor512GB.classList.remove('selected');
        buttonFor1TB.classList.remove('selected');
    }
    priceUpdate('storage',0);
})
buttonFor512GB.addEventListener('click',function(){
    if(isContain != true){
        buttonFor256GB.classList.remove('selected');
        buttonFor512GB.classList.add('selected');
        buttonFor1TB.classList.remove('selected');
    }
    priceUpdate('storage',100);
})
buttonFor1TB.addEventListener('click',function(){
    if(isContain != true){
        buttonFor256GB.classList.remove('selected');
        buttonFor512GB.classList.remove('selected');
        buttonFor1TB.classList.add('selected');
    }
    priceUpdate('storage',180);
})

// for Delivery 
freeDelivery.addEventListener('click',function(){
    if(isContain != true){
        freeDelivery.classList.add('selected');
        expensiveDelivery.classList.remove('selected');
    }
    priceUpdate('delivery',0);
})
expensiveDelivery.addEventListener('click',function(){
    if(isContain != true){
        freeDelivery.classList.remove('selected');
        expensiveDelivery.classList.add('selected');
    }
    priceUpdate('delivery',20);
})


// For promo code

promoValue.addEventListener('click',function(){
    if(isContain != true){
        promoValue.classList.add('selected');
        apllyButton.classList.remove('selected');
    }
})
apllyButton.addEventListener('click',function(){
    if(isContain != true){
        promoValue.classList.remove('selected');
        apllyButton.classList.add('selected');
    }
    promoCode();
})