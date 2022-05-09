import Card from 'components/Card'
import Header from 'components/Header'
import Sidbar from 'components/Sidbar'
import * as S from './styles'

const Main = ({}) => (


  <S.Wrapper>  
    <Sidbar/> 
    <S.Main>
    <Header/>
    <S.AllCard>
<Card color='Azul' description='teste ' size='Cardmedio' valor='3.000,91'/>  
<Card color='Azul' description='teste ' size='Cardmedio' valor='300,24'/> 
<Card color='Azul' description='teste ' size='Cardmedio' valor='688,26'/> 
<Card color='Azul' description='teste ' size='Cardmedio' valor='835,76'/> 
<Card color='Azul' description='teste ' size='Cardmedio' valor='654,71'/> 
   </S.AllCard> 
   </S.Main>
  </S.Wrapper>
)

export default Main
