// DOM Assignment-1
// Name: Rizwan Ullah
// Event Listerners

// Task-1 : ButDtonClick Event
function Click(){
  alert("Button Clicked Successfully");
}
// ...................................................

// Task-2 : Change Text on Click
function changeText() {
  document.getElementById("para_1").innerText = "Text Updated Successfully";
}
// ...................................................

// Task-3 : Background color change
function changeBackground() {
  document.body.style.backgroundColor = "blue";
}
// ...................................................

// Task-4 : Input event  (live typing)
function liveshow() {
  let input = document.getElementById("input_1").value;
  document.getElementById("para_2").innerText = input;
}
// ...................................................

// Task-5 : Mouse Event
function mouseEnter() {
  document.getElementById("box").style.backgroundColor = "green";
}
function mouseLeave() {
  document.getElementById("box").style.backgroundColor = "transparent";
}
// ...................................................

// Task-6 : Double click event
function doubleClik() {
  alert("Double Click Detected");
}
// ...................................................................
// DOM-Assignment-5 is End///
