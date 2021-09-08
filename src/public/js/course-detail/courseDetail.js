

function scrollComment() {
    const lassonVideo = document.querySelector('.lesson-video');
    const blockComment = document.querySelector('.content-bottom');
    var videoheight = lassonVideo.offsetHeight;
    var mtBlockComment = blockComment.offsetTop
    blockComment.onscroll = function() {
        var newHeight = videoheight - blockComment.scrollTop > 200 ?  videoheight - blockComment.scrollTop + "px" : "200px";
        var newmt = mtBlockComment - blockComment.scrollTop > 200 ? mtBlockComment - blockComment.scrollTop + "px" : "200px";
        lassonVideo.style.height = newHeight;
        blockComment.style.marginTop = newmt;
    }
}

function changeHeader() {
    var url = window.location.href;
    var header = document.querySelector('.views_header');
    var footer = document.querySelector('.footer');
    if(url.includes("/courses/")) {
        header.style.display = "none";
        header.style.height = "0";
        footer.style.display = "none"
        footer.style.height = "0"
    }
}

function main() {   
    if(window.location.href.includes("/courses/")) {
        scrollComment();
    }
    changeHeader();
}
main();

export default main;

