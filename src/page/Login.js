import React, { useState } from 'react'

function Login() {

  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [confirmarSenha, setConfirmarSenha] = useState('');
  const [cpf, setCpf] = useState('');
  const [modoCadastro, setModoCadastro] = useState(false);

  const handleLogin = () => {
    // Lógica de login aqui
    console.log(`Email: ${email}, Senha: ${senha}`);
  };

  const handleCadastro = () => {
    // Lógica de cadastro aqui
    console.log(`Email: ${email}, Senha: ${senha}, Confirmar Senha: ${confirmarSenha}`);
  };

  return (
    <div>

      <div className="limiter">
        <div className="container-login">
          <div className="wrap-login">
            {/* <div className='test'></div> */}
            {/* <div className='test1'></div> */}

            <div className="login-pic js-tilt" data-tilt>
              <img src='../logoRh.png' alt="IMG" />
            </div>

            <form className="login-form validate-form">

              <div className="login-wrap-form-title">
                <span className="login-form-title">
                  {modoCadastro ? 'Cadastro' : 'Login'}
                </span>
                <br/>
                <span className="login-form-title subtitle-login">
                  {modoCadastro ? '' : 'Faça o login para acessar a plataforma'}
                </span>
              </div>
              
              
              <div className='login-inputs-form'>
                <div className="wrap-input-login validate-input" data-validate="Valid email is required: ex@abc.xyz">
                {modoCadastro ? 
                <input
                    className="input-login"
                    type="text"
                    name="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  /> 
                  : 
                  <input
                    className="input-login"
                    type="text"
                    name="email"
                    placeholder="Email / CPF"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  /> 
                  }
                  
                  <span className="focus-input-login"></span>
                  <span className="symbol-input-login">
                    <i className="fa fa-envelope" aria-hidden="true"></i>
                  </span>
                </div>

                {modoCadastro && (
                  <div className="wrap-input-login validate-input" data-validate="Valid email is required: ex@abc.xyz">
                  <input
                    className="input-login"
                    type="text"
                    name="cpf"
                    placeholder="CPF"
                    value={cpf}
                    onChange={(e) => setCpf(e.target.value)}
                  />
                  <span className="focus-input-login"></span>
                  <span className="symbol-input-login">
                    <i className="fa fa-envelope" aria-hidden="true"></i>
                  </span>
                </div>
                )}

                <div className="wrap-input-login validate-input" data-validate="Password is required">
                  <input
                    className="input-login"
                    type="password"
                    name="pass"
                    placeholder="Senha"
                    value={senha}
                    onChange={(e) => setSenha(e.target.value)}
                  />
                  <span className="focus-input-login"></span>
                  <span className="symbol-input-login">
                    <i className="fa fa-lock" aria-hidden="true"></i>
                  </span>
                </div>

                {modoCadastro && (
                  <div className="wrap-input-login validate-input" data-validate="Password is required">
                  <input
                    className="input-login"
                    type="password"
                    name="pass"
                    placeholder="Confirmar Senha"
                    value={confirmarSenha}
                    onChange={(e) => setConfirmarSenha(e.target.value)}
                  />
                  <span className="focus-input-login"></span>
                  <span className="symbol-input-login">
                    <i className="fa fa-lock" aria-hidden="true"></i>
                  </span>
                </div>
                )}


              <div className="container-login-form-btn">
                <button className="login-form-btn" onClick={modoCadastro ? handleCadastro : handleLogin}>
                  {modoCadastro ? 'Cadastrar' : 'Login'}
                </button>
              </div>

              {!modoCadastro && (
                <div className="text-center p-t-12">
                  <span className="txt1">Esqueci minha </span>
                  <a className="txt2 a-login cadastro" href="#">
                    Senha / Email
                  </a>
                </div>
              )}

              <div className="text-center p-t-136">
                <a className="txt2 a-login" onClick={() => setModoCadastro(!modoCadastro)}>
                  {modoCadastro ? 'Já tem uma conta? Faça login.' : 'Não tem uma conta? Cadastre-se.'}
                  <i className="fa fa-long-arrow-right m-l-5" aria-hidden="true"></i>
                </a>
              </div>
              </div>

            </form>
          </div>
        </div>
      </div>

    </div>
  )
}

export default Login