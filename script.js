var wrapperEle = document.body.querySelector(".wrapper");
var numbers=[-30, 14, 66, 21, 72, -4];

var elements = [];

function createLoop(str){
  var ele = document.createElement("div");
  ele=document.createElement("h3");

  ele.addEventListener("click", function(){
  ele.count++;
  })
  if(str>=50){
    ele.innerHTML="The number is "+" and is greater than 50"; 
  }else if(str==14){
    ele.innerHTML="The number is "+14+" and is equal to 14";
  }else if(str<=0){
    ele.innerHTML="The number is "+ " and is below 0";
  }else{
    ele.innerHTML="The number is ";
  }
  
  
  createLoop.prototype.countNum=function(){
 ele.numbers++;
    ele.innerHTML = ele+0;
};


wrapperEle.appendChild(ele);
  

}

for(var i=0; i<numbers.length; i++){
elements.push(new createLoop(numbers[i]));
}