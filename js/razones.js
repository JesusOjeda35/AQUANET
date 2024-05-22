function mostrarRazones() {
    const razones = [
        "1. Conservar el agua asegura el suministro para futuras generaciones.",
        "2. El agua potable es un recurso limitado y precioso.",
        "3. Ahorrar agua reduce el impacto ambiental.",
        "4. Conservación del agua ayuda a mantener el equilibrio ecológico.",
        "5. El tratamiento del agua consume mucha energía.",
        "6. Reducir el consumo de agua disminuye los costos en el hogar.",
        "7. Menos consumo de agua reduce la necesidad de infraestructura costosa.",
        "8. Ahorrar agua protege los hábitats naturales y la vida silvestre.",
        "9. La escasez de agua puede afectar la producción de alimentos.",
        "10. Cuidar el agua promueve una comunidad más sostenible."
    ];

    const lista = document.getElementById('razones');
    lista.innerHTML = '';
    razones.forEach(razon => {
        const li = document.createElement('li');
        li.textContent = razon;
        lista.appendChild(li);
    });
}