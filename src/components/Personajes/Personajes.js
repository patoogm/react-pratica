import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'

const Personajes = () => {
  const [personaje, setPersonaje] = useState(1)

  const mostrarPersonajes = () => {
    console.log('Hola soy el personaje', personaje)
  }
  
  useEffect(() => {
    mostrarPersonajes()
  }, [personaje])
  
  return (
    <div>
      <button onClick={() => setPersonaje(personaje + 1)}>Cambiar personajes</button>
    </div>
  )
}

export default Personajes
