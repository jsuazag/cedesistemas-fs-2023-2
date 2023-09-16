import styled from 'styled-components'
import { Layout } from '../../components/Layout'
import { Button, COLORS } from '../../globalStyles';
import { Link } from 'react-router-dom';

export const FormContainer = styled.section`
  //border: 1px solid red;
`;

export const FormControl = styled.div`

  margin: 12px 0;

  input {
    width: 100%;
    font-family: 'Montserrat';
    font-size: 1.1em;
    border: 2px solid ${COLORS.secondary};
    border-radius: 6px;
    padding: 8px 10px;
    outline: none;
  }
`

export const Login = () => {

  return (
    <Layout>
      <h2>Iniciar Sesión</h2>
      <hr />
      <FormContainer>
        <form>
          <FormControl>
            <label>Correo electrónico</label>
            <input type="email" />
          </FormControl>

          <FormControl>
            <label>Contraseña</label>
            <input type="password" />
          </FormControl>

          <Button type='submit'>Acceder</Button>

        </form>
      </FormContainer>

      <p>¿Aún no tienes una cuenta? <Link to="/signup">Regístrate</Link> </p>

    </Layout>
  )
}
