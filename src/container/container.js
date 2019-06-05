import React, {Component} from 'react'
import './container.scss'
import InputMoney from '../componets/inputMoney/inputMoney'
import InputData from '../componets/inputData/inputData'
import RadioButtons from '../componets/radioButtons/radioButtons'
import DepositGraph from '../componets/depositGraph/depositGraph'
import CityMoneyGraph from '../componets/cityMoneyGraph/cityMoneyGraph'

class Container extends Component{

  state = {
    moneyValue: 2500000,
    dataValue: 30,
    arrayRadioButtons: [
      {name:'Консервативный', check: true, persent: 0.08},
      {name: 'Сбалансированный', check: false, persent: 0.18},
      {name: 'Рискованный', check: false, persent: 0.25}
    ],
    activePersent: 0.08,
    moneyCity: 20000,
    normalCity: 20000
  }
  takeValue = value => {
    this.setState( {
     activePersent: value
     }, () => {
       this.calcSum()
     }
    )
}
componentDidMount(){
    this.calcSum();
}

calcSum = () =>{
  this.setState({
    moneyCity: Math.round(this.state.moneyValue*Math.pow(1 + this.state.activePersent/12, this.state.dataValue) - this.state.moneyValue)
  })

  this.setState({
    normalCity: Math.round(this.state.moneyValue*Math.pow(1 + 0.065/12, this.state.dataValue) - this.state.moneyValue)
  })
  
}


changeMoney = (event) =>{
  this.setState ({
    moneyValue: parseInt(event.target.value)
  })
}

changeData = (event) => {
  this.setState({
    dataValue: parseInt(event.target.value)
  })
  
}



  

    render () {

        return (
            <div className="wrapper">
      <div className="calc">
        <div className="calc__leftSide">
          <div className="calc__leftSide__content" >
              <div className="calc__leftSide__content__wrapper" onClick={this.calcSum}>
                <h2>Калькулятор доходности</h2>
                <div className="calc__leftSide__content__wrapper__controls">
                  <InputMoney onChangeMoney = {this.changeMoney} moneyValue={this.state.moneyValue}/>
                  <InputData onChangeData={this.changeData} dataValue= {this.state.dataValue}/>
                  <div className="calc__leftSide__content__wrapper__controls__radios">
                    { this.state.arrayRadioButtons.map((radio, index) => {
                      return (
                        <RadioButtons
                          key={index}
                          checkBox = {radio.check}
                          onTakeValue = { (event) => {this.takeValue(event.target.value)} }
                          radioName={radio.name}
                          persent={radio.persent}
                   />
                      )
                    }) }
                  </div>
                  
                   
                 </div>
              </div>
            </div>
        </div>
        <div className="calc__rightSide">
          <div className="calc__rightSide__content">
            <div className="calc__rightSide__content__st">
                <DepositGraph moneyCity={this.state.moneyCity} normalCity={this.state.normalCity}/>
                <CityMoneyGraph moneyCity={this.state.moneyCity} normalCity={this.state.normalCity}/>
                
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