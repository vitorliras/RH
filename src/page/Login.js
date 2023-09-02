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
          <div className="login100-pic js-tilt" data-tilt>
            <img src='../logo192.png' alt="IMG" />
          </div>

          <form className="login100-form validate-form">
            <span className="login100-form-title">
              {modoCadastro ? 'Cadastro' : 'Member Login'}
            </span>

            <div className="wrap-input100 validate-input" data-validate="Valid email is required: ex@abc.xyz">
              <input
                className="input100"
                type="text"
                name="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <span className="focus-input100"></span>
              <span className="symbol-input100">
                <i className="fa fa-envelope" aria-hidden="true"></i>
              </span>
            </div>

            <div className="wrap-input100 validate-input" data-validate="Password is required">
              <input
                className="input100"
                type="password"
                name="pass"
                placeholder="Password"
                value={senha}
                onChange={(e) => setSenha(e.target.value)}
              />
              <span className="focus-input100"></span>
              <span className="symbol-input100">
                <i className="fa fa-lock" aria-hidden="true"></i>
              </span>
            </div>

            <div className="container-login100-form-btn">
              <button className="login100-form-btn" onClick={modoCadastro ? handleCadastro : handleLogin}>
                {modoCadastro ? 'Cadastrar' : 'Login'}
              </button>
            </div>

            {!modoCadastro && (
              <div className="text-center p-t-12">
                <span className="txt1">Forgot</span>
                <a className="txt2 cadastro" href="#">
                  Username / Password?
                </a>
              </div>
            )}

            <div className="text-center p-t-136">
              <p className="txt2 p-login" onClick={() => setModoCadastro(!modoCadastro)}>
                {modoCadastro ? 'Já tem uma conta? Faça login.' : 'Não tem uma conta? Cadastre-se.'}
                <i className="fa fa-long-arrow-right m-l-5" aria-hidden="true"></i>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>

        </div>
    )
}

export default Login