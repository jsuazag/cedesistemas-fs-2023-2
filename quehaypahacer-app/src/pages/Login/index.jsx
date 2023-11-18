import { Layout } from '../../components/Layout'
import { Button, FormContainer, FormControl } from '../../globalStyles'
import { Link, useNavigate } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import { useContext } from 'react'
import { UserContext } from '../../contexts/UserContext'
import { httpRequest } from '../../utils/HttpRequest'

const emailPattern = /^[A-Za-z]+[A-Za-z0-9_\.]*@[A-Za-z0-9]+\.[A-Za-z]+/i

export const Login = () => {

  const { setAuthorization } = useContext(UserContext)
  const navigate = useNavigate()
  const { register, handleSubmit, formState: { errors } } = useForm()

  const onSubmitLogin = async data => {
    try {
      const response = await httpRequest({
        endpoint: '/users/login',
        body: data
      })

      const {token} = response.data // TODO
      setAuthorization({}) // TODO
      navigate('/')

    } catch (error) {
      alert('Error de credenciales')
    }
  }

  return (
    <Layout>
      <h2>Iniciar Sesión</h2>
      <hr />
      <FormContainer>
        <form onSubmit={handleSubmit(onSubmitLogin)} noValidate>
          <FormControl>
            <label>Correo electrónico</label>
            <input type="email" {...register("email", { required: true, pattern: emailPattern })} />
            { errors.email?.type === 'required' && <span>Campo requerido</span> }
            { errors.email?.type === 'pattern' && <span>Correo no válido</span> }
          </FormControl>

          <FormControl>
            <label>Contraseña</label>
            <input type="password" {...register("password", { required: true, minLength: 4 } )} />
            { errors.password?.type === 'required' && <span>Campo requerido</span> }
            { errors.password?.type === 'minLength' && <span>Mínimo 4 caracteres</span> }
          </FormControl>

          <Button type="submit">Acceder</Button>

        </form>
      </FormContainer>

      <p>¿Aún no tienes una cuenta? <Link to="/signup">Regístrate</Link> </p>

    </Layout>
  )
}
