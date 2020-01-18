import React, { Component } from 'react'
import style from './style.css'
import { Grid } from '@material-ui/core';


class CustomButton extends Component {

    render(){
        var {id,i,name,height,width} = this.props;
        return (
        
        <Grid container justify="center" alignItems="center">	
          <Grid item xs={6} className = {style.button}>
       	  	<button height ={height} width = {width}>{name}</button>
       	  </Grid>
       	</Grid>
       	
            
        )
    }
}

export default CustomButton;