function displayValue(num){
    let inputbox=document.getElementById("t1");
    inputbox.value+=num;
}

function evaluateExpression(){
    let cur_value=t1.value;
    let res=eval(cur_value);
    t1.value=res;
}

function clearBox(){
    t1.value="";

}
function removeElement(){
    t1.value=t1.value.slice(0,-1);
}