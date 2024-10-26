function qs(query) {
    return document.querySelector(query);
    
}

let scrollMain = document.getElementById("main");

let allElements = document.querySelectorAll("#main>section *");

scrollMain.addEventListener("scroll", (el) => {

    el.preventDefault();



    let scrollVal = scrollMain.scrollTop;

    console.log("main scrltop -> " + scrollVal);



    //globe get bigger and becomes background
    if (scrollVal > 230) {
        qs("#globe").classList.add("globe_bigger");
        qs("nav").classList.add("nav_black");
        qs("#part_2_banner").classList.add("activated_2");
    }else{
        qs("#globe").classList.remove("globe_bigger");
        qs("nav").classList.remove("nav_black");
        qs("#part_2_banner").classList.remove("activated_2");
    }

    //question appears then becomes white colored
    if (scrollVal > 160) {
        qs("#part_2_banner").classList.add("activated");
    }else{
        qs("#part_2_banner").classList.remove("activated");        
    }

   

    allElements.forEach((el) => controlEl(el));

    function controlEl(el) {
        var elDistance = window.pageYOffset + el.getBoundingClientRect().top;
        var threshold = 47; // Eşik değeri (değiştirebilirsiniz);


        // Elementin ilk yüklenme durumunu kontrol etmek için bir bayrak kullanıyoruz
        if (!el.dataset.initialized) {
            el.dataset.initialized = true;
            el.classList.remove("opacityZero"); // İlk yüklenme durumunda opaklığı 1 yapıyoruz
        }

        if (elDistance < threshold) {
            el.classList.add("opacityZero"); // Aşağı kaydırıldığında opaklığı 0 yapıyoruz
        } else {
            el.classList.remove("opacityZero"); // Yukarı kaydırıldığında opaklığı 1 yapıyoruz
        }
    }
});




// menu toggle function

function menuToggle() {
    let menuElement = document.getElementById("menu");
    let main = document.getElementById("main");

    menuElement.classList.toggle("menu_open");
    main.classList.toggle("main_disabled");
}