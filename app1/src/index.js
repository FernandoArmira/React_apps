import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { App } from './App'

/*const contenido = (
  <div>
    <h1>Titulo</h1>
    <div>Hola desde react</div>
  </div>
);*/

function Componente({titulo,children}){
  //console.log(props);

  /*const titulo = props.titulo;
  const contenido = props.contenido;*/

  //const{titulo,contenido}= props

  return(
    <div className='contenedor'>
      <h1>{titulo}</h1>
      <div>{children}</div>
    </div>
  );
} 

/*const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Componente titulo="Titulo">Hola desde react</Componente>
);*/

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <App/>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
