let socialProfile = document.querySelectorAll("#socialProfile");
let socialMedia = document.querySelectorAll(".social-media");
let socialProfilelist = document.querySelectorAll(".social-media li ");
let corpBankSelect = document.querySelector(".log-in div");
let button = document.querySelector(".log-in  div i");
let MoreLinksButton = document.querySelector(".button-for-links  button");
let hiddenLinks = document.querySelector("#hide");
let menu6 = document.querySelector(".menu-6");
let menu6List = document.querySelectorAll(".menu-6 li");
let corpBankSpan = document.querySelector(".corpBank span");
let slideList = document.querySelectorAll(".imageList li");
let slideImage = document.querySelector(".image");
let slideButton = document.querySelectorAll(".image i");
let countClick = 0;
let click=0;
let i=0;

// event and function for social media profiles links
socialProfilelist.forEach((profile)=>{
    profile.addEventListener("mouseover", (e)=> {
        profile.style.right="0%";
    });
    profile.addEventListener("mouseout", (e)=>{
        profile.style.right="-63%";
    })
})

// function for list effect when image change
const listIndexEffectForSlide = () => {
    slideList.forEach((slide)=>{
        slide.style.boxShadow=" 0px 0px 4px 10px rgba(251, 239, 239, 0.709) inset";
        slide.style.transform ="scale(1,1)";
        slideList[click].style.boxShadow=" 0px 0px 4px 10px #04E9FD inset";
        slideList[click].style.transform ="scale(1.4,1.4)";
    })
}

// function for image change
const ChangeImageAccToList = () => {
    if(click===0){
        slideImage.style.backgroundImage="url(image/banner/banner1.jpg)";
        listIndexEffectForSlide();
    }if(click===1){
        slideImage.style.backgroundImage="url(image/banner/banner3.jpg)";
        listIndexEffectForSlide();
    }else if(click===2){
        slideImage.style.backgroundImage="url(image/banner/banner4.jpg)";
        listIndexEffectForSlide();
    }else if(click===3){
        slideImage.style.backgroundImage="url(image/banner/banner5.jpg)";
        listIndexEffectForSlide();
    }else if(click===4){
        slideImage.style.backgroundImage="url(image/banner/banner6.jpg)";
        listIndexEffectForSlide();
    }else if(click===5){
        slideImage.style.backgroundImage="url(image/banner/banner8.jpg)";
        listIndexEffectForSlide();
    }else if(click===6){
        slideImage.style.backgroundImage="url(image/banner/banner11.jpg)";
        listIndexEffectForSlide();
    }else if(click===7){
        slideImage.style.backgroundImage="url(image/banner/banner12.jpg)";
        listIndexEffectForSlide();
    }else if(click===8){
        slideImage.style.backgroundImage="url(image/banner/banner14.jpg)";
        listIndexEffectForSlide();
    }else if(click===9){
        slideImage.style.backgroundImage="url(image/banner/banner22.jpg)";
        listIndexEffectForSlide();
    }else if(click===10){
        slideImage.style.backgroundImage="url(image/banner/banner24.jpg)";
        listIndexEffectForSlide();
    }else if(click===11){
        slideImage.style.backgroundImage="url(image/banner/banner25.jpg)";
        listIndexEffectForSlide();
    }else if(click===12){
        slideImage.style.backgroundImage="url(image/banner/banner29.jpg)";
        listIndexEffectForSlide();
    }else if(click===13){
        slideImage.style.backgroundImage="url(image/banner/banner33.jpg)";
        listIndexEffectForSlide();
    }else if(click===14){
        slideImage.style.backgroundImage="url(image/banner/banner35.jpg)";
        listIndexEffectForSlide();
    }else if(click===15){
        slideImage.style.backgroundImage="url(image/banner/banner36.jpg)";
        listIndexEffectForSlide();
    }else if(click===16){
        slideImage.style.backgroundImage="url(image/banner/banner40.jpg)";
        listIndexEffectForSlide();
    }else if(click===17){
        slideImage.style.backgroundImage="url(image/banner/banner44.jpg)";
        listIndexEffectForSlide();
    }
}

// events on Slide buutons when clickd
slideButton[0].addEventListener("click", (e) => {
    click--;
    // console.log(click);
    ChangeImageAccToList();
    if(click<0){
        click=17;
        ChangeImageAccToList()
    }
})
slideButton[1].addEventListener("click", (e) => {
    click++;
    console.log(click);
    ChangeImageAccToList();
    if(click>17){
        click=0;
        ChangeImageAccToList();
    }
})

