import React from 'react'
import './inputMoney.module.scss'

const InputMoney = props => (
<div className="calc__leftSide__content__wrapper__controls__control">
    <div className="calc__leftSide__content__wrapper__controls__control__title">
        <span className="nameInput">Сумма</span>
        <p>2500000 ₽</p>
    </div>
        <input type="range"  className="myinput" id="myinput1" min="100000" step="10000" max="5000000" />  
</div> 
)

export default InputMoney