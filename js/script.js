$(document).ready(function() {

    // 管理匯入資訊
    function fetchAndInsertContent(url, targetId) {
        $.get(url, function(data) {
            $("#" + targetId).html(data);
        });
    }
    fetchAndInsertContent("header.html", "header")
    fetchAndInsertContent("footer.html", "footer")
    
    // swiper (index part)
    let imagePaths = []
    let numOfImages = 10 

    for (let i = 1; i <= numOfImages; i++) {
        let imagePath = `images/picslide/${i < 10 ? '0' : ''}${i}.png`
        imagePaths.push(imagePath)
    }
    

    let swiperContainer = $("#mySwiper")
    for (let i = 0; i < imagePaths.length; i++) {
        let swiperSlide = $("<swiper-slide></swiper-slide>")
        let imgSrc = $("<img src='" + imagePaths[i] + "' />")
        swiperSlide.append(imgSrc) 
        swiperContainer.append(swiperSlide)
    }
})
