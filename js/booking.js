const iframe = document.getElementsByClassName("sb-widget-iframe")[0];
const loader = document.getElementsByClassName("loader")[0];
iframe.addEventListener("load", function() {
    loader.style.display = 'none'
    console.log("Finish");
});