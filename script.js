function calcularTotal() {
    var valorKilo = document.getElementById("valorKilo").value;
    var pesoTotal = document.getElementById("pesoTotal").value;
    
    var total = valorKilo * pesoTotal;
    
    document.getElementById("resultadoTotal").innerHTML = "El total es: " + total;
  }
  
  function calcularCantidad() {
    var valorKilo = document.getElementById("valorKilo2").value;
    var valorTotal = document.getElementById("valorTotal").value;
    
    var cantidad = valorTotal / valorKilo;
    
    document.getElementById("resultadoCantidad").innerHTML = "La cantidad a entregar es: " + cantidad + " kilogramos o gramos";
  }
  