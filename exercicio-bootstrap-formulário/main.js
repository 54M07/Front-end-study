
$(document).ready(function() {
    $('input[type="text"]').inputmask();  
    $('input[type="email"]').inputmask("email"); 
    $('input[type="tel"]').inputmask('(99) 9999-9999[9]');
  });
  
  $(document).ready(function() {
    $("form").submit(function(event) {
      
      event.preventDefault();
  
      $(".invalid-feedback").hide();
  
      
      let isValid = true;
  
      let nome = $("#nome").val();
      if (nome === "") {
        $("#nome").siblings(".invalid-feedback").show();
        isValid = false;
      }

  
      if (isValid) {
        $("form")[0].submit();
      }
    });
  });
  

