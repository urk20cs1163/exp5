function strg() {
    var s = document.getElementById('inp').value;
    arr = s.split(" ");

    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[i].length > arr[j].length) {
                temp = arr[i];
                arr[i] = arr[j];
                arr[j] = temp;
            }
        }
    }
    document.getElementById('sh').innerHTML = arr[0];
    document.getElementById('lg').innerHTML = arr[arr.length - 1];
}

function calculate(){
    var w = parseFloat(document.getElementById('weight').value);
    var h = parseFloat(document.getElementById('height').value);

    var bmi = w/(h*h);

    document.getElementById('score').innerHTML = bmi;

    if (bmi<18){
        document.getElementById('type').innerHTML = "Underweight";
    } else if (bmi>=18 || bmi<=25){
        document.getElementById('type').innerHTML = "Normal";
    } else if (bmi>=26 || bmi<=30){
        document.getElementById('type').innerHTML = "Overweight";
    }else if (bmi>30){
        document.getElementById('type').innerHTML = "Obese";
    }else{
        document.getElementById('type').innerHTML = "Please enter correct inputs!";
    }
}
function grow() {   
    var r = parseInt(document.getElementById("rows").value);
    var c = parseInt(document.getElementById("cols").value);
    var l = ["img/apple.jpg", "img/orange.jpg"];
    var garden = document.getElementById("garden");
    for (let i = 0; i < r; i++) {
        for (let j = 0; j < c; j++) {
            var fruit = Math.floor(Math.random() * 2);
            var img = '<img src=' + l[fruit] + ' width = "150px" height ="150px"></img>';
            garden.innerHTML += img;
        }
        garden.innerHTML += "<br>";
    }
}

function convert(){
    var m = parseFloat(document.getElementById('data').value);
    var f = document.getElementById('from').value;
    var t = document.getElementById('to').value;
    
    if (f=="US Dollar" && t=="Indian Rupee"){
        document.getElementById('answer').innerHTML = (m*79.97);
    } else if (f=="Indian Rupee" && t=="US Dollar"){
        document.getElementById('answer').innerHTML = (m*0.013);
    } else if ((f=="US Dollar" && t=="US Dollar") || (f=="Indian Rupee" && t=="Indian Rupee")){
        document.getElementById('answer').innerHTML = "Select different currencies"
    }
}

function flip() {
    var img = document.getElementById("coin");
    var head = document.getElementById("num_heads");
    var tail = document.getElementById("num_tails");
    var h = parseInt(head.innerHTML);
    var t = parseInt(tail.innerHTML);
    var lst = ["head.jpg", "tail.jpg"];
    var s = Math.floor(Math.random()*2);
    if (lst[s]==lst[0]) {
        head.innerHTML = h+1;
    } else {
        tail.innerHTML = t+1;
    };
    img.src = "img/"+lst[s];
}

function cake(){
    var s = document.getElementById('small').value;
    var m = document.getElementById('medium').value;
    var l = document.getElementById('large').value;

    var total = (s*100) + (m*200) + (l*400);
    var amt_tax = ((9/100)*total) + total;

    var cc = document.querySelector('input[name="tip"]:checked').value;
    var tip = ((cc/100)*amt_tax);
    var total_cost = amt_tax + tip;

    document.getElementById('price').innerHTML = total_cost + "rupees";

    document.getElementById('c1').innerHTML = total + "rupees";
    document.getElementById('c2').innerHTML = tip + "rupees";
}