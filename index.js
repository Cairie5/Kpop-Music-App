//slides functionality
var counter = 1;
setInterval(function () {
    document.getElementById('image' + counter).checked = true;
    console.log(counter)
    counter++;
    if (counter > 7) {
        counter = 1;
    }
}, 3000);
