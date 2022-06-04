let input_fields = document.querySelectorAll('.input_field');
input_fields.forEach(item => {
     item.addEventListener('input', (e) => {
          let input_value = e.target.value;
          if (input_value.length > 0) {


          } else {
               document.getElementById('disabled_button').disabled = false;

          }
     });
     console.log(item.value);
});



// add disable button
