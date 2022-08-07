import React, { useState, useRef } from 'react'
import { useHistory } from "react-dom/client";
import '../styles/Login.css'

function Login() {

  const [email, setEmail] = useState(null)
  const [password, setPassword] = useState(null)

  const [emailSucces, setEmailSucess] = useState(false)
  const [passwordSucces, setPasswordSucess] = useState(false)
  const [render, setRender] = useState(false)
  const [fail, setFail] = useState(false)



  console.log(email)
  console.log(password)

  const Database = {
    email: 'rubens@gmail.com',
    password: '123456'
  }
  localStorage.setItem('Database', JSON.stringify(Database))
  // const Router = useHistory()

  function verfiedLogin() {

    if (email !== Database.email) {
      console.log('Email incorreto')
    } else {
      setEmailSucess(true)
    }

    if (password !== Database.password) {
      console.log('Senha incorreto')
    } else {
      setPasswordSucess(true)
    }

    if (emailSucces && passwordSucces === true) {
      setRender(true)
    } else {
      setFail(true)
    }
  }

  return (
    <div className='login'>
      <div className='container'>
        <div className='row'>
          <h1 className='titulo'>Facebook</h1>
          {
            render ? (
              <div className='sucesso'>
                <p>Login efetuado com sucesso!</p>
              </div>
            ) : fail ? (
              <div className='fail'>
                <p>Credenciais invalidas!</p>
              </div>
            ) : null
          }
        </div>
        <div className='inputs'>
          <div className='email'>
            <p className='p'>Email :</p>
            <input onChange={(e) => setEmail(e.target.value)} className='inputs-login' />
          </div>
          <div className='password'>
            <p className='p'>Password :</p>
            <input type='password' onChange={(e) => setPassword(e.target.value)} className='inputs-login' />
          </div>
        </div>
        <button onClick={() => verfiedLogin()} className='btn'>Enviar</button>
      </div>
    </div>
  )
}

export default Login