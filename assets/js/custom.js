$(function(){
    /**
     * @header_search_area스크롤이벤트
     */
    let header = document.querySelector(".header");
    let headerHeight = header.offsetHeight;

    window.onscroll = function () {
    let windowTop = window.scrollY;
        if (windowTop >= headerHeight) {
            header.classList.add("fixed");
        } else {
            header.classList.remove("fixed");
        }
    };
})