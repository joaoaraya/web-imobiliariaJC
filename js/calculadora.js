var valorCasa;
var valorParcelas;
var valorFinal;

var btnCalcular = document.getElementById('btnCalcular');
btnCalcular.addEventListener('click', function(){

  valorCasa = document.getElementById('visorValor').value;
  valorParcelas = document.getElementById('visorParcelas').value;

  if(valorCasa >= 50000){
    valorFinal = parseFloat(valorCasa) / parseFloat(valorParcelas);
    document.getElementById('visorResultado').value = "R$ " + parseFloat(valorFinal);
  }
  if(valorCasa < 50000) {
    document.getElementById('visorResultado').value = "Atenção: Digite um valor maior que R$ 50.000"
  }

});
