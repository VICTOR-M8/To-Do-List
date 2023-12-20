const FECHA = new Date()
fecha.innerHTML = FECHA.toLocaleDateString('es-es', { weekday: 'long', month: 'short', day: 'numeric' })