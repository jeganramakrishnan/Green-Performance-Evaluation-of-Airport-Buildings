let button = document.getElementById("btn");
button.addEventListener("click", () => {
  let arr = [];
  let result = document.getElementById("result");
  result.style.visibility = "visible";
  arr.push(document.getElementById("f1").value);
  arr.push(document.getElementById("f2").value);
  arr.push(document.getElementById("f3").value);
  arr.push(document.getElementById("f4").value);
  arr.push(document.getElementById("f5").value);
  arr.push(document.getElementById("f6").value);
  arr.push(document.getElementById("f7").value);
  arr.push(document.getElementById("f8").value);
  arr.push(document.getElementById("f9").value);
  arr.push(document.getElementById("f10").value);
  arr.push(document.getElementById("f11").value);
  arr.push(document.getElementById("f12").value);
  arr.push(document.getElementById("f13").value);
  arr.push(document.getElementById("f14").value);
  arr.push(document.getElementById("f15").value);
  arr.push(document.getElementById("f16").value);
  arr.push(document.getElementById("f17").value);

  //   Check all the conditions and display a section at the bottom
  //rule1
  if (
    (arr[3] <= 408614864.276) && (arr[9] > 7581.336) && (arr[2] <= 999954.513) && (arr[2] > 21258.5) && (arr[5] > 138264.49) && (arr[4] <= 16271316.922) && (arr[10] <= 82.477) 

  ) {
    result.innerText = "Your airport's green performance is rated High.";
    return;
  } 
  //rule2
  else if (
    (arr[3] > 408614864.276) && (arr[13] > 9568.0) 
  ) {
    result.innerText = " 2 Your airport's green performance is rated Low.";
    return;
  } 
  //rule3
  else if (
    (arr[3] <= 408614864.276) && (arr[9] <= 7581.336) && (arr[14] <= 163826.723) && (arr[8] > 167514.101) 

  ) {
    result.innerText = "Your airport's green performance is rated Medium.";
    return;
  }
 //rule4
  else if (
    (arr[3] <= 408614864.276) && (arr[9] <= 7581.336) && (arr[14] > 163826.723) && (arr[2] > 105942.502) && (arr[2] <= 480327.995) && (arr[6] > 58477.148) && (arr[7] <= 2766965.054) && (arr[15] > 52.952) 

  ) {
    result.innerText = "Your airport's green performance is rated Low.";
    return;
  }
  //rule5
  else if (
    (arr[3] <= 408614864.276) && (arr[9] > 7581.336) && (arr[2] <= 999954.513) && (arr[2] > 21258.5) && (arr[5] > 138264.49) && (arr[4] > 16271316.922) && (arr[9] <= 10564.2)

    
  ) {
    result.innerText = "Your airport's green performance is rated High.";
    return;
  }
  
//rule 6
  else if (
    (arr[3] <= 408614864.276) && (arr[9] <= 7581.336) && (arr[14] > 163826.723) && (arr[2] <= 105942.502) && (arr[3] <= 82682631.721) && (arr[14] > 175007.339) && (arr[10] <= 98.769) 

  ) {
    result.innerText = "Your airport's green performance is rated Medium.";
    return;
  }
//rule 7
  else if (
    (arr[3] <= 408614864.276) && (arr[9] <= 7581.336) && (arr[14] > 163826.723) && (arr[2] <= 105942.502) && (arr[3] > 82682631.721) 

  ) {
    result.innerText = "Your airport's green performance is rated High.";
    return;
  }
  
//rule 8
  else if (
    (arr[3] <= 408614864.276) && (arr[9] > 7581.336) && (arr[2] <= 999954.513) && (arr[2] > 21258.5) && (arr[5] > 138264.49) && (arr[4] > 16271316.922) && (arr[9] > 10564.2) && (arr[6] <= 104434.597) && (arr[14] <= 689689.731) 
  ) {
    result.innerText = "Your airport's green performance is rated Low.";
    return;
  }

  //rule 9
  else if (
    (arr[3] <= 408614864.276) && (arr[9] <= 7581.336) && (arr[14] > 163826.723) && (arr[2] > 105942.502) && (arr[2] > 480327.995) && (arr[7] > 717669.357) 


  ) {
    result.innerText = "Your airport's green performance is rated High.";
    return;
  }
  //rule 10
  else if (
    (arr[3] <= 408614864.276) && (arr[9] > 7581.336) && (arr[2] > 999954.513) 



  ) {
    result.innerText = "Your airport's green performance is Low.";
    return;
  }

  //rule11
  else if (
    (arr[3] <= 408614864.276) && (arr[9] > 7581.336) && (arr[2] <= 999954.513) && (arr[2] > 21258.5) && (arr[5] > 138264.49) && (arr[4] > 16271316.922) && (arr[9] > 10564.2) && (arr[6] > 104434.597) && (arr[11] <= 1755.301) 
  ){
    result.innerText = "Your airport's green performance is rated High.";
    return;
  }
//rule 12

else if (
  (arr[3] <= 408614864.276) && (arr[9] <= 7581.336) && (arr[14] > 163826.723) && (arr[2] > 105942.502) && (arr[2] <= 480327.995) && (arr[6] <= 58477.148) && (arr[13] > 1779.5) 

 
) {
  result.innerText = "Your airport's green performance is rated Medium.";
  return;
}
//rule13
else if (
  (arr[3] <= 408614864.276) && (arr[9] <= 7581.336) && (arr[14] > 163826.723) && (arr[2] > 105942.502) && (arr[2] > 480327.995) && (arr[7] <= 717669.357) && (arr[13] <= 104091.472)  

  ) {
  result.innerText = "Your airport's green performance is rated Low.";
  return;
}

//rule14
else if (
  (arr[3] <= 408614864.276) && (arr[9] > 7581.336) && (arr[2] <= 999954.513) && (arr[2] <= 21258.5) 
  ) {
  result.innerText = "Your airport's green performance is rated Medium.";
  return;
}

//rule15
else if (
  (arr[3] <= 408614864.276) && (arr[9] <= 7581.336) && (arr[14] > 163826.723) && (arr[2] > 105942.502) && (arr[2] <= 480327.995) && (arr[6] > 58477.148) && (arr[7] > 2766965.054) ) {
  result.innerText = "Your airport's green performance is rated Medium.";
  return;
}


//rule16
else if (
  (arr[3] <= 408614864.276) && (arr[9] > 7581.336) && (arr[2] <= 999954.513) && (arr[2] > 21258.5) && (arr[5] <= 138264.49) && (arr[2] > 89386.499) 

  ) {
  result.innerText = "Your airport's green performance is rated Low.";
  return;
}


  //rule17
  else if (
    (arr[3] <= 408614864.276) && (arr[9] <= 7581.336) && (arr[14] > 163826.723) && (arr[2] <= 105942.502) && (arr[3] <= 82682631.721) && (arr[14] <= 175007.339) && (arr[7] <= 296964.573)  

    ){
    result.innerText = "Your airport's green performance is rated High.";
    return;
  }
//rule 18

else if (
  (arr[3] <= 408614864.276) && (arr[9] <= 7581.336) && (arr[14] > 163826.723) && (arr[2] > 105942.502) && (arr[2] <= 480327.995) && (arr[6] <= 58477.148) && (arr[13] <= 1779.5) 

) {
  result.innerText = "Your airport's green performance is rated Low.";
  return;
}
//rule19
else if (
  (arr[3] <= 408614864.276) && (arr[9] <= 7581.336) && (arr[14] > 163826.723) && (arr[2] <= 105942.502) && (arr[3] <= 82682631.721) && (arr[14] <= 175007.339) && (arr[7] > 296964.573) ) {
  result.innerText = "Your airport's green performance is rated Low.";
  return;
}

//rule20
else if (
  (arr[3] <= 408614864.276) && (arr[9] > 7581.336) && (arr[2] <= 999954.513) && (arr[2] > 21258.5) && (arr[5] > 138264.49) && (arr[4] > 16271316.922) && (arr[9] > 10564.2) && (arr[6] <= 104434.597) && (arr[14] > 689689.731) ) {
  result.innerText = "Your airport's green performance is rated Medium.";
  return;
}

//rule21
else if (
  (arr[3] <= 408614864.276) && (arr[9] <= 7581.336) && (arr[14] > 163826.723) && (arr[2] <= 105942.502) && (arr[3] <= 82682631.721) && (arr[14] > 175007.339) && (arr[10] > 98.769)

) {
  result.innerText = "Your airport's green performance is rated High.";
  return;
}


//rule22
else if (
  (arr[3] <= 408614864.276) && (arr[9] <= 7581.336) && (arr[14] > 163826.723) && (arr[2] > 105942.502) && (arr[2] > 480327.995) && (arr[7] <= 717669.357) && (arr[13] > 104091.472) 

  ) {
  result.innerText = "Your airport's green performance is rated High.";
  return;
}

//rule 23

else if (
  (arr[3] <= 408614864.276) && (arr[9] <= 7581.336) && (arr[14] > 163826.723) && (arr[2] > 105942.502) && (arr[2] <= 480327.995) && (arr[6] > 58477.148) && (arr[7] <= 2766965.054) && (arr[15] <= 52.952) 
 
) {
  result.innerText = "Your airport's green performance is rated Medium.";
  return;
}
//rule24
else if (
  (arr[3] > 408614864.276) && (arr[13] <= 9568.0) 
  ) {
  result.innerText = "Your airport's green performance is rated Medium.";
  return;
}

//rule25
else if (
  (arr[3] <= 408614864.276) && (arr[9] > 7581.336) && (arr[2] <= 999954.513) && (arr[2] > 21258.5) && (arr[5] <= 138264.49) && (arr[2] <= 89386.499) 

) {
  result.innerText = "Your airport's green performance is rated High.";
  return;
}

//rule26
else if (
  (arr[3] <= 408614864.276) && (arr[9] > 7581.336) && (arr[2] <= 999954.513) && (arr[2] > 21258.5) && (arr[5] > 138264.49) && (arr[4] <= 16271316.922) && (arr[10] > 82.477) ) {
  result.innerText = "Your airport's green performance is rated Low.";
  return;
}


//rule27
else if (
  (arr[3] <= 408614864.276) && (arr[9] > 7581.336) && (arr[2] <= 999954.513) && (arr[2] > 21258.5) && (arr[5] > 138264.49) && (arr[4] > 16271316.922) && (arr[9] > 10564.2) && (arr[6] > 104434.597) && (arr[11] > 1755.301) 
) {
  result.innerText = "Your airport's green performance is rated Low.";
  return;
}


//rule28
else if (
  (arr[3] <= 408614864.276) && (arr[9] <= 7581.336) && (arr[14] <= 163826.723) && (arr[8] <= 167514.101)  && (arr[3] > 0) ){
  result.innerText = "9 Your airport's green performance is rated Low.";
  return;
}
else {
    result.innerText = "No label";
    console.log('Null')
    return;
  }
});
