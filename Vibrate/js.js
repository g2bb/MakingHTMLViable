function vibrate(){
    time = document.getElementsByName('seconds').value
    window.navigator.vibrate(time);
    alert("bzzzz");
}
