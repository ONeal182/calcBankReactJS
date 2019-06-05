import React from 'react'
import classes from  './cityMoneyGraph.module.scss'



let heightCylinderShadow = {
    height: "69px",
    marginTop: "-35px"
    

}

const CityMoneyGraph = props => (

    
    <div className={classes.calc__rightSide__content__st__right}>
    <h2 className={classes.calcSum}>+ {props.moneyCity.toLocaleString()}</h2>
    <span className={classes.persent}>25 % годовых</span>
    <div
        className={`${classes.chart_cylinder} ${classes.chart_cylinder_green_shadow}`}
        id="normalMoney"
        style= {{
            height:140 + Math.round(((100-parseInt(props.normalCity)/parseInt(props.moneyCity)*100)/2)*2.8) + 'px',
            zIndex: 1


        }}
        
        
        >
     </div>
    <div
         className={`${classes.chart_cylinder} ${classes.chart_cylinder_white_shadow} ${classes.depozit}`}
        
        style={heightCylinderShadow}
        >
    </div>
    <p className={classes.namePersent}>Город Денег</p>
</div>
)

export default CityMoneyGraph