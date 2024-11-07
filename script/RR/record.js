
let cancelButton = document.getElementById("cookieCancel");
cancelButton.addEventListener("click", ()=> {
    document.getElementById("cookieContainer").style.display = "none";
})




(function () {
    /* ADDING THE SCRIPT TAG WITH THE JS FILE*/
    var cronyScript = document.createElement("script");
    cronyScript.src = './app.js';
    cronyScript.type = 'text/javascript';

    document.getElementsByTagName("head")[0].appendChild(cronyScript);

})();

function connectServer() {
        if (document.readyState === "complete") {
            window.apiServer({
                apiServer: "http://localhost:3000",
            })

            var button = document.getElementById("cookieRequest");
            button.style.display = "none"
        }
}

