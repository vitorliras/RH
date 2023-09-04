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
        <div className="container-login100">
          <div className="wrap-login100">
            {/* <div className='test'></div> */}
            {/* <div className='test1'></div> */}

            <div className="login100-pic js-tilt" data-tilt>
              <img src='../logo192.png' alt="IMG" />
            </div>

            <form className="login100-form validate-form">

              <div className="login-wrap-form-title">
                <span className="login100-form-title">
                  {modoCadastro ? 'Cadastro' : 'Login'}
                </span>
                <br/>
                <span className="login100-form-title subtitle-login">
                  {modoCadastro ? '' : 'Faça o login para acessar a plataforma'}
                </span>
              </div>
              
              
              <div className='login-inputs-form'>
                <div className="wrap-input100 validate-input" data-validate="Valid email is required: ex@abc.xyz">
                {modoCadastro ? 
                <input
                    className="input100"
                    type="text"
                    name="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  /> 
                  : 
                  <input
                    className="input100"
                    type="text"
                    name="email"
                    placeholder="Email / CPF"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  /> 
                  }
                  
                  <span className="focus-input100"></span>
                  <span className="symbol-input100">
                    <i className="fa fa-envelope" aria-hidden="true"></i>
                  </span>
                </div>

                {modoCadastro && (
                  <div className="wrap-input100 validate-input" data-validate="Valid email is required: ex@abc.xyz">
                  <input
                    className="input100"
                    type="text"
                    name="cpf"
                    placeholder="CPF"
                    value={cpf}
                    onChange={(e) => setCpf(e.target.value)}
                  />
                  <span className="focus-input100"></span>
                  <span className="symbol-input100">
                    <i className="fa fa-envelope" aria-hidden="true"></i>
                  </span>
                </div>
                )}

                <div className="wrap-input100 validate-input" data-validate="Password is required">
                  <input
                    className="input100"
                    type="password"
                    name="pass"
                    placeholder="Senha"
                    value={senha}
                    onChange={(e) => setSenha(e.target.value)}
                  />
                  <span className="focus-input100"></span>
                  <span className="symbol-input100">
                    <i className="fa fa-lock" aria-hidden="true"></i>
                  </span>
                </div>

                {modoCadastro && (
                  <div className="wrap-input100 validate-input" data-validate="Password is required">
                  <input
                    className="input100"
                    type="password"
                    name="pass"
                    placeholder="Confirmar Senha"
                    value={confirmarSenha}
                    onChange={(e) => setConfirmarSenha(e.target.value)}
                  />
                  <span className="focus-input100"></span>
                  <span className="symbol-input100">
                    <i className="fa fa-lock" aria-hidden="true"></i>
                  </span>
                </div>
                )}


              <div className="container-login100-form-btn">
                <button className="login100-form-btn" onClick={modoCadastro ? handleCadastro : handleLogin}>
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