var display=document.getElementById('input')
function call(a){
    display.value+=a
}
function clear12(){
display.value=""
}
function calculate(){
    display.value=eval(display.value)
}