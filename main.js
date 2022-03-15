var fNum=document.getElementById('fInp');
var sNum=document.getElementById('sInp');
var operator=document.getElementById('operator');
var answer=document.getElementById('answer');
function zay() {
  var fNum=document.getElementById('fInp').value;
var sNum=document.getElementById('sInp').value;
var operator=document.getElementById('operator').value;
var status1=true;
var status2=true;
var status3=true;

// ok or not  
if(fNum==''||fNum==null){
  document.getElementById("fError").style.display = "block";
  status1=false;
}else{
  document.getElementById("fError").style.display ='none';
  status1=true;
}

if (sNum == '' || sNum == null) {
  document.getElementById("sError").style.display = "block";
  status2=false;
} else {
  document.getElementById("sError").style.display = 'none';
  status2=true;
}

if (operator == '' || operator == null) {
  document.getElementById("tError").style.display = "block";
  status3=false;
} else {
  document.getElementById("tError").style.display = 'none';
  status3=true;
}

if(status1&&status2&&status3) {

if(operator == 'plus'){
var result=+fNum+ +sNum;

}else if(operator=='minus'){
  var result=+fNum- +sNum;
}else if (operator=='multi') {
  var result=+fNum* +sNum;
}else if (operator=='division') {
 var result=+fNum/ +sNum; 
}

answer.innerHTML=result;
}
}

function victor() {
  fNum.value='';
  sNum.value='';
  operator.value='';
  var status1 = true;
  var status2 = true;
  var status3 = true;
  document.getElementById("fError").style.display = "none";
  document.getElementById("sError").style.display = "none";
  document.getElementById("tError").style.display = "none";
  answer.innerHTML='';
}
