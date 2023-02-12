import React from 'react'
import ButtonOut from './UI/button/ButtonOut'
import InputOut from './UI/input/InputOut'

const Menu = () => {
  return (
    <div className='menu-block'>
        <ButtonOut>Начать игру</ButtonOut> 
        <ButtonOut>Подключиться к игре</ButtonOut>
        <div className='connect-block'>
            <InputOut placeholder="id player" />
            <ButtonOut>Войти</ButtonOut>
        </div>
        <ButtonOut>Настройки</ButtonOut>
        <ButtonOut>Выход</ButtonOut>
        {/* <ButtonOut>Out</ButtonOut>
        <ButtonOut>Reg</ButtonOut> */}


    
    </div>
    
  )
}

export default Menu