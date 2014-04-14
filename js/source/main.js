(function() {

  'use strict';

 $(document).ready(initialize);


  function initialize(){
  $('#push').click(push);
  $('.number').click(display);
  $('.clear').click(clearDisplay);
  $('.decimal').click(addDecimal);
  $('.sign').click(doSign);
  $('.operator').click(operator);

  }

  function push() {
  var display = $('#display').text();
  $('#display').text(0);
  var $div = $('<div>');
  $div.text(display);
  $('#queue').prepend($div);

  }

  function operator() {
    var op = $(this).data('op');
    var x = $('#queue > div:nth-child(1)').text() * 1;
    var y = $('#queue > div:nth-child(2)').text() * 1;
      switch(op){
        case 'add':
          var z = x + y;
          $('#display').text(z);
          break;
        case 'sub':
          var sub = x - y;
          $('#display').text(sub);
          break;
        case 'div':
          var div = y / x;
          $('#display').text(div);
          break;
        case 'mult':
          var mult = x * y;
          $('#display').text(mult);
          break;
        case 'root':
          var root = Math.sqrt(x);
          $('#display').text(root);
          break;
        case 'exp':
          var exp = Math.pow(x,y);
          $('#display').text(exp);
          break;
        case 'sum':
          var sums = sum();
          $('#display').text(sums);
          break;
        case 'fact':
          var facs = factorial(x);
          $('#display').text(facs);
          break;


    }
  }

  function factorial(x){
    var total = 1;

    for(var i=2; i <= x; i++) {
      total *= i;
    }
    return total;
  }

function sum() {
  var total = 0;

  $('#queue > div').each(function(index, div){
    var x = div.textContent * 1;
    total += x;

  });

  return total;


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
    $('#queue').empty();
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
