const navBar=document.querySelector(".header-2 nav ul ");
const icon=document.querySelector(" #bar");
if(icon){
  icon.addEventListener("click",()=>{
    navBar.classList.toggle("show");
    icon.classList.toggle("fa-circle-xmark");
 
  })
}

/**Sign-in Animation***/

const signInbtn =document.querySelector("#sign-in-btn");
const signUpbtn =document.querySelector("#sign-up-btn");
const container=document.querySelector(".container");
const signUpbtn2=document.querySelector("#sign-up-btn2");
const signInbtn2=document.querySelector("#sign-in-btn2");
if(container){
  signUpbtn.addEventListener("click",()=>{
    container.classList.add("sign-up-mode");
  
  });
  
  signInbtn.addEventListener("click",()=>{
    container.classList.remove("sign-up-mode");
  
  });
  
  signUpbtn2.addEventListener("click",()=>{
  
    container.classList.add("sign-up-mode2");
  });
  
  signInbtn2.addEventListener("click",()=>{
    container.classList.remove("sign-up-mode2");
  });
}





// **Sign-up validation**////

const setUserName =document.querySelector("#username-set");
const setMail =document.querySelector("#email-set");
const setPwd =document.querySelector("#pwd-set");
const setCpwd= document.querySelector("#Cpwd");
const signupForm=document.querySelector("#sign-up");
const mailEnter=document.querySelector("#email");
const pwdEnter=document.querySelector("#password");
const signinForm=document.querySelector("#sign-in");


if(signupForm){
  signupForm.addEventListener("submit",(e)=>{   
       if( !ValidateInputs()){
        e.preventDefault();
       }      
  })
}

let signupDetails={

}


if(signinForm){
  signinForm.addEventListener("submit",(e)=>{   
       if( !ValidateSignInInputs()){
        e.preventDefault();
       }
       
  })
}

let email=localStorage.getItem("email");
let password=localStorage.getItem("Confirmpassword");

let ValidateSignInInputs=()=>{
  const mailEnterVal=mailEnter.value.trim();
  const pwdEnterVal=pwdEnter.value.trim();
  let success=true;
  if (mailEnterVal===''){
    success=false;
    setError(mailEnter,'Email is required')
  }
  else if(!validateEmail(mailEnterVal)){
    success=false;
    setError(mailEnter,'Please enter a valid email')
  }
  else if(mailEnterVal!==email){
    success=false;
    setError(mailEnter,'Email is incorrect')
  }

  else{
    setSuccess(mailEnter)
  }
  if (pwdEnterVal===''){
    success=false;
    setError(pwdEnter,'Password is required')
  }
  else if(pwdEnterVal.length<8){
    success=false;
    setError(pwdEnter,'Password must be atleast 8 characters');
  }
  else if(pwdEnterVal!==password){
    success=false;
    setError(pwdEnter,'The Password is incorrect');
  }

  else{
    setSuccess(pwdEnter)
  }
  return success;

}
// **input validation**////
let ValidateInputs=()=>{
  const UserNameVal=setUserName.value.trim();
  const emailVal =setMail.value.trim();
  const pwdVal =setPwd.value.trim();
  const cpwdVal= setCpwd.value.trim();
  let success=true;

  if(UserNameVal===''){
    success=false;
    setError(setUserName,'Username is required')
  }
  else{
    setSuccess(setUserName);
    localStorage.setItem("username",UserNameVal);
  }

  if (emailVal===''){
    success=false;
    setError(setMail,'Email is required')
  }
  else if(!validateEmail(emailVal)){
    success=false;
    setError(setMail,'Please enter a valid email')
  }
  else{
    setSuccess(setMail);
    localStorage.setItem("email",emailVal);
  }

  
  if (pwdVal===''){
    success=false;
    setError(setPwd,'Password is required')
  }
  else if(pwdVal.length<8){
    success=false;
    setError(setPwd,'Password must be atleast 8 characters');
  }

  else{
    setSuccess(setPwd);
    localStorage.setItem("password",pwdVal);
  }

  if (cpwdVal===''){
    success=false;
    setError(setCpwd,'Confirm Password is required')
  }
  else if(cpwdVal!==pwdVal){
    success=false;
    setError(setCpwd,'Password does not match');
  }

  else{
    setSuccess(setCpwd);
    localStorage.setItem("Confirmpassword",cpwdVal);
  }


  return success;
}
// **msg -pwd is required**////
let setError=(element,message)=>{
  const inputField=element.parentElement;
  const errorElement=inputField.querySelector(".error");

  errorElement.innerText=message;
  inputField.classList.add("error");
  inputField.classList.remove("success")

}

