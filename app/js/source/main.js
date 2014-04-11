(function() {

  'use strict';

 $(document).ready(initialize);


  function initialize(){
  $('#calculator').click(title);
  $('.number').click(display);
  $('.clear').click(clearDisplay);
  $('.decimal').click(addDecimal);
  $('.sign').click(doSign);

  }

  function title() {
    var display  = $('#calculator').css('display');

      if(display === 'none'){
        $('#calculator').fadeIn();
      }else {
        $('#calculator').fadeOut();
      }
  }


  function display() {
    var num = this.textContent;
    var output = $('#display').text();

    if(output === '0') {
      output = num;
    }
      else{
        output += num;
      }

      $('#display').text(output);

}


  function clearDisplay() {
    var num = this.textContent;
    if (num === 'C') {
      $('#display').text(0);
    }

  }

  function addDecimal() {
    var text = $('#display').text();


    if(text.indexOf('.') < 0) {      //if there is no decimal
      $('#display').text(text +='.');
    }

  }

  function doSign() {
  var display = $('#display').text();
    $('#display').text(display * -1);
  }







}) ();
