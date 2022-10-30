function run12(){
    var inpt = document.getElementById("inputdata12").value;
    let para1= document.createElement("p");
    let para2 = document.createElement("p");

    para1.id="para1";
    para2.id="para2";
    para1.innerHTML=inpt;
    para2.innerHTML=inpt;

    document.getElementById("go12").append(para1);
    document.getElementById("go2").append(para2);
    document.getElementById("inputdata12").value=' ';
    
}
function run13(){
    var inpt = document.getElementById("inputdata13").value;
    let para1= document.createElement("p");
    let para2 = document.createElement("p");

    para1.id="para1";
    para2.id="para2";
    para1.innerHTML=inpt;
    para2.innerHTML=inpt;

    document.getElementById("go13").append(para1);
    document.getElementById("go3").append(para2);
    document.getElementById("inputdata13").value=' ';
    
}

function run2(){
    var inpt = document.getElementById("inputdata2").value;
    let para1 = document.createElement("p");
    let para2 = document.createElement("p");

    para1.id="para1";
    para2.id="para2";
    para1.innerHTML=inpt;
    para2.innerHTML=inpt;
    
    document.getElementById("go2").append(para1);
    document.getElementById("go12").append(para2);
    document.getElementById("inputdata2").value=' ';
    
}
function run3(){
    var inpt = document.getElementById("inputdata3").value;
    let para1 = document.createElement("p");
    let para2 = document.createElement("p");

    para1.id="para1";
    para2.id="para2";
    para1.innerHTML=inpt;
    para2.innerHTML=inpt;
    
    document.getElementById("go3").append(para1);
    document.getElementById("go13").append(para2);
    document.getElementById("inputdata3").value=' ';
    
}
function go1(){
  document.getElementById("div1").style.visibility="hidden";
  document.getElementById("div12").style.visibility="visible";
  document.getElementById("div3").style.visibility="visible";

  document.getElementById("div12").style.position = 'absolute';
  document.getElementById("div3").style.position = 'absolute';
  document.getElementById("div12").style.top = '2px';
  document.getElementById("div12").style.left = '0px';
  document.getElementById("div3").style.top = '2px';
  document.getElementById("div3").style.left = '400px';
  
  document.getElementById("backtomain").style.visibility="visible";
}
function go2(){
    document.getElementById("div1").style.visibility="hidden";
    document.getElementById("div13").style.visibility="visible";
    document.getElementById("div4").style.visibility="visible";

    document.getElementById("div13").style.position = 'absolute';
    document.getElementById("div4").style.position = 'absolute';
    document.getElementById("div13").style.top = '2px';
    document.getElementById("div13").style.left = '0px';
    document.getElementById("div4").style.left = '400px';
    document.getElementById("div4").style.top = '2px';

    document.getElementById("backtomain").style.visibility="visible";
  }

function back(){
    document.getElementById("div12").style.visibility="hidden";
    document.getElementById("div13").style.visibility="hidden";
    document.getElementById("div3").style.visibility="hidden";
    document.getElementById("div4").style.visibility="hidden";
    document.getElementById("div1").style.visibility="visible";
    document.getElementById("backtomain").style.visibility="hidden";
    
}
document.addEvntListener(go1);

