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

let basket= JSON.parse(localStorage.getItem("itemsnumber")) || [];
const iconCart=document.querySelectorAll("#cart-open");
console.log(iconCart);

if(basket.length>0){
  iconCart.forEach(eachicon => {
    eachicon .classList.add("bx-tada");
  });

}

let calculation=()=>{
  let cartIcon =document.querySelectorAll(".cartAmount");
 cartIcon.forEach(eachicon => {
  eachicon.innerHTML=basket.map((x)=>x.item).reduce((x,y)=>x+y,0);
  });
 
};

calculation();


  let shopItemsData=[{
    id: "1",
    category:"Mens",
    name:"T-Shirt for Men",
    price:781,
    img:"./mens/t1.png",
  },
  { 
  id:"2",
  category:"Mens",
  name:"T-Shirt for Men",
  price:708,
  img:"./mens/t2.png",
  
  },
  { 
  id:"3",
  category:"Mens",
  name:"T-Shirt for Men",
  price:718,
  img:"./mens/t3.png",
  
    
  },
  {
    id:"4",
    category:"Mens",
    name:"T-Shirt for Men",
    price:278,
    img:"./mens/t4.png",
    
  },{
    id:"5",
    category:"Mens",
    name:"T-Shirt for Men",
    price:178,
    img:"./mens/t5.png",
    
  },
  {
    id:"6",
    category:"Mens",
    name:"T-Shirt for Men",
    price:781,
    img:"./mens/t6.png",
    
  },
  {
    id:"7",
    category:"Mens",
    name:"Fashion Shirt for Men",
    price:768,
    img:"./mens/f1.jpg",
    
  },
  {
    id:"8",
    category:"Mens",
    name:"Fashion Shirt for Men",
    price:787,
    img:"./mens/f2.jpg",
  },
  {
    id:"9",
    category:"Mens",
    name:"Fashion Shirt for Men",
    price:787,
    img:"./mens/f3.jpg",
  },
  {
    id:"10",
    category:"Mens",
    name:"Fashion Shirt for Men",
    price:787,
    img:"./mens/f4.jpg",
  },
  {
    id:"11",
    category:"Mens",
    name:"Fashion Shirt for Men",
    price:787,
    img:"./mens/f5.jpg",
  },
  {
    id:"12",
    category:"Mens",
    name:"Fashion Shirt for Men",
    price:787,
    img:"./mens/shirt4.jpg",
  },
  {
    id:"12",
    category:"Women",
    name:"Ethnic Top",
    price:481,
    img:"./womens/top1.jpg",
  },
  {
    id:"13",
    category:"Women",
    name:"Printed Ethnic Top",
    price:499,
    img:"./womens/top2.jpg",
  },
  {
    id:"14",
    category:"Women",
    name:"Embroidered Top",
    price:639,
    img:"./womens/top3.jpg",
  },
  {
    id:"15",
    category:"Women",
    name:"Embroidered A-Line Top",
    price:639,
    img:"./womens/top4.jpg",
  },
  {
    id:"16",
    category:"Women",
    name:"Anarkali Kurta",
    price:549,
    img:"./womens/kurti1.jpg",
  },
  {
    id:"17",
    category:"Women",
    name:"Printed Striped Kurta",
    price:649,
    img:"./womens/kurti3.jpg",
  },

  {
    id:"18",
    category:"Women",
    name:"Printed Top",
    price:449,
    img:"./womens/Printedtop.jpeg",
  },
  

  
  {
    id:"19",
    category:"Women",
    name:"Pure Cotton Kurta",
    price:449,
    img:"./womens/kurti3.jpg",
  },


  ];




  const mensCollection= document.querySelector(".Men");
  const womenCollection=document.querySelector(".Women");
  const allCollection=document.querySelector(".All");

 /**Filter by category**/



if( allCollection){
  allCollection.addEventListener("click",()=>{
  
   generateShop();
  })

}

