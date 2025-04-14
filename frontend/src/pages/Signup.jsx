import {useForm} from 'react-hook-form'
import { useState } from 'react'
import {useNavigate} from 'react-router-dom'


const  Signup = () =>  {

  const {register, handleSubmit, formState : {errors}} = useForm()
  const [signUpMsg , setSignUpMsg]  = useState(null)
  let navigate = useNavigate(null)

  const signUpSubmit = async (data) => {
    let {userName, userEmail, userPassword, userAge} = data

//    Here Send The Data In Backend For The SignUp 
try {
    let res = await fetch('http://localhost:3000/signUp', {
      method : 'POST',
      headers : {'Content-Type': 'application/json'},
      body : JSON.stringify(data)
    })

    let finalRes = await res.json()

    // Check Status Code wise Render If Status not 201 Means  
    // Error Comes So Cannot Redirect in Login Page
    // if equal 201 Means Sucess Register so Redirect to Login

     if(res.status != 201){
      return setSignUpMsg(finalRes.serverMsg)
     }


     setSignUpMsg(finalRes.serverMsg)
    //  1 second Baat page Change Krwa Rha
        setTimeout(() => {
          navigate('/login')
        }, 1000);
     
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
          <form onSubmit={handleSubmit(signUpSubmit)}>
            <div className="relative mb-4">
              <input
                type="text"
                id="name"
                className="block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border-1 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder=" "
                {...register('userName',
                    {
                        required : 'Name is Required',
                        minLength : {value : 4, message : 'Name atleast 4 Character'}
                    }
                )}
                />
                {errors.userName && <p className='errormsg'>{errors.userName.message}</p>}
              <label
                htmlFor="name"
                className="absolute text-sm text-gray-500 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1"
                >
                Name
              </label>
            </div>
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

            <div className="relative mb-6">
              <input
                type="number"
                id="age"
                className="block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border-1 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder=" "
                {...register('userAge', {
                    required : 'Age is Required',
                    validate: value => value >= 18 || 'Age must be greater than 17'
                })}
              />
            {errors.userAge && <p className='errormsg'>{errors.userAge.message}</p>}

              <label
                htmlFor="age"
                className="absolute text-sm text-gray-500 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1"
              >
                Age
              </label>
            </div>
            {/* Here the SignUp state Msg Print That Come In the Database */}
            {signUpMsg && <p className={signUpMsg.includes("Sucessfully") ? 'sucess' : 'errormsg'}>
              {signUpMsg}
              </p>}

            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full"
              type="submit"
            >
              Sign Up
            </button>
          </form>
             <p className='text-center text-gray-500 text-[15px] mt-2'>Already have an account?
               <span onClick={() => navigate('/login')} className='font-bold text-blue-400 cursor-pointer'> Login </span>
             </p>
        </div>
      </div>
    );
  }
  
  export default Signup;