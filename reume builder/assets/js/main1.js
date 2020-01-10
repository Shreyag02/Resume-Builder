(function() {
    'use strict';
    window.addEventListener('load', function() {
      // Get the forms we want to add validation styles to
      var forms = document.getElementsByClassName('needs-validation');
      // Loop over them and prevent submission
      var validation = Array.prototype.filter.call(forms, function(form) {
        form.addEventListener('submit', function(event) {
          if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
          }
          form.classList.add('was-validated');
        }, false);
      });
    }, false);
  })
  // var formchange= document.getElementById("formchange");

  // function one(){
  //   formchange.setAttribute("src","./forms/Achievements.html");
  // }

//   function loadIframe(iframeName, url) {
//     console.log("hey");
//     var $iframe = $('#ifrm');
//     if ( $iframe.length ) {
//         $iframe.attr('src',url);   
//         return false;
//     }
//     return true;
// }

// $(document).ready(function () {
//   $("#one").on("click", function () {
//     console.log("hey");
//       var pageurl = $(this).val();
//       $("#ifrm").attr("src", pageurl);
//   });
// });

function go(loc) {
  document.getElementById('ifrm').src = loc;
}