if(shop.classList.contains("index")){

  shopItemsData=[{
    id: "1",
    category:"Mens",
    name:"Fashion Shirt for Men",
    price:781,
    img:"./mens/shirt1.jpg",
  },
  { 
  id:"2",
  category:"Mens",
  name:"Fashion Shirt for Men",
  price:708,
  img:"./mens/shirt2.jpg",
  
  },
  { 
  id:"3",
  category:"Mens",
  name:"Fashion Shirt for Men",
  price:718,
  img:"./mens/shirt3.jpg",
  
    
  },
  {
    id:"4",
    category:"Women",
    name:"Fashion Shirt for MEN",
    price:278,
    img:"./mens/shirt4.jpg",
    
  }]

}

  let generateShop=()=>{
     return (shop.innerHTML=  shopItemsData.map((x)=>{ 
      let {id,category,name,price,img}=x;
      let search =basket.find((x)=>x.newId==id) || [];
      
      return `<div class="pro" id="product-id-${id}" >
<div class="img-area">
  <img class="product-image" src=${img} alt="image">
</div>
  <div class="des">
    <div class="quantity-box">
    <span class="category">${category}</span>
    <div class="buttons">
    <i onclick="decrement(${id})"class="fa-solid fa-minus"></i>
    <div id=${id} class="quantity">
    ${search.item === undefined ? 0 :search.item}
    </div>
     <i onclick="increment(${id})"class="fa-solid fa-plus"></i>
    </div>
  </div>
    <h5 id="name">${name}</h5>
    <h4>Rs.${price}</h4>
    <div id="cart">
      <a href="#">  <i onclick="increment(${id})" class="fa-solid fa-cart-arrow-down"></i></a>
    </div>
  </div>
</div>`;

    }).join(""));
       
  };
  generateShop(); 
  
 

  if( document.querySelector(".search")){
    document.querySelector(".search").addEventListener("click",()=>{
      let searchinput=document.getElementById("inputfield").value;
      let elements =document.querySelectorAll("#name");
  
      let cards=document.querySelectorAll(".pro");
      elements.forEach((element,index) => {
        let textContent=element.textContent.toUpperCase();
        console.log(textContent);
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
 





let filterProduct=(value)=>{
  const selectCategoryBtn=document.querySelectorAll(".button-value");
  selectCategoryBtn.forEach((btns)=>{

    let element=document.querySelectorAll(".category");
  let cards=document.querySelectorAll(".pro");
  element.forEach((element,index)=>{
    let textContent=element.textContent.toUpperCase();
    if(value.toUpperCase()&&btns.innerText.toUpperCase()=="ALL"){
      generateShop(); 
    }
      
     if (value.toUpperCase()==btns.innerText.toUpperCase()){
      btns.classList.add("button-active");
      if(textContent.includes(value.toUpperCase())){
       cards[index].classList.remove("hide");
     
     }
     else{
       cards[index].classList.add("hide");
     }
    }  
    
    else{
     btns.classList.remove("button-active");
    }
 
  })

 
  })

}

window.onload=()=>{
  filterProduct("all");
}



  let increment=(id)=>{
  let selectedId=id;
  let search=basket.find ((x)=>x.newId===selectedId);
  iconCart.forEach(eachicon => {
    eachicon.classList.add("bx-tada");
  });

  if(search===undefined){
    basket.push({
      newId:selectedId,
      item:1,
    });
   
  }
  else{
    search.item+=1;
  }

  update(selectedId);
  localStorage.setItem("itemsnumber",JSON.stringify(basket));

};

let decrement =(id)=>{
 
  let selectedId=id;
  let search=basket.find ((x)=>x.newId===selectedId);

  if(search === undefined) return;
  else if(search.item===0)return;
  else{
    search.item -= 1;
  }
 
  update(selectedId);
  basket = basket.filter((x) => x.item !== 0);
  localStorage.setItem("itemsnumber",JSON.stringify(basket));
 
};

let update=(id)=>{ 
  let search = basket.find((x)=>x.newId ===id);
    document.getElementById(id).innerHTML=search.item;
    calculation();
};


const cartopen =document.querySelector("#cart-page");
iconCart.forEach(eachicon => {
  eachicon.addEventListener("click",()=>{
    cartopen.style.right="0"
    localStorage.setItem("itemsnumber",JSON.stringify(basket));
    generateCartItems();
    calculation();
    TotalAmount();
  })
});



let goShop=()=>{
  cartopen.style.right="100%";
  window.location.reload("shop.html");
}


let cartclosebtn =document.querySelector(".text-center")
let closecart=()=>{
  cartopen.style.right="100%";
  window.location.reload("shop.html");
}





let label=document.querySelector("#label");
let ShoppingCart =document.querySelector("#shopping-cart");

let generateCartItems=()=>{
  if(basket.length!==0){
     return (ShoppingCart.innerHTML=basket.map((x)=>{
      let {newId , item}=x;
      let search = shopItemsData.find((y)=>y.id==newId) || [];
      let {img,name,price}=search;
      return ` 
      <div class= "cart-item">
      
            <img width="100" src=${img} alt=""/>
            <div class="details">

              <div class="title-price-x">
              <h4 class="title-price">
              <p>${name}</p>
              <p class="cart-item-price">Rs.${price}</p>
              </h4>
              <i onclick="removeItem(${newId})"class="fa-solid fa-square-xmark" style="color: #000000;"></i>
              </div>
              <div class="buttons">
                <i onclick="decrement1(${newId})"class="fa-solid fa-minus"></i>
                <div id=${newId} class="quantity">${item}</div>
                <i onclick="increment1(${newId})"class="fa-solid fa-plus"></i>
              </div>
            <h3>Rs.${item*price}</h3>
          </div>
            </div>
      </div>
      `
     })
     .join(""));
  }
  else{
    ShoppingCart.innerHTML=``;
    label.innerHTML=`     
    <i onclick ="closecart();"class="fa-solid fa-circle-xmark"></i>
    <span> The Cart is Empty</span>
    <button class="HomeBtn" onclick="goShop();" id="backtoHome">Back to Shop</button>
    ` 
   
  }
};

generateCartItems();

let increment1=(id)=>{
  let selectedId=id;

  let search=basket.find ((x)=>x.newId===selectedId);
  if(search===undefined){
    basket.push({
      newId:selectedId,
      item:1,
    });
   
  }
  else{
    search.item+=1;
  }
  generateCartItems();
  update1(selectedId);
  localStorage.setItem("itemsnumber",JSON.stringify(basket));

};

let decrement1 =(id)=>{
 
  let selectedId=id;
  let search=basket.find ((x)=>x.newId===selectedId);

  if(search === undefined) return;
  else if(search.item===0)return;
  else{
    search.item -= 1;
  }
 
  update1(selectedId);
  basket = basket.filter((x) => x.item !== 0);
  generateCartItems();
  localStorage.setItem("itemsnumber",JSON.stringify(basket));
 
};

let update1=(id)=>{ 
  let search = basket.find((x)=>x.newId ===id);
    document.getElementById(id).innerHTML=search.item;
    calculation();
    TotalAmount();
};

let removeItem=(id)=>{
   let selectedItem =id;
   console.log(basket)
   basket=basket.filter((x)=>x.newId !== selectedItem);
   generateCartItems();
   TotalAmount();
   calculation();
   localStorage.setItem("itemsnumber",JSON.stringify(basket));
   
}

let clearCart=()=>{
  basket=[]
  generateCartItems();
  calculation();
  localStorage.setItem("itemsnumber",JSON.stringify(basket));

}

let TotalAmount=()=>{
  if(basket.length!==0){
    let amount =basket.map((x)=>{
      let {newId, item} =x;
      let search = shopItemsData.find((y)=>y.id==newId) || [];
      return item* search.price;
    }).reduce((x,y)=>x+y ,0);
    label.innerHTML=`
    <i onclick ="closecart();"class="fa-solid fa-circle-xmark"></i>
    <span> Total Bill : Rs.${amount}</span>
    <button id="checkout" onclick="checkOut();">Check Out</button>
    <button onclick="clearCart();" id="removeAll"> Clear Cart</button>
    `;
    // console.log(amount);
  }
  else return;
}
TotalAmount();




let checkOut=()=>{
  clearCart();
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

