import React from "react";
import  ButtonOut  from "./UI/button/ButtonOut";
import  InputOut  from "./UI/input/InputOut";
const Register = ()=>{
    return(
        <div className="window-out">
            <h1>Вход</h1>
            <h5>Login</h5>
            <InputOut type="text" placeholder="Логин"/>
            <h5>Password</h5>
            <InputOut type="password" placeholder="Пароль"/>
            <ButtonOut >Войти</ButtonOut>
        </div>
    )
}
export default Auth