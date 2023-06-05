function calcularTotal() {
    var precio = parseFloat(document.getElementById('precio').value);
    var peso = parseFloat(document.getElementById('peso').value);
  
    var total = precio * peso / 1000;
  
    document.getElementById('resultadoTotal').innerText = 'Total: $' + total.toFixed(2);
  }
  
  function calcularCantidad() {
    var precio = parseFloat(document.getElementById('precio2').value);
    var valorTotal = parseFloat(document.getElementById('valorTotal').value);
  
    var cantidadGramos = valorTotal * 1000 / precio;
    var cantidadKilos = cantidadGramos / 1000;
  
    document.getElementById('resultadoCantidad').innerText = 'Cantidad: ' + cantidadGramos.toFixed(2) + ' gramos (' + cantidadKilos.toFixed(2) + ' kilogramos)';
  }
  