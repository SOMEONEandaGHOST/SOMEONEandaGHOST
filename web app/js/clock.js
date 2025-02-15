function time() {
    var now = new Date();
    var year = now.getFullYear();
    var month = now.getMonth() + 1;
    var day = now.getDate();
    var hour = now.getHours();
    var minute = now.getMinutes();
    var second = now.getSeconds();

    var clock = document.getElementById("clock");
    clock.innerHTML = year + "-" + month + "-" + day + " " + hour + ":" + minute + ":" + second;
}

time();
setInterval(time, 1000);