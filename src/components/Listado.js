import React from 'react'

// Debemos importar el listado de objetos del archivo JSON para usarlos como array a la hora de crear cada Item.
// El componente Listado es el padre de:
// - varios Item
// ESTADO: Listado no necesita manejar un estado.
// MÉTODOS: Listado no requiere de métodos.
// PROPS: Listado recibe el método para aumentar el estado de App y se lo pasa a cada uno de sus hijos.
import Item from "./Item"
import Lista from "./data.json"

//Lista.map(function(prop){console.log(prop.stock)})

export default function Listado({aumentar}) {
  
  

  return (
    <div className='container'>
      {
        Lista.map(contenido=>{
          return(
            <Item
            key={contenido.id}
            nombre={contenido.producto.nombre} 
            descripcion={contenido.producto.descripcion}
             stock={contenido.stock}
             contador={aumentar} />


          )
        })
      }
    </div>
  )
}
