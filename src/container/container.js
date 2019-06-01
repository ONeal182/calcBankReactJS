import React, {Component} from 'react'
import './container.scss'
import InputMoney from '../componets/inputMoney/inputMoney'
import InputData from '../componets/inputData/inputData'
import RadioButtons from '../componets/radioButtons/radioButtons'

class Container extends Component{


    render () {

        return (
            <div className="wrapper">
      <div className="calc">
        <div className="calc__leftSide">
          <div className="calc__leftSide__content" >
              <div className="calc__leftSide__content__wrapper"  >
                <h2>Калькулятор доходности</h2>
                <div className="calc__leftSide__content__wrapper__controls">
                  <InputMoney />
                  <InputData />
                  <RadioButtons />
                 </div>
              </div>
            </div>
        </div>
        <div className="calc__rightSide">
          <div className="calc__rightSide__content">
            <div className="calc__rightSide__content__st">
                
            </div>
            <div className="calc__rightSide__content__button">

              <input type="button" value="Инвестировать"/>
                
            </div>
          </div>
        </div>
      </div>
    </div>
        )
        
    }
}

export default Container