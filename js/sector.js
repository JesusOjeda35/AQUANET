function sumarSectores() {
    const sector1 = parseFloat(document.getElementById('sector1').value) || 0;
    const sector2 = parseFloat(document.getElementById('sector2').value) || 0;
    const sector3 = parseFloat(document.getElementById('sector3').value) || 0;
    const sector4 = parseFloat(document.getElementById('sector4').value) || 0;

    const suma = sector1 + sector2 + sector3 + sector4;

    document.getElementById('resultado').textContent = suma;
}