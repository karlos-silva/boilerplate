import * as S from './styles'

const Main = ({
  title = 'Boilerplate',
  description = 'Boilerplate Typescript com Next'
}) => (
  <S.Wrapper>
    <S.Title>{title}</S.Title>
    <S.Description>{description}</S.Description>
  </S.Wrapper>
)

export default Main
