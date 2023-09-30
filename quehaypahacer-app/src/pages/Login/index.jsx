import { Layout } from '../../components/Layout'
import { Button, FormContainer, FormControl } from '../../globalStyles'
import { Link } from 'react-router-dom'

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

          <Button type="submit">Acceder</Button>

        </form>
      </FormContainer>

      <p>¿Aún no tienes una cuenta? <Link to="/signup">Regístrate</Link> </p>

    </Layout>
  )
}
