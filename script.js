function openTab(evt, tabName) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(tabName).style.display = "block";
    evt.currentTarget.className += " active";
  }
  
  function calcularTotal() {
    var kilo = parseFloat(document.getElementById('kilo').value);
    var peso = parseFloat(document.getElementById('peso').value);
    var total = kilo * (peso / 1000);
    document.getElementById('total').textContent = 'Total: ' + total.toFixed(2);
  }
  
  function calcularCantidad() {
    var kilo = parseFloat(document.getElementById('kilo2').value);
    var valor = parseFloat(document.getElementById('valor').value);
    var cantidad = valor / kilo;
    document.getElementById('cantidad').textContent = 'Cantidad: ' + cantidad.toFixed(2) + ' kg (o ' + (cantidad * 1000).toFixed(2) + ' g)';
  }
  
  function limpiarCalculadora() {
    var inputs = document.getElementsByTagName("input");
    for (var i = 0; i < inputs.length; i++) {
      inputs[i].value = "";
    }
    document.getElementById('total').textContent = "";
    document.getElementById('cantidad').textContent = "";
  }
  
  // Abrir la pestaña 'totalTab' por defecto al cargar la página
  document.getElementById('totalTab').style.display = "block";
  document.getElementsByClassName('tablinks')[0].className += " active";
  
  // Actualizar el tamaño de las pestañas al cambiar el tamaño de la ventana
  window.addEventListener('resize', function() {
    openTab(event, document.getElementsByClassName('active')[0].id);
  });
  