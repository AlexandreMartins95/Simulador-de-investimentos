import './components/App.css';
import { AiOutlineInfoCircle } from 'react-icons/Ai';
import GrupoBotao from './components/Botao'
import TextFields from './components/CampoTexto'
import BasicButtons from './components/BotaoSingle'
import Grupo2Botao from './components/GroupButton';
import { Button, ThemeProvider, createTheme } from '@material-ui/core';


 
function App() {


  return (
    <div>
      <h1>Simulador de Investimentos</h1> 
      <div className='box-investimentos'>
      <p>Simulador</p>
        <div className='center'>
            <div className='box-single'>
              <div className='box-wraper'> 
                  <span>Rendimento</span> <AiOutlineInfoCircle/>
                  <div className='campos'>
                    <GrupoBotao/>         
                    <TextFields label="Aporte Inicial" variant="standard"  type="number" margin="dense"/>
                    <TextFields label="Prazo(em meses)" variant="standard" type="number" required margin="dense"/>
                    <TextFields label="IPCA(ao ano)" InputProps={{ readOnly: true,}} variant="standard" defaultValue="10,06%"/>
                    <BasicButtons variant="outlined"/>
                  </div>
              </div>
          </div>
            <div className='box-single'>
                <div className='box-wraper'>    
                    <span>Tipos de Indexação</span> <AiOutlineInfoCircle/>
                    <div className='campos'>
                      <Grupo2Botao/>         
                      <TextFields label="Aporte Mensal" variant="standard" type="number"/>
                      <TextFields label="Rentabilidade" variant="standard" />
                      <TextFields label="CDI(ao ano)" InputProps={{ readOnly: true,}} variant="standard" defaultValue="9,18%"/>
                      <BasicButtons variant="contained" disabled/>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </div>
          
    
  )
}

export default App;
