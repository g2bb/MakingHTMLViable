function vibrate(){
    var time = document.getElementById('sec').value
    window.navigator.vibrate(time);
    alert(time);
}
