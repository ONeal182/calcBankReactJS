import React from 'react'
import classes from  './depositGraph.module.scss'



let heightCylinderShadow = {
    height: "69px",
    marginTop: "-35px"
    

}

const DepositGraph = props => (
<div className={classes.calc__rightSide__content__st__left}>
    <h2 className={classes.calcSum}  >+ {props.normalCity.toLocaleString()} Р</h2>
    <span className={classes.persent}>6.5 % годовых</span>
    <div
        className={`${classes.chart_cylinder} ${classes.chart_cylinder_green_shadow}`}
        id="normalMoney"
        style= {{
            height:140 - Math.round(((100-parseInt(props.normalCity)/parseInt(props.moneyCity)*100)/2)*2) + 'px',
            zIndex: 1


        }}
        
        
        >
     </div>
    <div
         className={`${classes.chart_cylinder} ${classes.chart_cylinder_white_shadow} ${classes.depozit}`}
        
        style={heightCylinderShadow}
        >
    </div>
    <p  className={classes.namePersent}>Депозит 
        <span className={classes.namePersent__quest}>?</span>
    </p>
</div>
)

export default DepositGraph