import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from "axios";
import { useForm } from "react-hook-form";
function SignUp() {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = React.useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event:any) => {
    event.preventDefault();
  };

  //---------------validations---------------\\
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  //---------------validations---------------\\
  const onSubmit = async (data:any) => {
    try {
      const res = await axios.post(`auth/register`, data);

      if (res.data.success) {
       window.alert(`${res.data.message}`)
        navigate("/login");
      } else {
       window.alert(`${res.data.message}`)
      }
    } catch (error) {
     window.alert(" Register User Failed")
    }
  };

  return (
    <div className='d-flex justify-content-center align-items-center body'>
      <form className="box rounded-5 needs-validation"
        noValidate
        onSubmit={handleSubmit(onSubmit)}
      >
        <h1>Sign up</h1>
        {/* <p className="text-dark"> Please enter your login email and password!</p> */}
        <input type="text"
          id="validationCustom01"
          {...register("fullName", { required: true })}
          placeholder="FullName" />
        {errors.FullName && (
          <div className='text-danger'>
            Full Name is required
          </div>
        )}
        <input type="text"
          id="validationCustom03"
          {...register("answer", { required: true })}
          placeholder="father name "
          />
        {errors.answer && (
          <div className='text-danger'>
            Father Name is required
          </div>
        )}

        <input type="email"
          id="exampleFormControlInput1"
          placeholder="name@example.com"
          {...register("email", { required: true })}
        />
        <div className='text-danger'>
          Enter Valid Email is required
        </div>

        <input type="text"
          id="validationCustom02"
          {...register("phoneNo", { required: true })}
          placeholder="  Phone Number"
        />
        {errors.phoneNo && (
          <div className='text-danger'>Phone No is Required</div>
        )}
        <div className='d-flex justify-content-center  align-items-center '>
          <input type={showPassword ? "text" : "password"}
            id="validationCustom04"
            {...register("password", { required: true })}
            placeholder="Password***********"
          />
          <label style={{
            width: '30px',
            height: '30px',
            border: '1px solid grey',
            borderRadius: '50px',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            marginLeft: '-40px'
          }}
            onClick={handleClickShowPassword}
            onMouseDown={(e)=>handleMouseDownPassword(e)}
          >
            {showPassword ?
              <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="currentColor" className="bi bi-eye-fill" viewBox="0 0 16 16">
                <path d="M10.5 8a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0" />
                <path d="M0 8s3-5.5 8-5.5S16 8 16 8s-3 5.5-8 5.5S0 8 0 8m8 3.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7" />
              </svg>
              :
              <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="currentColor" className="bi bi-eye-slash-fill" viewBox="0 0 16 16">
                <path d="m10.79 12.912-1.614-1.615a3.5 3.5 0 0 1-4.474-4.474l-2.06-2.06C.938 6.278 0 8 0 8s3 5.5 8 5.5a7 7 0 0 0 2.79-.588M5.21 3.088A7 7 0 0 1 8 2.5c5 0 8 5.5 8 5.5s-.939 1.721-2.641 3.238l-2.062-2.062a3.5 3.5 0 0 0-4.474-4.474z" />
                <path d="M5.525 7.646a2.5 2.5 0 0 0 2.829 2.829zm4.95.708-2.829-2.83a2.5 2.5 0 0 1 2.829 2.829zm3.171 6-12-12 .708-.708 12 12z" />
              </svg>
            }
          </label>
        </div>
        {errors.password && (
                <div style={{ color: "red" }}>Password is Required</div>
              )}
        <Link className="forgot text-dark" to='/forget-password'>Forgot password?</Link>
        <input type="submit"  defaultValue="Login" />
        <div className="col-md-12"> <ul className="social-network social-circle">
          <li><Link to='/' className="icoFacebook" title="Facebook">
            <i className="fab fa-facebook-f">
            </i>
          </Link>
          </li>
          <li>
            <Link to='/' className="icoTwitter" title="Twitter">
              <i className="fab fa-twitter">
              </i>
            </Link>
          </li>
          <li>
            <Link to='/' className="icoGoogle" title="Google +">
              <i className="fab fa-google-plus">
              </i>
            </Link>
          </li>
        </ul>
        </div>
      </form>
    </div>
  )
}

export default SignUp