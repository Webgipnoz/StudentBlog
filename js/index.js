filterSelection("all");
function filterSelection(c) {
  var x, i;
  x = document.getElementsByClassName("post-box");
  if (c == "all") c = "";
  for (i = 0; i < x.length; i++) {
    RemoveClass(x[i], "show");
    if (x[i].className.indexOf(c) > -1) AddClass(x[i], "show");
  }
}

function AddClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    if (arr1.indexOf(arr2[i]) == -1) {
      element.className += " " + arr2[i];
    }
  }
}

function RemoveClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    while (arr1.indexOf(arr2[i]) > -1) {
      arr1.splice(arr1.indexOf(arr2[i]), 1);
    }
  }
  element.className = arr1.join(" ");
}

var postFilter = document.getElementById("postFilterId");
var filter = postFilter.getElementsByClassName("filter-item");
for (var i = 0; i < filter.length; i++) {
  filter[i].addEventListener("click", function () {
    var current = document.getElementsByClassName("activeFilter");
    current[0].className = current[0].className.replace(" activeFilter", "");
    this.className += " activeFilter";
  });
}
