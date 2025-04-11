import {useForm} from 'react-hook-form'
import { useState, navigate} from 'react'
import { useNavigate } from 'react-router-dom'

const  Login = () =>  {
  const {register, handleSubmit, formState : {errors}} = useForm()
  const [loginMsg , setLoginMsg]  = useState(null)
  let navigate = useNavigate(null)

  const loginSubmit = async (data) => {
    console.log('submit call');
    
    let {userEmail, userPassword} = data

//    Here Send The Data In Backend For The SignUp 
try {
    let res = await fetch('http://localhost:3000/login', {
      method : 'POST',
      headers : {'Content-Type': 'application/json'},
      body : JSON.stringify(data),
      credentials: 'include', // ye line btati ha ka cookies send & recived Ho pai
    })
    console.log('res', res);
    let finalRes = await res.json()
    console.log('final res', finalRes);

    // Check Status Code wise Render If Status not 200 Means  
    // Error Comes So Cannot Redirect in Home Page
    // if equal 200 Means Sucess Register so Redirect to Home page

    if(res.status != 200){
        return setLoginMsg(finalRes.serverMsg)
    }


    setLoginMsg(finalRes.serverMsg)
    navigate('/home')
    


    // setSignUpMsg(response.data.serverMsg)
} 
catch (error) {
    console.log(error);
    // setSignUpMsg(error.response.data.serverMsg)
}
  }
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <div className=" bg-white px-6 py-10 rounded shadow-md w-[430px] rounded">
          <h2 className="text-2xl font-semibold text-center mb-6">Sign Up</h2>
          <form onSubmit={handleSubmit(loginSubmit)}>

            <div className="relative mb-4">
              <input
                type="email"
                id="email"
                className="block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border-1 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder=" "
                {...register('userEmail', {
                    required: "Email is Required",
                    pattern: {value : /^[a-zA-Z0-9._%+-]{4,}@(gmail\.com|yahoo\.com|outlook\.com)$/ , message : 'Invalid Email'}
                })}
              />
             {errors.userEmail && <p className='errormsg'>{errors.userEmail.message}</p>}

              <label
                htmlFor="email"
                className="absolute text-sm text-gray-500 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1"
              >
                Email
              </label>
            </div>

            <div className="relative mb-4">
              <input
                type="password"
                id="password"
                className="block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border-1 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder=" "
                {...register("userPassword", {
                    required : 'Password is Required',
                    minLength : {value : 6, message : 'Password atleast 6 character'}
                })}
              />
            {errors.userPassword && <p className='errormsg'>{errors.userPassword.message}</p>}

              <label
                htmlFor="password"
                className="absolute text-sm text-gray-500 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1"
              >
                Password
              </label>
            </div>

           
            {/* Here the SignUp state Msg Print That Come In the Database */}
            {loginMsg && <p className={loginMsg.includes("SucessFully") ? 'sucess' : 'errormsg'}>
              {loginMsg}
            </p>}

            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full"
              type="submit"
            >
             Login
            </button>
          </form>
        </div>
      </div>
    );

  }
  
  export default Login;