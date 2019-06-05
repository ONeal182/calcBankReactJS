import React from 'react'
import './inputMoney.module.scss'

const InputMoney = props => {

    return (
        <div className="calc__leftSide__content__wrapper__controls__control">
    <div className="calc__leftSide__content__wrapper__controls__control__title">
        <span className="nameInput">Сумма</span>
        <p>{props.moneyValue.toLocaleString()}</p>
    </div>
        <input type="range" style={{background: 'linear-gradient(to right, #4bd1a0 0%, #4bd1a0 '+ ((props.moneyValue)/50000) +'%, #f9f9f9' + ((props.moneyValue)/50000) + '%, #f9f9f9 100%)'}} value={props.moneyValue} onChange={props.onChangeMoney} className="myinput" id="myinput1" min="100000" step="10000" max="5000000" />  
</div> 
)
    
}

export default InputMoney