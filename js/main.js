let navbar = document.querySelector(".navbar");
let menuBtn = document.getElementById("menu-btn");
menuBtn.addEventListener("click", function () {
  cartItem.classList.remove("active");
  searchForm.classList.remove("active");
  navbar.classList.toggle("active");
});
let cartItem = document.querySelector(".card__items-container");
let cartBtn = document.getElementById("cart-btn");
cartBtn.addEventListener("click", function () {
  navbar.classList.remove("active");

  searchForm.classList.remove("active");
  cartItem.classList.toggle("active");
});

let searchBtn = document.getElementById("search-btn");
let searchForm = document.getElementById("search-form");
let searchBox = document.getElementById("search-box");
let search1 = document.getElementById("search1");
search1.addEventListener('click',function(){
 
  if(searchBox.value =="about"){
    window.scrollTo(0, 761);
   
  }else if(searchBox.value =="menu"){
    window.scrollTo(0, 1477);
  }
  else if(searchBox.value =="product"){
    window.scrollTo(0, 3823);
  }
  else if(searchBox.value =="contact"){
    window.scrollTo(0, 6549);
  }
  else if(searchBox.value =="blogs"){
    window.scrollTo(0, 7216);
  }

  else{
 Swal.fire("section not found")
}

})





searchBtn.addEventListener("click", function () {
  navbar.classList.remove("active");
  cartItem.classList.remove("active");

  searchForm.classList.toggle("active");
});
window.onscroll = () => {
  navbar.classList.remove("active");
  cartItem.classList.remove("active");
  searchForm.classList.remove("active");
 
};

/*======================active cart==============*/
// let addToCart1=document.querySelector('.btn-menu1');
// addToCart1.addEventListener('click',function(){
//     cartItem.innerHTML +=` <div class="cart__item">
//     <span class="fas fa-times"></span>
//     <img src="images/cup1.avif" alt="" />
//     <div class="content">
//       <h3>cart item 01</h3>
//       <div class="price">$15.99/-</div>
//     </div>
//   </div>`
// })

// let addToCart2=document.querySelector('.btn-menu2');
// addToCart2.addEventListener('click',function(){
//     cartItem.innerHTML +=` <div class="cart__item">
//     <span class="fas fa-times"></span>
//     <img src="images/cup2.avif" alt="" />
//     <div class="content">
//       <h3>testy and healty</h3>
//       <div class="price">$15.99/-</div>
//     </div>
//   </div>`
// })
// let addToCart3=document.querySelector('.btn-menu3');
// addToCart3.addEventListener('click',function(){
//     cartItem.innerHTML +=` <div class="cart__item">
//     <span class="fas fa-times"></span>
//     <img src="images/cup3.avif" alt="" />
//     <div class="content">
//       <h3>testy and healty</h3>
//       <div class="price">$15.99/-</div>
//     </div>
//   </div>`
// })
// let addToCart4=document.querySelector('.btn-menu4');
// addToCart4.addEventListener('click',function(){
//     cartItem.innerHTML +=` <div class="cart__item">
//     <span class="fas fa-times"></span>
//     <img src="images/cup4.avif" alt="" />
//     <div class="content">
//       <h3>testy and healty</h3>
//       <div class="price">$18.50/-</div>
//     </div>
//   </div>`
// })
// let addToCart5=document.querySelector('.btn-menu5');
// addToCart5.addEventListener('click',function(){
//     cartItem.innerHTML +=` <div class="cart__item">
//     <span class="fas fa-times"></span>
//     <img src="images/cup5.avif" alt="" />
//     <div class="content">
//       <h3>testy and healty</h3>
//       <div class="price">$15.55/-</div>
//     </div>
//   </div>`
// })
// let addToCart6=document.querySelector('.btn-menu6');
// addToCart6.addEventListener('click',function(){
//     cartItem.innerHTML +=` <div class="cart__item">
//     <span class="fas fa-times"></span>
//     <img src="images/cup6.avif" alt="" />
//     <div class="content">
//       <h3>testy and healty</h3>
//       <div class="price">$15.55/-</div>
//     </div>
//   </div>`
// })
// let addToCart7=document.querySelector('.btn-menu7');
// addToCart7.addEventListener('click',function(){
//     cartItem.innerHTML +=` <div class="cart__item">
//     <span class="fas fa-times"></span>
//     <img src="images/cup7.avif" alt="" />
//     <div class="content">
//       <h3>testy and healty</h3>
//       <div class="price">$15.55/-</div>
//     </div>
//   </div>`
// })
// let addToCart8=document.querySelector('.btn-menu8');
// addToCart8.addEventListener('click',function(){
//     cartItem.innerHTML +=` <div class="cart__item">
//     <span class="fas fa-times"></span>
//     <img src="images/cup8.avif" alt="" />
//     <div class="content">
//       <h3>testy and healty</h3>
//       <div class="price">$15.55/-</div>
//     </div>
//   </div>`
// })

