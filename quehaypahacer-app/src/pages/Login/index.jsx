import { Layout } from '../../components/Layout'
import { Button, FormContainer, FormControl } from '../../globalStyles'
import { Link } from 'react-router-dom'
import { useForm } from 'react-hook-form'

const emailPattern = /^[A-Za-z]+[A-Za-z0-9_\.]*@[A-Za-z0-9]+\.[A-Za-z]+/i

export const Login = () => {

  const { register, handleSubmit, formState: { errors } } = useForm()

  const onSubmitLogin = data => {
    console.log('formData', data)
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
