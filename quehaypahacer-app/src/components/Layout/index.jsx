import { styled } from 'styled-components'
import { Topbar } from '../Topbar'
import { useContext, useEffect } from 'react'
import { UserContext } from '../../contexts/UserContext'

const ContentLayout = styled.section`
  margin-top: 60px;
  padding: 10px 15px;
`

export const Layout = (props) => {

  const { validateSession } = useContext(UserContext)

  useEffect(() => {
    validateSession()
  }, []) // 1 time

  return (
    <>
      <Topbar />
      <ContentLayout>
        { props.children }
      </ContentLayout>
      {/*<footer>todos los derechos</footer>*/}
    </>
  )
}