let setSuccess=(element)=>{
  const inputField=element.parentElement;
  const errorElement=inputField.querySelector(".error");

  errorElement.innerText='';
  inputField.classList.add("success");
  inputField.classList.remove("error")

}

const validateEmail=(email)=>{
  return String(email)
  .toLowerCase()
  .match(
    /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/
  );
}






 

 /*  Shop now button*/

 const shopbtn =document.querySelectorAll(".btns");
 if(shopbtn){
  shopbtn.forEach((btns)=>{
    btns.addEventListener("click",()=>{
      window.location.assign("shop.html");    
    })
   })
 }

 
 

/* Feature section --Image slider */
const featureSec=document.querySelector(".feature");
const btns=document.querySelectorAll(".btn");
const imgList=["1","2","3","4","5"];
let index=0;
const dotsContainer=document.querySelector(".dots");

if(featureSec){
  imgList.forEach(()=>{
    const dot= document.createElement("div");
    dot.classList.add("dot");
    dotsContainer.appendChild(dot);
});

let dots=document.querySelectorAll(".dot");

  dots[index].classList.add("dot-active");
  btns.forEach((button)=>{
    button.addEventListener("click",()=>{
    
     if( button.classList.contains("btn-left")){
      index--;
       if(index<0){
          index=imgList.length-1; 
       }
       featureSec.style.background= `url("./Assets/feature/${imgList[index]}.jpg")  top 25% right 0/cover no-repeat`;
       dots.forEach(dot=>{
          dot.classList.remove("dot-active");
       })
       dots[index].classList.add("dot-active");
      
     }
      else{
         index++;
         if(index>imgList.length-1){
           index=0;
         }
         featureSec.style.background= `url("./Assets/feature/${imgList[index]}.jpg")  top 25% right 0/cover no-repeat`;
         dots.forEach(dot=>{
          dot.classList.remove("dot-active");
       })
         dots[index].classList.add("dot-active");
        
      }  
    })
  })

 setInterval(()=>{
   index++;
  if(index>imgList.length-1){
    index=0; 
  }
  featureSec.style.background= `url("./Assets/feature/${imgList[index]}.jpg")  top 25% right 0/cover no-repeat`;
  dots.forEach(dot=>{
   dot.classList.remove("dot-active");
  })
  dots[index].classList.add("dot-active");
  
},3000)
}


/*  product card creation  */



let shop=document.querySelector("#shop");
const api ="https://fakestoreapi.com/products";

let basket = JSON.parse(localStorage.getItem("itemsnumber"))||[]; //Store the data which item we have selected{id:"",item:""}




const getData= async()=>{
  try{
    const response =await fetch(api);
    const data =await response.json();
    return data;
  
  }
  catch(err){
    console.log(err.message)
  }
 
}
let generateShop= async()=>{
  try{
    const result =await getData();
    console.log(result)
  return (shop.innerHTML=  result.map((x)=>{ 
       

   let {id,category,title,price,image}=x;
   let search = basket.find((x)=>x.id==id)||[]

   
   return `<div class="pro" id="product-id-${id}"  data-filter="${category}">
<div class="img-area">
<img class="product-image" src=${image} alt="image">
</div>
<div class="des">
 <div class="quantity-box">
 <span class="category">${category}</span>
 <div class="buttons">
 <i onclick="decrement(${id})"class="fa-solid fa-minus"></i>
 <div id=${id} class="quantity">
${search.item===undefined?0:search.item}
 </div>
  <i onclick="increment(${id})"class="fa-solid fa-plus"></i>
 </div>
</div>
 <h5 id="name">${title}</h5>
 <h4>Rs.${price}</h4>
 <div id="cart">
   <a href="#">  <i onclick="increment(${id})" class="fa-solid fa-cart-arrow-down"></i></a>
 </div>
</div>
</div>`;

 }).join(""));
  }

  catch(err){
    console.log(err.message)
  }
   
    
};
generateShop();
document.addEventListener ("DOMContentLoaded",getData());


