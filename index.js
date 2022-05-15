
var col ;
var infla;
var state = ["Andaman & Nicobar","Andhra Pradesh","Assam","Bihar","Chandigarh","Chhattisgarh","Dadra & Nagar Haveli","Daman & Diu","Delhi","Goa","Gujarat","Haryana","Himachal Pradesh","Jammu & Kashmir","Jharkhand","Karnataka","Kerala","Lakshadweep","Madhya Pradesh","Maharashtra","Manipur","Meghalaya","Mizoram","Nagaland","Odisha","Puducherry","Punjab","Rajasthan","Sikkim","Tamil Nadu","Telangana","Tripura","Uttar Pradesh","Uttarakhand","West Bengal"];
var cpi = [6.3,9,8.5,7.3,4.8,8,4.2,6.9,3.3,6.9,5.9,5.9,5.2,6.3,6,5.8,6,11.1,7.6,6.8,6.7,9.2,10.3,4.8,7.9,8.4,5.3,4.4,7.1,7.5,8.7,9.5,6.1,8.1,8.7];
var state1 = ["Kerala","Chandigarh","Goa","Lakshadweep","Delhi","Andaman and Nicobar Islands","Puducherry","Himachal Pradesh","Punjab","Sikkim","Tamil Nadu","Daman and Diu","Haryana","Mizoram","Maharashtra","Manipur","Jammu and Kashmir","Uttarakhand","Karnataka","Nagaland","Gujarat","Telangana","Dadra and Nagar Haveli","Arunachal Pradesh","Tripura","Meghalaya","Andhra Pradesh","West Bengal","Rajasthan","Assam","Chhattisgarh","Odisha","Madhya Pradesh","Jharkhand","Uttar Pradesh","Bihar"];
var hdi =[0.782,0.776,0.763,0.751,0.746,0.741,0.74,0.725,0.724,0.717,0.709,0.708,0.708,0.704,0.697,0.697,0.688,0.683,0.683,0.679,0.672,0.669,0.663,0.661,0.658,0.656,0.649,0.641,0.628,0.613,0.611,0.606,0.603,0.599,0.596,0.574];
var hapi =[3.57,3.52,3.47,3.44,3.43,3.42,3.41,3.41,3.41,3.41,3.4,3.4,3.39,3.38,3.37,3.37,3.36,3.36,3.36,3.36,3.35,3.34,3.34,3.32,3.31,3.3,3.3,3.3,3.29,3.27,3.26,3.25,3.25,3.25,3.22,3.19];
var state2= ["Mizoram","Punjab","Andaman & Nicobar","Puducherry","Sikkim","Gujarat","Arunachal Pradesh","Lakshadweep","Telangana","Uttar Pradesh","Andhra Pradesh","Maharashtra","Tripura","Kerala","Jharkhand","Kamataka","Haryana","Ladakh","Manipur","West Bengal","Himachal Pradesh","Assam","Delhi","Chandigarh","Bihar","Dadra & Nagar Haveli and Daman & Diu","Jammu & Kashmir","Madhya Pradesh","Tamil Nadu","Nagaland","Rajasthan","Goa","Meghalaya","Odisha","Uttarakhand","Chhattisgarh"];

function uhh() {
  if ($("input")[0].value > 0 && $("input")[2].value > 0 && $("input")[1].value > 0 && $("select")[1].value != 0 && $("select")[1].value != 1) {
      uh();
  }else {
    alert("please enter values");
  }
}

function uh() {
$("#overlay").addClass("overlay");
$(".result").removeClass("blur");
var infla = (map($("select")[1].value)- map($("select")[0].value))/map($("select")[0].value);

 if (infla < 0) {
  var col = (1-(Math.abs(infla))) * ($("input")[2].value);
 }else {
  var col = (infla+1) * $("input")[2].value;

 }

var Sa1 = $("input")[0].value-$("input")[2].value;
var Sa2 = $("input")[1].value-col;
var SaPrec =  Sa2-Sa1;
SaPrec =  (SaPrec/Sa1);
$(".sal").text((SaPrec*100).toPrecision(3) + "%");
HPI();
HaPi();
}

function HPI () {
  var Sa01 = map1($("select")[0].value);
  console.log(Sa01)
  var Sa02 = map1($("select")[1].value);
    console.log(Sa02)
  var Sa0Prec   = (((Sa02-Sa01)/Sa01)*100).toPrecision(2);
  $(".hdi").text(Sa0Prec+"%");
}

function HaPi () {
  var Sa_1 = map2($("select")[0].value);
  console.log(Sa_1)
  var Sa_2 = map2($("select")[1].value);
    console.log(Sa_2)
  var Sa_Prec   = (((Sa_2-Sa_1)/Sa_1)*100).toPrecision(2);
  $(".hap").text(Sa_Prec+"%");
}


 function map(input) {
   for (var i = 0; i < state.length; i++) {
     if (state[i] >= input) {
       return cpi[i];
     }
   }
 }

 function map1(input) {
   for (var i = 0; i < state1.length; i++) {
     if (state1[i] >= input) {
       return hdi[i];
     }
   }
 }

 function map2(input) {
   for (var i = 0; i < state2.length; i++) {
     if (state2[i] == input) {
       return hapi[i];
     }
   }
 }
