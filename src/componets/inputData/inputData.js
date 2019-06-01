import React from 'react'
import './inputData.module.scss'

const InputData = props => (
<div class="calc__leftSide__content__wrapper__controls__control">
    <div class="calc__leftSide__content__wrapper__controls__control__title">
        <span class="nameInput">Срок</span>
        <p>24 мес.</p>
    </div>

    <input type="range" name=""  class="myinput" id="myinput2"  min="6" max="60" step="6" />

</div>
)

export default InputData