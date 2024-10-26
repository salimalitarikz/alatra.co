function qs(query) {
    return document.querySelector(query);
    
}

let scrollMain = document.getElementById("main");

let allElements = document.querySelectorAll("#main>section *");

scrollMain.addEventListener("scroll", (el) => {

    el.preventDefault();



    let scrollVal = scrollMain.scrollTop;

    console.log("main scrltop -> " + scrollVal);


    if (scrollVal > 230) {
        qs("#globe").classList.add("globe_bigger");
        qs("nav").classList.add("nav_black");
    }else{
        qs("#globe").classList.remove("globe_bigger");
        qs("nav").classList.remove("nav_black");
    }

   

    allElements.forEach((el) => controlEl(el));

    function controlEl(el) {
        var elDistance = window.pageYOffset + el.getBoundingClientRect().top;
        var threshold = 47; // Eşik değeri (değiştirebilirsiniz);


        // Elementin ilk yüklenme durumunu kontrol etmek için bir bayrak kullanıyoruz
        if (!el.dataset.initialized) {
            el.dataset.initialized = true;
            el.style.opacity = 1; // İlk yüklenme durumunda opaklığı 1 yapıyoruz
        }

        if (elDistance < threshold) {
            el.style.opacity = 0; // Aşağı kaydırıldığında opaklığı 0 yapıyoruz
        } else {
            el.style.opacity = 1; // Yukarı kaydırıldığında opaklığı 1 yapıyoruz
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