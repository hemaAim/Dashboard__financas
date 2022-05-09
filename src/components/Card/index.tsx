import * as S from './styles'

export type CardProps = {
  valor: string
  description: string
  color: 'Azul' | 'Vermelho' | 'Rosa' | 'Verde' | 'Lilais' | 'Branco'

  size?: 'Cardpequeno' | 'Cardmedio' | 'Cardgrande'
}
const Card = ({ valor, description, color, size = 'Cardmedio' }: CardProps) => ( 

  

    <S.Card size={size} color={color}>
      <h1>{valor}</h1>

      <p>{description}</p>
    </S.Card>

)

export default Card
