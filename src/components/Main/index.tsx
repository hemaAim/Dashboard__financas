import Card from 'components/Card'
import Sidbar from 'components/Sidbar'
import * as S from './styles'

const Main = ({}) => (


  <S.Wrapper>  
    <Sidbar/> 
    
    <S.AllCard>
<Card color='Azul' description='teste ' size='Cardmedio' valor='3.000,21'/>  
<Card color='Azul' description='teste ' size='Cardmedio' valor='3.000,21'/> 
<Card color='Azul' description='teste ' size='Cardmedio' valor='3.000,21'/> 
<Card color='Azul' description='teste ' size='Cardmedio' valor='3.000,21'/> 
<Card color='Azul' description='teste ' size='Cardmedio' valor='3.000,21'/> 
   </S.AllCard>
  </S.Wrapper>
)

export default Main
