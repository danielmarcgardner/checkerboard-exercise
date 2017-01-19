
// Checkerboard!!!
for (let i = 1; i < 82; i++) {
    if (i % 2 === 0) {
      let red = document.createElement('div')
      red.innerHTML = "<div style='display:block; background-color:#FF0000;padding-bottom:11.1%;float:left;width:11.1%'>&nbsp;</div>";
      document.body.append(red);
    } else {
      let black = document.createElement('div');
      black.innerHTML = "<div style='display:block; background-color:#000000;padding-bottom:11.1%;float:left;width:11.1%'>&nbsp;</div>";
      document.body.append(black);
    }
}

// //COLOR GENERATOR!!!!!
function colorGenerator() {
  let hexOp = "abcdef1234567890";
  let hex = '#';
  for (let i = 0; i < 6; i++) {
    hex += hexOp[Math.floor(Math.random()*16)];
  }
  return hex;
}

for (let i = 1; i < 82; i++) {
      let randomColor = colorGenerator();
      let rand = document.createElement('div');
      rand.innerHTML = "<div style='display:block; background-color:"+randomColor+";padding-bottom:11.1%;float:left;width:11.1%'>&nbsp;</div>";
      document.body.append(rand);
}
