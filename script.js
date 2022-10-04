 const mainimgContainer = document.querySelector('#mainimgContainer');
 const mainimgContainerimages = document.querySelectorAll('#mainimgContainer img');
 const menuimgContainer = document.querySelector('#menuimgContainer');
 const menuimgContainerdiv = document.querySelectorAll('#menuimgContainer div img');
 const menuimgContainerdivborder = document.querySelectorAll('#menuimgContainer div');

 for(let i=0; i<menuimgContainerdiv.length;i++){
    mainimgContainerimages[i].onclick = ()=>{
        popupControll();
    }
    menuimgContainerdiv[i].onclick = ()=>{
        hiddenallvaule(i);
         menuimgContainerdiv[i].classList.contains('opacity-100') ?
         menuimgContainerdiv[i].classList.replace('opacity-100','opacity-50'): " "; 
         
         mainimgContainerimages[i].classList.contains('hidden') ?
         mainimgContainerimages[i].classList.replace('hidden', 'flex'):" ";
        
         menuimgContainerdivborder[i].classList.contains('border-0') ?
         menuimgContainerdivborder[i].classList.replace('border-0', 'border-2'):" ";
        
        }     
 }
 function hiddenallvaule(a){
     for(let j=0; j< menuimgContainerdiv.length; j++){
        if(a != j){
            menuimgContainerdiv[j].classList.replace('opacity-50','opacity-100'); 
            mainimgContainerimages[j].classList.replace('flex', 'hidden');
            menuimgContainerdivborder[j].classList.replace('border-2', 'border-0');
        
        }

     }
 }

// popup slider 


const mainimgContainerPopupImages = document.querySelectorAll('#mainimgContainerPopup img');
const mainimgContainerPopup = document.querySelector('#menuimgContainer');
const menuimgContainerPopup = document.querySelectorAll('#menuimgContainerPopup div img');
const menuimgContainerPopupborder = document.querySelectorAll('#menuimgContainerPopup div');

for(let i=0; i<menuimgContainerPopup.length;i++){
    menuimgContainerPopup[i].onclick = ()=>{
       hiddenallvaule2(i);
       menuimgContainerPopup[i].classList.contains('opacity-100') ?
       menuimgContainerPopup[i].classList.replace('opacity-100','opacity-50'): " "; 
        
       mainimgContainerPopupImages[i].classList.contains('hidden') ?
       mainimgContainerPopupImages[i].classList.replace('hidden', 'flex'):" ";
       
       menuimgContainerPopupborder[i].classList.contains('border-0') ?
       menuimgContainerPopupborder[i].classList.replace('border-0', 'border-2'):" ";
       
       }     
}
function hiddenallvaule2(a){
    for(let j=0; j< menuimgContainerPopup.length; j++){
       if(a != j){
        menuimgContainerPopup[j].classList.replace('opacity-50','opacity-100'); 
        mainimgContainerPopupImages[j].classList.replace('flex', 'hidden');
        menuimgContainerPopupborder[j].classList.replace('border-2', 'border-0');
       
       }

    }
}

// -------
const sliderSectionPopup = document.querySelector('#sliderSectionPopup');
function  popupControll(){
 sliderSectionPopup.style.display = "flex";
}
const xClose = document.querySelector('#xClose');
xClose.onclick = ()=>{
    sliderSectionPopup.style.display = "none"; 
}

//====================================== side button slider
   function sidebuttonslide(a){
    let i ;
      for(k=0; k<menuimgContainerPopup.length; k++ ){
       if( menuimgContainerPopup[k].classList.contains( 'opacity-50'))
       {
        if( a == 1 ){
           if(k > (menuimgContainerPopup.length -2) ){
            i = 0;
           }else{
            i = k + a;
            console.log(" asdfasdfasdf" + k);
        }
            
        }else{ 
        if(( k == 0) && ( a == -1)){ 
             k = menuimgContainerPopup.length;
             i = k + a;
             console.log( " if conditon execut " + k);
            }else{
                i = k + a;
                console.log("els Conditions execute" + k);
            }
            console.log(" k =:" + k);
        }
       }
      } 
  console.log( menuimgContainerPopup.length);
  console.log( i);
  console.log( a);
  

    hiddenallvaule3(i);
    menuimgContainerPopup[i].classList.contains('opacity-100') ?
    menuimgContainerPopup[i].classList.replace('opacity-100','opacity-50'): " "; 
     
    mainimgContainerPopupImages[i].classList.contains('hidden') ?
    mainimgContainerPopupImages[i].classList.replace('hidden', 'flex'):" ";
    
    menuimgContainerPopupborder[i].classList.contains('border-0') ?
    menuimgContainerPopupborder[i].classList.replace('border-0', 'border-2'):" ";
    
    }     

function hiddenallvaule3(a){
 for(let j=0; j< menuimgContainerPopup.length; j++){
    if(a != j){
     menuimgContainerPopup[j].classList.replace('opacity-50','opacity-100'); 
     mainimgContainerPopupImages[j].classList.replace('flex', 'hidden');
     menuimgContainerPopupborder[j].classList.replace('border-2', 'border-0');
    
    }

 }
}

let quantitys = document.querySelector('#quantitys');
let eachprice = document.querySelector('#eachprice');
let popcardcontainer = document.querySelector('#popcardcontainer');
let cardshowprice = document.querySelector('#cardshowprice');
let cardquantity = document.querySelector('#cardquantity');
let total = document.querySelector('#total');
let totalvalueforcartbutton = document.querySelector('#totalvalueforcartbutton');
let emptydiv = document.querySelector('#emptydiv');
let deletproduct = document.querySelector('#deletproduct');
let toppopup = document.querySelector('#toppopup');
let profileimg = document.querySelector('#profileimg');
 
function qvalue(a){
    let vluess = quantitys.innerHTML;
    vluess = vluess * 1;
          if( a == 1){
            quantitys.innerHTML = vluess + a; 
          }
          if( (a == -1) && (vluess > 0)){
            quantitys.innerHTML = vluess + a;  
          }
}
//===================
function addtocart(){
    let vlues = quantitys.innerHTML;
    let cardshowvls = eachprice.innerHTML;
    cardshowvls = cardshowvls * 1;

    vlues = vlues * 1;
    if(vlues > 0){
        totalvalueforcartbutton.innerHTML = vlues;
        cardshowprice.innerHTML = cardshowvls;
        cardquantity.innerHTML = vlues;
        total.innerHTML = vlues *  cardshowvls;
        popcardcontainer.style.display = "flex";
        emptydiv.style.display = "none";
    }else{
        totalvalueforcartbutton.innerHTML = ""; 
        popcardcontainer.style.display = "none";
        emptydiv.style.display = "flex";
    }
}
deletproduct.addEventListener('click',()=>{

    popcardcontainer.style.display = "none";
    emptydiv.style.display = "flex";
    totalvalueforcartbutton.innerHTML = "";
    cardshowprice.innerHTML =  "";
    cardquantity.innerHTML = "";
    total.innerHTML = "";
})
profileimg.onclick = ()=>{
     if(toppopup.style.display ==  "flex"){
        toppopup.style.display =  "none"
     }else {
        toppopup.style.display = "flex";
     }
}

