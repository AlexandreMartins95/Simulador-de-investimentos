import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import GrupoBotao from './components/Botao'
import TextFields from './components/CampoTexto'
import FixedFields from './components/Campofixo'
import BasicButtons from './components/BotaoSingle'

ReactDOM.render(
  <React.StrictMode>
    <App />
    <GrupoBotao/>
    <TextFields/>
    <TextFields/>
    <FixedFields/>
    <BasicButtons/>
  </React.StrictMode>,
  document.getElementById('root')
)
