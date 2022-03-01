import { makeStyles, Typography } from '@material-ui/core';
import React from 'react'
import Technologies from './Technologies';

const Skills = ({title,dark, id}) => {
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
       "& h3":{
        fontSize:"1.6",
        
        
      }
    },
    sectiondark: {
       background: "#333",
       color: "#fff",
       
    },
    sectioncontent:{
      marginTop: theme.spacing(6),
      "& h4":{
        marginBottom:theme.spacing(6),
        marginLeft: theme.spacing(3),
        margin: theme.spacing(5)
      }
    }
  }))
export default Skills
