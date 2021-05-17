const output = document.getElementById("output");

for (let i = 1; i < 10; i++) {
  for (let k = 1; k < 10; k++) {
    output.innerHTML += `${i} * ${k} = ${i * k} <br>`;
  }
  output.innerHTML += "<hr>";
}

var slideIndex = 0;
showSlides();
function showSlides() {
  var i;
  var slides = document.getElementsByClassName("cherry_b1");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}
  slides[slideIndex-1].style.display = "block";
  setTimeout(showSlides, 1500); 
}
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhcnQxNi9zY3JpcHQuanMiLCJibG9jazEvanMvc2NyaXB0LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ1JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6ImFsbC5qcyIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IG91dHB1dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwib3V0cHV0XCIpO1xyXG5cclxuZm9yIChsZXQgaSA9IDE7IGkgPCAxMDsgaSsrKSB7XHJcbiAgZm9yIChsZXQgayA9IDE7IGsgPCAxMDsgaysrKSB7XHJcbiAgICBvdXRwdXQuaW5uZXJIVE1MICs9IGAke2l9ICogJHtrfSA9ICR7aSAqIGt9IDxicj5gO1xyXG4gIH1cclxuICBvdXRwdXQuaW5uZXJIVE1MICs9IFwiPGhyPlwiO1xyXG59XHJcbiIsInZhciBzbGlkZUluZGV4ID0gMDtcclxuc2hvd1NsaWRlcygpO1xyXG5mdW5jdGlvbiBzaG93U2xpZGVzKCkge1xyXG4gIHZhciBpO1xyXG4gIHZhciBzbGlkZXMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFwiY2hlcnJ5X2IxXCIpO1xyXG4gIGZvciAoaSA9IDA7IGkgPCBzbGlkZXMubGVuZ3RoOyBpKyspIHtcclxuICAgIHNsaWRlc1tpXS5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XHJcbiAgfVxyXG4gIHNsaWRlSW5kZXgrKztcclxuICBpZiAoc2xpZGVJbmRleCA+IHNsaWRlcy5sZW5ndGgpIHtzbGlkZUluZGV4ID0gMX1cclxuICBzbGlkZXNbc2xpZGVJbmRleC0xXS5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiO1xyXG4gIHNldFRpbWVvdXQoc2hvd1NsaWRlcywgMTUwMCk7IFxyXG59Il19
