import React from 'react'
import './radioButtons.module.scss'

const RadioButtons = props => {

    

    return(
        
        <div className="calc__leftSide__content__wrapper__controls__radios__radio"  >
           <input onChange={props.onTakeValue } defaultChecked={props.checkBox} value={props.persent} type="radio" name="rate" id="r1" /> 
           <span>{props.radioName}</span>
       </div>
    )


}
export default RadioButtons