// functions for ol list color and size effect 
const listIndexEffect = (i) => {
    slideList.forEach((slide)=>{
        slide.style.boxShadow=" 0px 0px 4px 10px rgba(251, 239, 239, 0.709) inset";
        slide.style.transform ="scale(1,1)";
        slideList[i].style.boxShadow=" 0px 0px 4px 10px #04E9FD inset";
        slideList[i].style.transform ="scale(1.4,1.4)";
    })
}

// events and functions for ol list when clicked image, color and size effect 
slideList.forEach((slide,i) => {
    slide.addEventListener("click", (e)=>{
        // console.log(i);
        if(i===0){
            slideImage.style.backgroundImage = "url(image/banner/banner1.jpg)";
            listIndexEffect(0);
        }if(i===1){
            slideImage.style.backgroundImage="url(image/banner/banner3.jpg)";
            i++;
            listIndexEffect(1);
        }else if(i===2){
            slideImage.style.backgroundImage="url(image/banner/banner4.jpg)";
            listIndexEffect(2);
        }else if(i===3){
            slideImage.style.backgroundImage="url(image/banner/banner5.jpg)";
            listIndexEffect(3);
        }else if(i===4){
            slideImage.style.backgroundImage="url(image/banner/banner6.jpg)";
            listIndexEffect(4);
        }else if(i===5){
            slideImage.style.backgroundImage="url(image/banner/banner8.jpg)";
            listIndexEffect(5);
        }else if(i===6){
            slideImage.style.backgroundImage="url(image/banner/banner11.jpg)";
            listIndexEffect(6);
        }else if(i===7){
            slideImage.style.backgroundImage="url(image/banner/banner12.jpg)"
            listIndexEffect(7);
        }else if(i===8){
            slideImage.style.backgroundImage = "url(image/banner/banner14.jpg)";
            listIndexEffect(8);
        }else if(i===9){
            slideImage.style.backgroundImage = "url(image/banner/banner22.jpg)";
            listIndexEffect(9);
        }else if(i===10){
            slideImage.style.backgroundImage = "url(image/banner/banner24.jpg)";
            listIndexEffect(10);
        }else if(i===11){
            slideImage.style.backgroundImage = "url(image/banner/banner25.jpg)";
            listIndexEffect(11);
        }else if(i===12){
            slideImage.style.backgroundImage = "url(image/banner/banner29.jpg)";
            listIndexEffect(12);
        }else if(i===13){
            slideImage.style.backgroundImage = "url(image/banner/banner33.jpg)";
            listIndexEffect(13);
        }else if(i===14){
            slideImage.style.backgroundImage = "url(image/banner/banner35.jpg)";
            listIndexEffect(14);
        }else if(i===15){
            slideImage.style.backgroundImage = "url(image/banner/banner36.jpg)";
            listIndexEffect(15);
        }else if(i===16){
            slideImage.style.backgroundImage = "url(image/banner/banner40.jpg)";
            listIndexEffect(16);
        }else if(i===17){
            slideImage.style.backgroundImage = "url(image/banner/banner44.jpg)";
            listIndexEffect(17);
        }else if (i===18){
            i=0;
        }
        click = i;
    })
})
    

// function for effect on corp dropdown list
let CorpLoginEffect = ()=>{
    corpBankSelect.style.border= "1px solid  rgb(0, 169, 223)";
    button.style.backgroundColor= "rgb(0, 169, 223)";
    button.style.color= "white";   
}
let hideCorpLoginEffect = () => {
    corpBankSelect.style.border= "1px solid  rgb(131, 128, 128)";
    button.style.backgroundColor= " rgb(210, 203, 203)";
    button.style.color= "#333333";
}

// event for hover effect on corp banking select option
corpBankSelect.addEventListener("mouseover", CorpLoginEffect);
corpBankSelect.addEventListener("mouseout",hideCorpLoginEffect);

// event ND FUNCTION FOr corp banking list option
corpBankSelect.addEventListener("click", () => {
    countClick++;
    if(countClick % 2 !== 0){
        menu6.style.display="block";

    }else{
        menu6.style.display="none";
        countClick=0;
    }
});

// event for more links buttons
MoreLinksButton.addEventListener("click", (e)=> {
    countClick++;
    if(countClick%2==0){
        hiddenLinks.style.display = "none";
        countClick=0;
    }else{
        hiddenLinks.style.display ="block";
    }
});

//function and event for changing inner text of select button in corp banking
for(let l=0 ; l < 3; l++){
    menu6List[l].addEventListener("click",(e) => {
        if(l===0){
            corpBankSpan.innerHTML = `${menu6List[0].innerHTML}`;
        }if(l===1){
            corpBankSpan.innerHTML = `${menu6List[1].innerHTML}`;
        }if(l===2){
            corpBankSpan.innerHTML = `${menu6List[2].innerHTML}`;
        }
    }
)};