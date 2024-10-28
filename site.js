function qs(query) {
    return document.querySelector(query);
    
}

let scrollMain = document.getElementById("main");

let allElements = document.querySelectorAll("#main>section *");


const snapValues = [400, 500, 600, 700,800]; // Birden fazla snap noktası
const scrollPause = 500; // Duraklama süresi (ms)
let isPaused = false; // Duraklama kontrolü
let hasSnapped = Array(snapValues.length).fill(false); // Her snap için kontrol dizisi   


function snapScroll(snapValue, index) {
    // Snap işlemleri
    if (!hasSnapped[index] && scrollMain.scrollTop >= snapValue && !isPaused) {
        isPaused = true; // Duraklamayı başlat
        hasSnapped[index] = true; // Snap durumunu kaydet

        console.log("sval: " + snapValue + " sindex: " + index + " hassnap: " +  hasSnapped[index]);

        // Kaydırmayı geçici olarak durdur
        const currentScrollPosition = scrollMain.scrollTop;
        scrollMain.style.overflowY = 'hidden'; // Kaydırmayı geçici olarak kapat
        scrollMain.scrollTop = currentScrollPosition; // Sabit konumda tut

        console.log("Snap gerçekleşti: ", snapValue);

        // Belirli bir süre sonra kaydırmayı yeniden aç
        setTimeout(() => {
        scrollMain.style.overflowY = 'auto'; // Kaydırmayı yeniden aç
        isPaused = false; // Duraklamayı kapat
        console.log("Snap sona erdi: ", snapValue);
        // hasSnapped[index] = true; // Böylece kullanıcı geriye kaydırırsa tekrar çalışır
        }, scrollPause);
    }

    // Eğer pozisyon snap konumunu geçmişse ve isPaused değilse hasSnapped'i sıfırla
    if ((scrollMain.scrollTop + 10) < snapValue && !isPaused) {
        hasSnapped[index] = false; // Böylece kullanıcı geriye kaydırırsa tekrar çalışır
    }
}


scrollMain.addEventListener("scroll", (el) => {

    el.preventDefault();



    let scrollVal = scrollMain.scrollTop;

    console.log("main scrltop -> " + scrollVal);



    // globe get bigger and becomes background
    if (scrollVal > 360) {
        qs("#globe").classList.add("globe_bigger");
        qs("nav").classList.add("nav_black");
        qs("#part_2_banner").classList.add("activated_2");
    }else{
        qs("#globe").classList.remove("globe_bigger");
        qs("nav").classList.remove("nav_black");
        qs("#part_2_banner").classList.remove("activated_2");
        qs("#part_2_c_1").classList.remove("activated");
    }

    // part 2 animations

    if (scrollVal > 400) {
        qs("#part_2_c_1").classList.add("activated");
    }else{
        qs("#part_2_c_1").classList.remove("activated");
    }

    if (scrollVal > 500) {
        qs("#part_2_c_1").classList.add("passivated");
        qs("#part_2_c_2").classList.add("activated");
        
    }else{
        qs("#part_2_c_1").classList.remove("passivated");
        qs("#part_2_c_2").classList.remove("activated");
    }

    if (scrollVal > 600) {
        qs("#part_2_c_2").classList.add("passivated");
        qs("#part_2_c_3").classList.add("activated");
        
    }else{
        qs("#part_2_c_2").classList.remove("passivated");
        qs("#part_2_c_3").classList.remove("activated");
    }
    if (scrollVal > 700) {
        qs("#part_2_c_3").classList.add("passivated");
        qs("#part_2_c_4").classList.add("activated");
        
    }else{
        qs("#part_2_c_3").classList.remove("passivated");
        qs("#part_2_c_4").classList.remove("activated");
    }
    if (scrollVal > 800) {
        qs("#part_2_c_4").classList.add("passivated");
        
    }else{
        qs("#part_2_c_4").classList.remove("passivated");
    }



    // question appears then becomes white colored
    if (scrollVal > 200) {
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

    // snapScroll(400);

    
    console.log(hasSnapped[1]);
    

   
    if (!isPaused) { // Eğer duraklama yoksa
        snapValues.forEach((snapValue, index) => {
        snapScroll(snapValue, index);
        });
        console.log("dayum");
    }



    // function snapScroll(snapValue) {
    //      // snap things

    //     if (!hasSnapped && scrollVal >= snapValue && !isPaused) {
    //         isPaused = true; // Duraklamayı başlat
    //         hasSnapped = true; // Snap durumunu kaydet

    //         // Kaydırmayı geçici olarak durdur
    //         const currentScrollPosition = scrollVal;
    //         scrollMain.style.overflowY = 'hidden'; // Kaydırmayı geçici olarak kapat
    //         scrollMain.scrollTop = currentScrollPosition; // Sabit konumda tut

    //         console.log("done");
        
    //         // Belirli bir süre sonra kaydırmayı yeniden aç
    //         setTimeout(() => {
    //             scrollMain.style.overflowY = 'auto'; // Kaydırmayı yeniden aç
    //             isPaused = false; // Duraklamayı kapat
    //         }, scrollPause);
    //     }

    //     // Eğer pozisyon snap konumunu geçmişse hasSnapped'i sıfırla
    //     if (scrollMain.scrollTop < snapValue) {
    //         hasSnapped = false; // Böylece kullanıcı geriye kaydırırsa tekrar çalışır
    //     }
    // }
    

   


});

// menu toggle function

function menuToggle() {
    let menuElement = document.getElementById("menu");
    let main = document.getElementById("main");

    menuElement.classList.toggle("menu_open");
    main.classList.toggle("main_disabled");
}