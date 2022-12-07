import React from 'react'
import { IoAddSharp } from "react-icons/io5";

//Importar estilos
import '../theme/HomeTheme.css'

const HomeScreen = () => {
  return (
    <div className='container' >
      <div>
      <h1 className='title'>Improving Game</h1> 
      <div style={{justifyContent: 'flex-end', width: '100%', display: 'flex'}}> 
        <button className='btnAdd'><IoAddSharp/></button> 
      </div> 

      <div className='containerHistory'> ufdi </div> 
      </div>



    </div>
  )
}

export default HomeScreen