
//Products
const productPlus=document.querySelector(".products-plus");
const productMinus=document.querySelector(".products-minus");
const productsList=document.querySelector(".products-list");

//Support
const supportPlus=document.querySelector(".support-plus");
const supportMinus=document.querySelector(".support-minus");
const supportList=document.querySelector(".support-list");

//Company
const companyPlus=document.querySelector(".company-plus");
const companyMinus=document.querySelector(".company-minus");
const companyList=document.querySelector(".company-list");

//Account
const accountPlus=document.querySelector(".account-plus");
const accountMinus=document.querySelector(".account-minus");
const accountList=document.querySelector(".account-list");


productPlus.addEventListener("click",()=>{
    productPlus.classList.add("hidden");
    productMinus.classList.remove("hidden");
    productsList.classList.remove("hidden");
})

productMinus.addEventListener("click",()=>{
    productPlus.classList.remove("hidden");
    productMinus.classList.add("hidden");
    productsList.classList.add("hidden");
})

supportPlus.addEventListener("click",()=>{
    supportPlus.classList.add("hidden");
    supportMinus.classList.remove("hidden");
    supportList.classList.remove("hidden");
});
supportMinus.addEventListener("click",()=>{
    supportPlus.classList.remove("hidden");
    supportMinus.classList.add("hidden");
    supportList.classList.add("hidden");
});

companyPlus.addEventListener("click",()=>{
    companyPlus.classList.add("hidden");
    companyMinus.classList.remove("hidden");
    companyList.classList.remove("hidden");
});
companyMinus.addEventListener("click",()=>{
    companyPlus.classList.remove("hidden");
    companyMinus.classList.add("hidden");
    companyList.classList.add("hidden");
});

accountPlus.addEventListener("click",()=>{
    accountPlus.classList.add("hidden");
    accountMinus.classList.remove("hidden");
    accountList.classList.remove("hidden");
})
accountMinus.addEventListener("click",()=>{
    accountPlus.classList.remove("hidden");
    accountMinus.classList.add("hidden");
    accountList.classList.add("hidden");
});


