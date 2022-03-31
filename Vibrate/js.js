function vibrate(){
    var time = document.getElementsByName('seconds').value
    window.navigator.vibrate(time);
    alert(time);
}
