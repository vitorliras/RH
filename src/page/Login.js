import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { addDoc,useDoc, getDoc, collection, doc, setDoc } from "firebase/firestore";
import { auth, firestore } from '../firebase';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';


const usersCollection = collection(firestore, 'users');
function Login() {

  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [confirmarSenha, setConfirmarSenha] = useState('');
  const [nome, setNome] = useState('');
  const [modoCadastro, setModoCadastro] = useState(false);
  const [senhaError, setSenhaError] = useState('');
  const [ConfirmarsenhaError, setConfirmarsetSenhaError] = useState('');
 


  // const handleLogin = async () => {
  //   try {
  //     signInWithEmailAndPassword(auth, email, senha)
  //     .then((userCredential) => {
  //       console.log(userCredential);
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //     });
  //     navigate('/');
  //   } catch (error) {
  //     console.error(error);
  //   }
  // };

  // Restante do seu código...

  const navigate = useNavigate(); // Use o hook useNavigate

  const handleLogin = async (e) => {
    try {
      e.preventDefault()
      signInWithEmailAndPassword(auth, email, senha)
        .then(async (userCredential) => {
          if (userCredential.user) {
            const userId = userCredential.user.uid;
            const userDocRef = doc(firestore, 'users', userId);
            
            const userDoc = await getDoc(userDocRef);
            if (userDoc.exists()) {
              const userData = userDoc.data();
              const userName = userData.name;
              if (userName) {
                // Redirecione para a página "Home" com o nome do usuário
                navigate('/', { state: { userName } });
              } else {
                // Redirecione para a página "Home" sem o nome do usuário
                navigate('/');
              }

              // Redirecione para a página "Home"
              // navigate('/');
            } else {
              console.log('Usuário não encontrado no Firestore');
            }
          }
        })
        .catch((error) => {
          console.log(error);
        });
    } catch (error) {
      console.error(error);
    }
  }


  const validatePassword = () => {
    if (senha.length < 8) {
      setSenhaError('A senha deve ter pelo menos 8 caracteres.');
    } else {
      setSenhaError('');
    }
    if(confirmarSenha != ''){
      if (senha !== confirmarSenha) {
        setConfirmarsetSenhaError('A senha e a confirmação de senha não correspondem.');
      }else{
        setConfirmarsetSenhaError('');
      }
    }
  };

  const handleCadastro = async (e) => {
    try {
      e.preventDefault();
      validatePassword();
  
      if (senhaError || ConfirmarsenhaError) {
        return;
      }
  
      createUserWithEmailAndPassword(auth, email, senha)
        .then(async (userCredential) => {
          if (userCredential.user) {
            const userDocRef = doc(firestore, "users", userCredential.user.uid);
            const userData = {
              name: nome, // Add the user's name to the userData object
            };
            await setDoc(userDocRef, userData);
          }
        })
        .catch((error) => {
          console.log(error);
        });
  
      alert('Cadastro realizado com sucesso! Faça o login.');
      setEmail('');
      setSenha('');
      setConfirmarSenha('');
      setNome('');
      setModoCadastro(false);
      navigate('/Login');
  
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <div>
      <div className="limiter">
        <div className="container-login">
          <div className="wrap-login">
            <div className="login-pic js-tilt" data-tilt>
              <img src="../logoRh.png" alt="IMG" />
            </div>

            <form className="login-form validate-form">
              <div className="login-wrap-form-title">
                <span className="login-form-title">
                  {modoCadastro ? 'Cadastro' : 'Login'}
                </span>
                <br />
                <span className="login-form-title subtitle-login">
                  {modoCadastro ? '' : 'Faça o login para acessar a plataforma'}
                </span>
              </div>

              <div className="login-inputs-form">
                <div className="wrap-input-login validate-input" data-validate="Valid email is required: ex@abc.xyz">
                  {modoCadastro ? (
                    <input
                      className="input-login"
                      type="text"
                      name="email"
                      placeholder="Email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  ) : (
                    <input
                      className="input-login"
                      type="text"
                      name="email"
                      placeholder="Email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  )}

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
                      name="Nome"
                      placeholder="Nome"
                      value={nome}
                      onChange={(e) => setNome(e.target.value)}
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
                    onBlur={validatePassword}
                  />
                  <span className="focus-input-login"></span>
                  <span className="symbol-input-login">
                    <i className="fa fa-lock" aria-hidden="true"></i>
                  </span>
                </div>

                {senhaError && (
                  <div className="error-message">{senhaError}</div>
                )}

                {modoCadastro && (
                  <div className="wrap-input-login validate-input" data-validate="Password is required">
                    <input
                      className="input-login"
                      type="password"
                      name="pass"
                      placeholder="Confirmar Senha"
                      value={confirmarSenha}
                      onChange={(e) => setConfirmarSenha(e.target.value)}
                      onBlur={validatePassword}
                    />
                    <span className="focus-input-login"></span>
                    <span className="symbol-input-login">
                      <i className="fa fa-lock" aria-hidden="true"></i>
                    </span>
                  </div>
                )}

                {ConfirmarsenhaError && (
                  <div className="error-message">{ConfirmarsenhaError}</div>
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
  );
}

export default Login;