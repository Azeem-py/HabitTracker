import AuthInverse from '../components/AuthInverse'
import InputGroup from '../components/Input'

const SignUp = () => {
  const data = [
    { label: 'email', type: 'email', name: 'email' },
    { label: 'First Name', type: 'text', name: 'name' },
    { label: 'password', type: 'password', name: 'password' },
    { label: 'confirm password', type: 'password', name: 'password2' },
  ]

  return (
    <div className='py-10 px-5'>
      <header className='flex justify-between mt-9'>
        <h1 className='text-[3rem] font-bold'>Sign Up</h1>
        <AuthInverse auth={'Login'} />
      </header>

      <main className='mt-10'>
        <InputGroup inputData={data} />
      </main>
    </div>
  )
}

export default SignUp
