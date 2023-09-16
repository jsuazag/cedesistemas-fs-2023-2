import styled from 'styled-components'
import { COLORS } from '../../globalStyles'

export const TopbarContainer = styled.header`
  position: fixed;
  width: 100%;
  height: 60px;
  top: 0;
  left: 0;
  background-color: ${COLORS.primary};
  display: flex;

  h5 {
    color: #fff;
    text-align: center;
    font-size: 1.2em;
    line-height: 0;
  }

`

export const TopbarIcon = styled.div`
  width: 60px;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  svg {
    color: #f2f2f2;
    font-size: 1.6em;
    opacity: 0.8;
  }

  &:hover {
    svg {
      opacity: 1;
    }
  }
`

export const TopbarTitle = styled.div`
  flex: 1;
`
