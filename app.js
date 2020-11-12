// requerimos la librería
const express = require('express')

// creamos la aplicación
const app = express()

// definimos una ruta `GET` al path `/` (la raíz) que simplemente
// imprime un título h1
app.get('/', (req, res) => {
  res.send('<h1>Hola Mundo</h1>')
})

// iniciamos el servidor en el puerto 3000
app.listen(3000, () => console.log('Listening on port 3000!'))