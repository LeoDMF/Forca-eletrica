document.getElementById('calculateButton').addEventListener('click', function() {
  var charge1 = parseFloat(document.getElementById('charge1').value);
  var charge2 = parseFloat(document.getElementById('charge2').value);
  var distance = parseFloat(document.getElementById('distance').value);

  var force = (9 * Math.pow(10, 9) * charge1 * charge2) / Math.pow(distance, 2);

  document.getElementById('resultado1').innerHTML = 'A força elétrica é de ' + force.toFixed(2) + ' Newtons.';
});

