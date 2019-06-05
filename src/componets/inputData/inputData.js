import React from 'react'
import './inputData.module.scss'

const InputData = props => (
<div className="calc__leftSide__content__wrapper__controls__control">
    <div className="calc__leftSide__content__wrapper__controls__control__title">
        <span className="nameInput">Срок</span>
        <p>{props.dataValue} мес.</p>
    </div>

    <input type="range" onChange = {props.onChangeData} value={props.dataValue} style={{background: 'linear-gradient(to right, #4bd1a0 0%, #4bd1a0 '+((props.dataValue)/0.54-10) +'%, #f9f9f9 ' + ((props.dataValue)/0.54-10) + '%, #f9f9f9 100%)'}}   className="myinput" id="myinput2"  min="6" max="60" step="6" />

</div>
)

export default InputData