import styled from 'styled-components'
import { COLORS } from '../../../../globalStyles'

const CategoryWrapper = styled.div`
  width: 80px;
  height: 80px;
  background-color: ${ props => props.$isActive ? COLORS.primary : COLORS.secondary };
  border-radius: 5px;
  margin: 0 5px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  p {
    color: #fff;
    font-size: 0.6em;
    line-height: 0;
  }

  &:hover {
    cursor: pointer;
    background-color: ${COLORS.primary};
  }
`

const IconWrapper = styled.div`
  svg {
    color: #fff;
    font-size: 1.9em;
  }
`

export const Category = (props) => {

  const categorySelection = () => {
    //alert('clicked ' + props.id)
    props.onChangeCategory(props.id)
  }

  return (
    <CategoryWrapper $isActive={props.isActive} onClick={categorySelection}>
      <IconWrapper>{props.icon}</IconWrapper>
      <p>{props.name}</p>
    </CategoryWrapper>
  )
}
