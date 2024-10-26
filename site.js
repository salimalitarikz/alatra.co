

let scrollMain = document.getElementById("main");

let allElements = document.querySelectorAll("#main>section *");

scrollMain.addEventListener("scroll", (el) => {

    el.preventDefault();



    let scrollVal = scrollMain.scrollTop;

    

    // console.log(scrollVal);
   

    allElements.forEach((el) => controlEl(el));

    function controlEl(el) {
        var elDistance = window.pageYOffset + el.getBoundingClientRect().top;
        var threshold = 47; // Eşik değeri (değiştirebilirsiniz)

        console.log(elDistance);

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