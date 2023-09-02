import styled from 'styled-components'
import { COLORS } from '../../globalStyles'

export const TopbarContainer = styled.header`
  position: fixed;
  width: 100%;
  height: 60px;
  top: 0;
  left: 0;
  background-color: ${COLORS.primary};

  h5 {
    color: #fff;
    text-align: center;
    font-size: 1.2em;
    line-height: 0;
  }
`
