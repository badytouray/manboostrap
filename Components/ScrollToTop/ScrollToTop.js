// import React from 'react'
// import "./ScrollToTop.css";

// function ScrollToTop() {
//     let mybutton = document.getElementById("btn-back-to-top");

//     // When the user scrolls down 20px from the top of the document, show the button
//     window.onscroll = function () {
//       scrollFunction();
//     };
    
//     function scrollFunction() {
//       if (
//         document.body.scrollTop > 20 ||
//         document.documentElement.scrollTop > 20
//       ) {
//         mybutton.style.display = "block";
//       } else {
//         mybutton.style.display = "none";
//       }
//     }
//     // When the user clicks on the button, scroll to the top of the document
//     mybutton.addEventListener("click", backToTop);
    
//     function backToTop() {
//       document.body.scrollTop = 0;
//       document.documentElement.scrollTop = 0;
//     }

//   return (
//     <div><button
//     type="button"
//     class="btn btn-danger btn-floating btn-lg"
//     id="btn-back-to-top"
//     >
// <i class="fas fa-arrow-up"></i>
// </button></div>
//   )
// }

// export default ScrollToTop