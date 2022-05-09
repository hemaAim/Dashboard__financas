import Card from 'components/Card'
import Header from 'components/Header'
import Sidbar from 'components/Sidbar'
import * as S from './styles'

const Main = ({}) => (
  <S.Wrapper>
    <Sidbar />
    <S.Main>
      <Header />
      <S.AllCard>
        <Card color="Azul"    description="Receita"   valor="3.000,91"/>
        <Card color="Vermelho"description="Despesas"  valor="300,24"  />
        <Card color="Rosa"    description="Saldo "    valor="688,26"  />
        <Card color="Verde"   description="Poupança"  valor="835,76"  />
        <Card color="Lilais"  description="Desejado"  valor="654,71"  />
      </S.AllCard>
      <S.Second_main>
        <Card
          color="Branco"
          description="Alimentação"
          size="Cardpequeno"
          valor="835,76"
        />
        <Card
          color="Branco"
          description="Mobilidades"
          size="Cardpequeno"
          valor="654,71"
        /> 
        <Card
          color="Branco"
          description="Refeição"
          size="Cardpequeno"
          valor="654,71"
        />
      </S.Second_main>
    </S.Main>
  </S.Wrapper>
)

export default Main
