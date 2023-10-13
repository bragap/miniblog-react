import styles from "./Register.module.css";

import {useState, useEffect} from 'react'

import { useAuthentication } from "../../hooks/useAuthentication";

function Register() {

  const [displayName, setDisplayName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");

  const { createUser, error: authError, loading} = useAuthentication();

  const handleSubmit = async (e) =>{
    e.preventDefault();

    setError("");

    const user = {
      displayName,
      email,
      password
    }

    if(password !== confirmPassword){
      setError("Senhas não conferem");
      return;
    }

    const res = await createUser(user);

    console.log(res);
  };

  useEffect(() => {

    if(authError){
      setError(authError);
    }

  },[authError])
 
  return (
    <div className={styles.register}>
        <h1>Cadastre-se para postar</h1>
        <p> Crie seu usuário e compartilhe suas histórias</p>
        <form onSubmit={handleSubmit}>
            <label>
                <span>Informe seus dados:</span>
                <input type="text" name="displayName" required placeholder="Nome do usuário" value={displayName} onChange={(e) => setDisplayName(e.target.value)}/>
                <input type="email" name="email" required placeholder="Email do usuário"  value={email} onChange={(e) => setEmail(e.target.value)}/>
                <input type="password" name="password" required placeholder="Senha do usuário"  value={password} onChange={(e) => setPassword(e.target.value)}/>
                <input type="password" name="confirmPassword" required placeholder="Confirme sua senha"  value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)}/>
            </label>
             {!loading && <button  className="btn">Cadastrar</button>}
             {loading && <button disabled className="btn">Aguarde...</button>}
             {error && <p className="error">{error}</p>}
        </form>
        </div>
  )
}

export default Register