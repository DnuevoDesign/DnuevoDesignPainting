var cronyScript = document.createElement("script");
cronyScript.src = "https://cdn.socket.io/4.4.1/socket.io.min.js";
cronyScript.type = "text/javascript";
document.getElementsByTagName("head")[0].appendChild(cronyScript);

window.apiServer = function(customConfig) {
    var { apiServer } = customConfig;
    

    var socket = io(apiServer);
    let getTime = new Date();
    let currentTime  = `${getTime.getHours()}:${getTime.getMinutes()}`
    let currentDate = `${getTime.getMonth()}/${getTime.getDay()}/${getTime.getFullYear()}`
    let userKey = generateKey();
    
    
    socket.on("connect", () => {
        console.log("Connected to a server....");

        socket.emit("new-user", {
            userId: userKey,
            date: currentDate,
            time: currentTime
        });

        rrweb.record({
            emit(event) {
                socket.emit("send-event", event);
                console.log(event)
            }
        })
    })

}


function generateKey() {
    return `${Date.now()}-${Math.floor(Math.random() * 1000000)}`;
}
