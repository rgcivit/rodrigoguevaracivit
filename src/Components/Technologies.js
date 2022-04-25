import React from 'react'
import html from '../images/html.png'
import css from '../images/css.png'
import js from '../images/js.png'
import materialui from '../images/materialui.png'
import react2 from '../images/react2.png'
import postgres from '../images/postgres.png'
import redux from '../images/redux.png'
import { Timeline, TimelineConnector, TimelineContent, TimelineDot, TimelineItem, TimelineOppositeContent, TimelineSeparator } from '@material-ui/lab'
import { makeStyles, Paper, Typography } from '@material-ui/core'
import StarRating from './StarRating'




const Technologies = () => {
    const classes= useStyles()
    const skills=[
        {
          
            src:html,
            title:"HTML 5",
            stars:4,
        },
        {
            
            src:css,
            title:"CSS 3",
            stars:4,
        },
        {
            
            src:js,
            title:"Javascript ES6",
            stars:4,
        },
        {
            
            src:react2,
            title:"React js",
            stars:4,
        },
        {
        
        src:postgres,
        title:"Postgres SQL",
        stars:4,
    },
        {
            
            src:redux,
            title:"React Redux",
            stars:4,
        },
        {
            
            src:materialui,
            title:"Material UI",
            stars:3,
        },
        
    ]

  return (
    <Timeline position='center' className={classes.timeline}>
      {
         skills.map(({  src,title,stars},index) =>(
            <TimelineItem key={index}>
                <TimelineOppositeContent>
                    
                </TimelineOppositeContent>
                <TimelineSeparator>
                <img src={src} alt={title} className={classes.customlogo}></img>
                <TimelineConnector/>
                </TimelineSeparator>
                <TimelineContent>
                    <Paper elevation={6} className={classes.paper}>
                        <Typography variant="h6"component='h1'>
                        {title}
                        </Typography>
                        <StarRating stars={stars}/>
                    </Paper>
                </TimelineContent>
            </TimelineItem>
         )) 
      }
    </Timeline>
  )
}

const useStyles = makeStyles((theme) =>({
    timeline: {
        transform: "rotate(-90deg)",
        
      },
    customlogo:{
        width:"60px",
        transform:"rotate(90deg)",
        paddingInlineStart:"15px",
  
    },
    paper:{
        padding:"16px 16px",
        maxWidth:"200px",
    }
  }))
  

export default Technologies
