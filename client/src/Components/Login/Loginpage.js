import { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom"
import { useNavigate } from "react-router-dom";

const SignUp = (props) => {
  const navigate = useNavigate()
  const [details, setDetails] = useState({})

  const handleChange = (e) => {
    setDetails((prev) => ({ ...prev, [e.target.name]: e.target.value }))
    // console.log(details)
  }

  const onLoginHandler = () => {
    fetch('http://localhost:9999/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(details),
    })
      .then(res => res.json())
      .then(result => {
        if (result.msg === 'seller') {
          // props.onUserLogin(details.email.slice(0,details.email.indexOf('@')))
          localStorage.setItem('email', details.email)
          navigate('/adminportal')
        }
        else if (result.msg === 'user') {
          localStorage.setItem('email', details.email)
          // console.log(details)
          // props.onUserLogin(details.email.slice(0,details.email.indexOf('@')))
          // props.onUserLogin(details.name)
          navigate('/')
        }
        else {
          navigate('/login')
        }
      })
      .catch(err => {
        navigate('/login')
        console.log(err)
      })
  }

  return (
    <>
      {/* <GlobalStyle /> */}
      <Wrapper>
        <div className="login-container">
          <div className="loginform">
            <div className="loginform-container">
              <div className="loginform-left">
                <h1 className="loginform-title">Welcome!</h1>
                <p className="loginform-desc">To the Farmers Web Portal!!!</p>
                <form onSubmit={(e) => e.preventDefault()}>
                  <div className="input-block">
                    <label htmlFor="email" className="input-label">Email</label>
                    <input type="email" autoComplete="off" name="email" id="email" placeholder="Email" onChange={handleChange} />
                    {/* {errors.email && touched.email ? (
                      <p className="form-error">{errors.email}</p>
                    ) : null} */}
                  </div>

                  <div className="input-block">
                    <label htmlFor="password" className="input-label">Password</label>
                    <input type="password" autoComplete="off" name="password" id="password" placeholder="Password" onChange={handleChange} />
                    {/* {errors.password && touched.password ? (
                      <p className="form-error">{errors.password}</p>
                    ) : null} */}
                  </div>

                  <div className="loginform-buttons">
                    <button className="input-button" onClick={onLoginHandler}>Login</button>
                  </div>

                  <div className="">
                    <Link to=""><i id='icon' className="fab fa-facebook-f fa-2x px-5 mr-5"></i></Link>
                    <Link to=""><i id='icon' className="fab fa-twitter fa-2x"></i></Link>
                    <Link to=""><i id='icon' className="fab fa-instagram fa-2x px-5 mr-5"></i></Link>
                    <Link to=""><i id='icon' className="fab fa-linkedin-in fa-2x"></i></Link>
                  </div>

                </form>
                <p className="sign-up">
                  Don't have an account? <Link to="/signup">Sign Up now</Link>
                </p>
              </div>
              <div className="loginform-right">
                <img src="https://images.unsplash.com/photo-1512486130939-2c4f79935e4f?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=dfd2ec5a01006fd8c4d7592a381d3776&auto=format&fit=crop&w=1000&q=80" alt="" />
              </div>
            </div>
          </div>
        </div>
      </Wrapper>
    </>
  );
};

const Wrapper = styled.section`
#login-bg{
  position: absolute;
    left: 0px;
    top: 0px;
    z-index: -1;
    width: 100%;
    height: 100%;
    /* filter:blur(1px); */
}
  .login-container {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: #efedee;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .loginform {
    width: 100%;
    /* height: 60px; */
    background: rgba(51, 51, 51, 0.5);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    transition: 0.4s;
  }
  .loginform-container {
    display: flex;
    max-width: 60vw;
    width: 100%;
    border-radius: 10px;
    overflow: hidden;
    position: absolute;

    transition-duration: 0.3s;
    background: #fff;
  }
  .loginform-title {
    margin: 0;
    font-weight: 400;
    font-size:40px;
    color: #55311c;
  }
  .form-error {
    font-size: 1.4rem;
    color: #b22b27;
  }
  .loginform-desc {
    margin: 6px 0 30px 0;
    font-size: 20px;
  }
  .loginform-left {
    padding: 60px 30px 20px;
    background: #fff;
    // background-color: beige;
    flex: 1.5;
    transition-duration: 0.5s;
    opacity: 1;
  }

  .loginform-right {
    flex: 2;
    font-size: 0;
    transition: 0.3s;
    overflow: hidden;
  }
  .loginform-right img {
    width: 100%;
    height: 100%;
    transform: scale(1);
    -o-object-fit: cover;
    object-fit: cover;
    transition-duration: 1.2s;
  }

  .loginform.is-open .loginform-left {
    transform: translateY(0);
    opacity: 1;
    transition-delay: 0.1s;
  }
  .loginform-buttons {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .loginform-buttons a {
    color: rgba(51, 51, 51, 0.6);
    font-size: 14px;
  }

  .sign-up {
    margin: 60px 0 0;
    font-size: 14px;
    text-align: center;
  }
  .sign-up a {
    color: #8c7569;
  }

  .input-button {
    display: inline-block;
    padding: 1.2rem 3.2rem;
    outline: none;
    text-transform: uppercase;
    border: 0;
    color: #fff;
    border-radius: 4px;
    background: #8c7569;
    transition: 0.3s;
    cursor: pointer;
    font-family: "Nunito", sans-serif;
  }
  .input-button:hover {
    background: #55311c;
  }

  .input-label {
    font-size: 11px;
    text-transform: uppercase;
    font-weight: 600;
    letter-spacing: 0.7px;
    color: #8c7569;
    transition: 0.3s;
  }

  .input-block {
    display: flex;
    flex-direction: column;
    padding: 10px 10px 8px;
    border: 1px solid #ddd;
    border-radius: 4px;
    margin-bottom: 20px;
    transition: 0.3s;
  }
  .input-block input {
    outline: 0;
    border: 0;
    padding: 4px 0 0;
    font-size: 14px;
  }

  .input-block input::-moz-placeholder {
    color: #ccc;
    opacity: 1;
  }
  .input-block input:-ms-input-placeholder {
    color: #ccc;
    opacity: 1;
  }
  .input-block input::placeholder {
    color: #ccc;
    opacity: 1;
  }
  .input-block:focus-within {
    border-color: #8c7569;
  }
  .input-block:focus-within .input-label {
    color: rgba(140, 117, 105, 0.8);
  }

  @media (max-width: 750px) {
    .loginform-container {
      max-width: 90vw;
    }

    .loginform-right {
      display: none;
    }
  }

    .fa-facebook-f,
.fa-linkedin-in {
    color: #5393fa;
}

.fa-twitter {
    color: rgba(29, 161, 242, 1.00);
}

.fa-instagram {
    color: rgb(189, 63, 84);
}

#icon{
  margin-right: 5px;
  padding:10px;
  font-size:1.5rem !important;
}
`;

export default SignUp;