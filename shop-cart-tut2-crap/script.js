
let btn =  document.getElementsByClassName('addToCartBtn') ;

let  cnt = 0 ;
let _cnt =  document.getElementById('lblCartCount') ;



console.log(_cnt.innerHTML)  ; 
console.log( btn )  ; 
for(let i=0 ; i<btn.length ;i++  ) {
    btn[i].addEventListener('click' , btnClicked  )  ;
    console.log("hello "  , btn[i]) ;
}

function btnClicked(e){
    cnt++ ;
    _cnt.innerHTML = cnt ; 
    let currAddToCartBtn  =  e.target ; 
    let parentElement  =  currAddToCartBtn.parentElement;
    let price = parentElement.getElementsByClassName('productPrice')[0].innerText;
    let title = parentElement.getElementsByClassName('productTitle')[0].innerText;
    let img = parentElement.getElementsByClassName('img')[0].src;
    
    console.log("here  " , e.target , price ,title , img  ) ;

    addRowInCart( title , price , img )  ;

    totalPrice = 0 ; 
    cartPrices = cartContainer.getElementsByClassName('cartPrice') ;
    for(let i=0;i < cartPrices.length ; i++ ) {
        totalPrice +=  parseInt(cartPrices[i].innerText.replace('$','').replace(',','') ) ; 
    }
    document.getElementsByClassName('cartTotalPrice')[0].innerText= totalPrice ;
}
let cartContainer =document.getElementsByClassName('cartContainer')[0] ;
function addRowInCart(title , price, image ){
    console.log("hen " ) ; 

    let div = document.createElement('div' ) ;
    div.classList.add('row'  ) ; 
    
    let insideDivContent = `
    <div class="col-xs-3 cartImage"><img src="${image}"></div>
    <div class="col-xs-3 cartTitle">${title}</div>
    <div class="col-xs-3 cartPrice">${price}</div>    
    <div class="col-xs-3 removeButton">Remove</div>

    ` ;
    div.innerHTML  = insideDivContent ;
    cartContainer.appendChild(div ) ; 
    removeButton  = document.getElementsByClassName('removeButton') ;
    for(let i=0;i<removeButton.length ;i++ ) {
        removeButton[i].addEventListener('click', removeFromCart ) ;
    }
}


function removeFromCart(e) {

    console.log(e.target ) ;
    console.log(e.target.parentElement ) ;
    e.target.parentElement.remove() ;
    cnt-- ; 
    _cnt.innerHTML = cnt ; 
}