// card-items

let cardContainer = document.querySelector(".card-items");
let addToCart = document.querySelectorAll(".btn-menu");
let noSells = document.querySelector(".nosells");
let checkOut = document.getElementById("checkout");
let sellsPargrah = document.querySelector(".sellsPargrah");

addToCart.forEach((card) => {
  card.addEventListener("click", function (e) {
    e.preventDefault();
    let imgbox = e.currentTarget.parentElement.childNodes[1].src;
    box = e.currentTarget.parentElement;
    let titleCard = box.childNodes[3].textContent;
    boxPrice = box.childNodes[5].textContent;
    Swal.fire('Product Added To Cart')
    let price1 = "";
    for (let i = 0; i < 6; i++) {
      price1 += boxPrice[i];
    }

    cardContainer.innerHTML += `
  <div class="cart__item ">
  <span class="fas fa-times closebox"></span>
  <img src="${imgbox}" alt="" />
  <div class="content">
    <h3>${titleCard}</h3>
    <div class="price">${price1}/-</div>
  </div>
  </div> 
  

  `;

    let cards = cardContainer.querySelectorAll(".cart__item");
    cards.forEach((card) => {
      let closeIcon = card.querySelector("span");
      closeIcon.addEventListener("click", function (e) {
        e.currentTarget.parentElement.classList.add("hide");
      });
    });

    checkOut.classList.add("show");
    noSells.classList.add("hide");
  });
});
// ============

checkOut.addEventListener("click", function (e) {
  e.preventDefault();
  sellsPargrah.classList.add("show");
  setTimeout(function () {
    sellsPargrah.classList.remove("show");
    cardContainer.innerHTML = "";
    checkOut.classList.remove("show");
    noSells.classList.remove("hide");
  }, 1000);
});
let heartIcon = document.querySelectorAll(".fa-heart");
heartIcon.forEach((heart) => {
  heart.addEventListener("click", function (e) {
    console.log(e.currentTarget.classList.toggle("bage"));
  });
});

let buy=document.querySelectorAll('.buy')

buy.forEach((b) => {
    b.addEventListener("click", function (e) {
      e.preventDefault();
      let img=e.currentTarget.parentElement.parentElement.childNodes[3].childNodes[1].src;
      let title1=e.currentTarget.parentElement.parentElement.childNodes[5].childNodes[1].textContent;
     let price2=e.currentTarget.parentElement.parentElement.childNodes[5].childNodes[5].textContent;
    
     Swal.fire('Product Added To Cart')

      let price1 = "";
      for (let i = 0; i < 6; i++) {
        price1 += price2[i];
      }
  
      cardContainer.innerHTML += `
    <div class="cart__item ">
    <span class="fas fa-times closebox"></span>
    <img src="${img}" alt="" />
    <div class="content">
      <h3>${title1}</h3>
      <div class="price">${price1}/-</div>
    </div>
    </div> 
    
  
    `;
    

  
      let cards = cardContainer.querySelectorAll(".cart__item");
      cards.forEach((card) => {
        let closeIcon = card.querySelector("span");
        closeIcon.addEventListener("click", function (e) {
          e.currentTarget.parentElement.classList.add("hide");
        });
      });
  
      checkOut.classList.add("show");
      noSells.classList.add("hide");
    });
  });
  let closeSecond=document.querySelector('.closeSecond')
 
  function second(){
      window.history.back();
  }  
//   let imgpath=""
//   let readMore=document.querySelectorAll('.readMore')
//  let secondImg=document.querySelector('.secondImg')
//   readMore.forEach(read => {
//     read.addEventListener('click',function(e){
//       e.preventDefault()
//     imgpath=e.currentTarget.parentElement.parentElement.childNodes[1].childNodes[1].src
   
// console.log(imgpath);

//     })
//   });

