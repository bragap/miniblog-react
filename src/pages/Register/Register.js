import styles from "./Register.module.css";

import {useState, useEffect} from 'react'

function Register() {
  return (
    <div className={styles.register}>
        <h1>Cadastre-se para postar</h1>
        <p> Crie seu usuário e compartilhe suas histórias</p>
        <form>
            <label>
                <span>Informe seus dados:</span>
                <input type="text" name="displayName" required placeholder="Nome do usuário"/>
                <input type="email" name="email" required placeholder="Email do usuário"/>
                <input type="password" name="password" required placeholder="Senha do usuário"/>
                <input type="password" name="confirmPassword" required placeholder="Confirme sua senha"/>
            </label>
            <button className="btn">Cadastrar</button>
        </form>
        </div>
  )
}

export default Register