const iconCart=document.querySelectorAll("#cart-open");
if(basket.length>0){
  iconCart.forEach(eachicon => {
    eachicon .classList.add("bx-tada");
  });

}

let increment= (id)=>{
  iconCart.forEach(eachicon => {
    eachicon .classList.add("bx-tada");
  });

  let selectedItem =id;
  let search = basket.find((x)=>x.id===selectedItem);
  if(search ===undefined){
    basket.push({
      id:selectedItem,
      item:1,
    })
  }
  else{
    search.item+=1;
  }
  update(selectedItem);
  localStorage.setItem("itemsnumber",JSON.stringify(basket));
}

let decrement= (id)=>{
  let selectedItem =id;
  let search = basket.find((x)=>x.id===selectedItem);
  if(search===undefined) return
  else if(search.item ===0) return; // item becomes 0 then function stops
  else{
    search.item -=1;
  }

  update(selectedItem);
  basket=basket.filter((x)=>x.item!==0);//if item is 0,then whole object deleted

  localStorage.setItem("itemsnumber",JSON.stringify(basket));
}

// calculating the items number and displaying in div
let update= (id)=>{
  let search =basket.find((x)=>x.id===id)
  document.getElementById(id).innerHTML=search.item;
  calculation();
}
// total items to be displayed in notification  bar
let calculation =()=>{
  let cartIcon =document.querySelectorAll(".cartAmount");
  cartIcon.forEach(eachicon => {
    eachicon.innerHTML=basket.map((x)=>x.item).reduce((x,y)=>x+y,0);
    });
}
calculation();

const cartopen =document.querySelector("#cart-page");

// Opening cart page

iconCart.forEach(eachicon => {
  eachicon.addEventListener("click",()=>{
    cartopen.style.right="0"
    localStorage.setItem("itemsnumber",JSON.stringify(basket));
    generateCartItems();
    calculation();
    TotalAmount();
    // window.location.reload();
  })
});

// Back to Shop Page
let closecart=()=>{
  cartopen.style.right="100%";
  window.location.reload("shop.html");
}

let cartclosebtn =document.querySelector(".text-center");
let label=document.querySelector("#label");
let ShoppingCart =document.querySelector("#shopping-cart");

let generateCartItems=async()=>{
   const result =await getData();
  if(basket.length!==0){
    return (ShoppingCart.innerHTML=basket.map((x)=>{
       let {id,item} =x;
       let search =result.find((y)=>y.id===id)|| [];
       let {image,title,price}=search;
       
      return ` <div class= "cart-item">
      
      <img width="100" src=${image} alt=""/>
      <div class="details">

        <div class="title-price-x">
        <h4 class="title-price">
        <p>${title}</p>
        <p class="cart-item-price">Rs.${price}</p>
        </h4>
        <i onclick="removeItem(${id})"class="fa-solid fa-square-xmark" style="color: #000000;"></i>
        </div>
        <div class="buttons">
          <i onclick="decrement1(${id})"class="fa-solid fa-minus"></i>
          <div id=${id} class="quantity">${item}</div>
          <i onclick="increment1(${id})"class="fa-solid fa-plus"></i>
        </div>
      <h3>Rs.${Math.floor(item*price)}</h3>
    </div>
      </div>
</div>`;
    }).join(" "))
  }
  else{
    ShoppingCart.innerHTML=``;
    label.innerHTML=`     
    <i onclick ="closecart();"class="fa-solid fa-circle-xmark"></i>
    <span> The Cart is Empty</span>
    <button class="HomeBtn" onclick="goShop();" id="backtoHome">Back to Shop</button>`
    
  }
};

generateCartItems();


