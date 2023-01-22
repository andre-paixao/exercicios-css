window.onresize = function() {
            var margin = document.getElementById("myDiv").style.marginTop;
            if (window.innerWidth < 1368) {
            margin += 20;
            document.getElementById("myDiv").style.marginTop = margin + "px";
  }
}


var viewportWidth = window.innerWidth;
var viewportHeight = window.innerHeight;
console.log(viewportWidth + ' x ' + viewportHeight);