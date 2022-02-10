import './App.css';
import { AiOutlineInfoCircle } from 'react-icons/Ai';
import TextFields from './components/CampoTexto'
import OneButton from './components/Botao/OneButton'
import TwoButtons from './components/Botao/TwoButtons';
import ThreeButtons from './components/Botao/ThreeButtons';
import OtherButton from './components/Botao/OtherButton';
import Grid from '@mui/material/Grid';
import { MyStyledGrid } from './components/Botao/StyleButton';
import Box from '@mui/material/Box';




 
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
                    <TwoButtons/>         
                    <TextFields label="Aporte Inicial" variant="standard"  type="number" margin="dense"/>
                    <TextFields label="Prazo(em meses)" variant="standard" type="number" required margin="dense"/>
                    <TextFields label="IPCA(ao ano)" InputProps={{ readOnly: true,}} variant="standard" defaultValue="10,06%"/>
                    <OneButton />
                  </div>{/*campos*/}
              </div>{/*box-wraper*/}
          </div>{/*box-single*/}
            <div className='box-single'>
                <div className='box-wraper'>    
                    <span>Tipos de Indexação</span> <AiOutlineInfoCircle/>
                    <div className='campos'>
                      <ThreeButtons/>         
                      <TextFields label="Aporte Mensal" variant="standard" type="number"/>
                      <TextFields label="Rentabilidade" variant="standard" />
                      <TextFields label="CDI(ao ano)" InputProps={{ readOnly: true,}} variant="standard" defaultValue="9,18%"/>
                      <OtherButton/>    
                    </div>{/*campos*/}
                </div>{/*box-wraper*/}
            </div>{/*box-single*/}
                <div className='section2'>
                  <p>Resultado da Simulação</p>
                <Grid container>
                  <MyStyledGrid item lg={4}>
                    <Box
                      height={100}
                      width={300}
                      border={2}>
                      Valor final Bruto
                    </Box>
                    </MyStyledGrid>
                  <MyStyledGrid item lg={4}>
                    <Box
                      height={100}
                      width={300}
                      border={2}>
                      Aliquota do IR
                    </Box>
                  </MyStyledGrid>
                  <MyStyledGrid item lg={4}>
                      <Box
                        height={100}
                        width={300}
                        border={2}>
                        Valor pago em IR
                      </Box>
                    </MyStyledGrid>
                </Grid>

                <Grid container>
                  <MyStyledGrid item lg={4}>
                    <Box
                      height={100}
                      width={300}
                      border={2}>
                      Valor final Bruto
                    </Box>
                    </MyStyledGrid>
                  <MyStyledGrid item lg={4}>
                    <Box
                      height={100}
                      width={300}
                      border={2}>
                      Aliquota do IR
                    </Box>
                  </MyStyledGrid>
                  <MyStyledGrid item lg={4}>
                      <Box
                        height={100}
                        width={300}
                        border={2}>
                        Valor pago em IR
                      </Box>
                    </MyStyledGrid>
                </Grid>
                </div>{/*section2*/}
        </div>{/*center*/}
      </div>{/*box-investimentos*/}

     
    </div>
          
    
  )
}

export default App;
