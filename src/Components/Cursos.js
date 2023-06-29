import { makeStyles, Typography } from '@material-ui/core';
import React from 'react'
import Technologies from './Technologies';

const Cursos = ({title,dark, id}) => {
    const classes =useStyles();
  return (
    <div className={`${classes.section} ${dark && classes.sectiondark}`}>
     <div className={classes.sectioncontent} id={id}>
       <Typography variant ="h3">{title}</Typography>
       <Technologies/>
     </div>
    </div>
  )
}

const useStyles = makeStyles((theme) =>({
    section:{
       minHeight: "100vh",
       fonfamily:"'Roboto', sans-serif",
    },
    sectiondark: {
       background: "#333",
       color: "#fff",
    },
    sectioncontent:{
      marginTop: theme.spacing(3),
      
      "& h3":{
        marginBottom:theme.spacing(6),
        marginLeft: theme.spacing(3),
        margin: theme.spacing(1),
        fontFamily:'body', 
       
       
      }
    }
  }))
export default Cursos