let increment1= (id)=>{
  let selectedItem =id;
  let search = basket.find((x)=>x.id===selectedItem);
  if(search ===undefined){
    basket.push({
      id:selectedItem,
      item:1,
    })
  }
  else{
    search.item+=1;
  }
  generateCartItems();
  update1(selectedItem);
  localStorage.setItem("itemsnumber",JSON.stringify(basket));
}

let decrement1= (id)=>{
  let selectedItem =id;
  let search = basket.find((x)=>x.id===selectedItem);
  if(search===undefined) return
  else if(search.item ===0) return; // item becomes 0 then function stops
  else{
    search.item -=1;
  }

  update1(selectedItem);
  basket=basket.filter((x)=>x.item!==0);//if item is 0,then whole object deleted
  generateCartItems();
  localStorage.setItem("itemsnumber",JSON.stringify(basket));
}

// calculating the items number and displaying in div
let update1= (id)=>{
  let search =basket.find((x)=>x.id===id)
  document.getElementById(id).innerHTML=search.item;
  calculation();
  TotalAmount();
}





// total amount

let TotalAmount= async()=>{
  const result =await getData();
  if(basket.length!==0){
    let amount =basket.map((x)=>{
      let {id, item} =x;
      let search = result.find((y)=>y.id===id) || [];
      return item* search.price;
    }).reduce((x,y)=>x+y ,0);
    label.innerHTML=`
    <i onclick ="closecart();"class="fa-solid fa-circle-xmark"></i>
    <span> Total Bill : Rs.${Math.floor(amount)}</span>
    <button id="checkout" onclick="checkOut();">Check Out</button>
    <button onclick="clearCart();" id="removeAll"> Clear Cart</button>
    `;
  
  }
  else return;
}
TotalAmount();

//Remove the item

let removeItem=(id)=>{
  let selectedItem =id;
  basket=basket.filter((x)=>x.id!== selectedItem);
  generateCartItems();
  TotalAmount();
  calculation();
  localStorage.setItem("itemsnumber",JSON.stringify(basket));
}

// clear cart
let clearCart=()=>{
  basket=[]
  generateCartItems();
  calculation();
  localStorage.setItem("itemsnumber",JSON.stringify(basket));
}
//  Check out
let checkOut=()=>{
 ShoppingCart.innerHTML=``;
 label.innerHTML=`
  <div class="pop">
  <i class='bx bxl-shopify  bx-lg' id="icon" ></i>
 <div class="pop-text">
 <h2>Thank you! </h2>
 <p>Your order has been placed Successfully!</p>
 </div>
 <button class="HomeBtn" onclick="goShop();" id="backtoHome">Back to Home</button>
 </div>`;
}

// Back to Shop Page


let goShop=()=>{
  clearCart();
  cartopen.style.right="100%";
  window.location.reload("shop.html");
}



//search page


if( document.querySelector(".search")){
  document.querySelector(".search").addEventListener("click",()=>{
    let searchinput=document.getElementById("inputfield").value;
    let elements =document.querySelectorAll("#name");
    let cards=document.querySelectorAll(".pro");
    elements.forEach((element,index) => {
      let textContent=element.textContent.toUpperCase();
   
      if(textContent.includes(searchinput.toUpperCase()))
      {
        cards[index].classList.remove("hide");
      }

      else{
        cards[index].classList.add("hide");
      }
     
    });
    });
}

const selectCategoryBtn=document.querySelectorAll(".button-value");


selectCategoryBtn.forEach((btn)=>{
  selectCategoryBtn[0].classList.add("button-active");
    btn.addEventListener("click",(e)=>{
      e.preventDefault();
      setActiveBtn(e);
      let cards=document.querySelectorAll(".pro");
      const btnfilter =e.target.dataset.filter;

        cards.forEach((card)=>{

          if(btnfilter==="All"){

            card.classList.remove("hide");
          }
          else{
            const cardfilter=card.dataset.filter;
          
             if(btnfilter===cardfilter){
              card.classList.remove("hide");
  
             }
             else{
              card.classList.add("hide");
          
             }
          } 
         
        })
    })
})

let setActiveBtn =(e)=>{
  
  selectCategoryBtn.forEach((btn)=>{
    btn.classList.remove("button-active");
  })
  e.target.classList.add("button-active");
}

