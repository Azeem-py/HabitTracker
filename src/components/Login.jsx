import AuthInverse from '../micro_components/AuthInverse'
import InputGroup from '../micro_components/Input'

const Login = () => {
  const data = [
    { label: 'email', type: 'email', name: 'email' },
    { label: 'password', type: 'password', name: 'password' },
  ]

  return (
    <div className='py-10 px-5'>
      <header className='flex justify-between mt-9'>
        <h1 className='text-[3rem] font-bold'>Login</h1>
        <AuthInverse auth={'Signup'} />
      </header>

      <main className='mt-10'>
        <InputGroup inputData={data} login={true} />
      </main>
    </div>
  )
}

export default Login
