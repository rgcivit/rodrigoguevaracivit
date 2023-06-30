import { Button, Card, CardActions, CardContent, CardMedia, makeStyles, Typography } from '@material-ui/core';
import TypeWriterEffect from "react-typewriter-effect"
import Automating  from "../images/Automating.png"

const Cursos = ({title,dark, id}) => {
    const classes =useStyles();
  return (
    <div className={`${classes.section} ${dark && classes.sectiondark}`}>
     <div className={classes.sectioncontent} id={id}>
       <Typography variant ="h3"  >{title}</Typography>
       <Card className={classes.card1}>
         <CardMedia component="img" 
           image="https://cdn.qwiklabs.com/w6SvpNmypM97HS%2FYpPjpZFiuBMTK6%2BA0w0Cdh6k3L%2B4%3D"
           height="400"
           alt="una descripción"
         />
                
       </Card>
       <Card className={classes.card2}>
        <CardMedia component="img"
        image="https://blogger.googleusercontent.com/img/a/AVvXsEhjb-rhbb_ugpSjuXmBhPvO1stUw5jwfX1OpPgbqvTNtln5Z8xGzTRRNKSqNCxjx9TYMhArmczqrTRWEzNSfQkTtMoXj19_NhnD-h9TwpGzr09lYlw1HfhWiLvV0ecZRYxiOlEifsUobZRDG0YdFE_cw24PJMicekq56gZeIZ2-4bACHEY1kUjyQe_ANg=w1200-h630-p-k-no-nu"
        height="400"
        alt="una descripción"
        />
       </Card>
       <Card className={classes.card3}>
        <CardMedia component="img"
        image="https://cdn.qwiklabs.com/kb4Z%2FYtRsI7XnCAtFqPN1z5XG4bVqyPchpNUsT0vKXc%3D"
        height="400"
        alt="una descripción"
        />
       </Card>
       <Card className={classes.card4}>
        <CardMedia component="img"
        image="https://cdn.qwiklabs.com/d02fQm%2B4K6cbZ5a2WW0cF6JHjo6kig906ob0L%2BmDBCc%3D"
        height="400"
        alt="una descripción"
        />
       </Card>
       <Card className={classes.card5}>
        <CardMedia component="img"
        image="https://cdn.qwiklabs.com/bMEg141CerCvo9arG5PyzByibkdSG2J09PbpCIt%2BBFo%3D"
        height="400"
        alt="una descripción"
        />
       </Card>
       <Card className={classes.card6}>
        <CardMedia component="img"
        image="https://cdn.qwiklabs.com/bMEg141CerCvo9arG5PyzByibkdSG2J09PbpCIt%2BBFo%3D"
        height="400"
        alt="una descripción"
        />
       </Card>
     </div>
    </div>
  )
}



const useStyles = makeStyles((theme) =>({
    section:{
       minHeight: "100vh",
       Width:"100"
    },
    sectiondark: {
       background: "#333",
       color: "#fff",
    },
    sectioncontent:{
      maxWidth:"100vw",
      margin:"3",
      height:"120vw",
      
     " & h3":{
      [theme.breakpoints.down("sm")]:{
        fontSize:"3rem",
      },
   
     }
    },
    card1:{
      height:"auto",
      width:"400px", 
      marginTop: theme.spacing(5),
      position:"relative",
      left:"2rem"

    },
    card2:{
        height:"auto",
        width:"400px", 
        marginTop: theme.spacing(5),
        position:"relative",
        left:"36rem",
        bottom:"27.4rem"
  
      },
      card3:{
        height:"auto",
        width:"400px", 
        marginTop: theme.spacing(5),
        position:"relative",
        left:"2rem",
        bottom:"27.4rem"
  
      },
      card4:{
        height:"auto",
        width:"400px", 
        marginTop: theme.spacing(5),
        position:"relative",
        left:"36rem",
        bottom:"55rem"
  
      },
      card5:{
        height:"auto",
        width:"400px", 
        marginTop: theme.spacing(5),
        position:"relative",
        left:"2rem",
        bottom:"50rem"
  
      },
      card6:{
        height:"auto",
        width:"400px", 
        marginTop: theme.spacing(5),
        position:"relative",
        left:"36rem",
        bottom:"77.5rem"
  
      },
    
    
    cardcontent:{
      marginTop: theme.spacing(1.2),
     
      "& h6":{
        marginTop:theme.spacing(6),
        fontSize:"1.1rem",
        [theme.breakpoints.down("sm")]:{
          display:"none",
        },
      },
    },
    pdfbutton:{
      position:"absolute",
      bottom:"0.25rem",
      right:"2rem",
      [theme.breakpoints.down("sm")]:{
        position:"absolute",
        padding: theme.spacing(0.1),
      },
      backgroundColor:"tomato",
      padding: theme.spacing(2),
      "&:hover":{
        backgroundColor:"#fff",

      },
      "& a":{
        color:"#fff",
        textDecoration:"none",
        fontWeight:900,
      },
      "& a:hover":{
        color:"tomato"
      }
    },
    pdfbutton2:{
      position:"absolute",
      bottom:"0.25rem",
      right:"13rem",
      [theme.breakpoints.down("sm")]:{
       position:"absolute",
       padding: theme.spacing(0.1),
       right:"10rem",
      },
      backgroundColor:"blue",
      padding: theme.spacing(2),
      "&:hover":{
        backgroundColor:"#fff",

      },
      "& a":{
        color:"#fff",
        textDecoration:"none",
        fontWeight:900,
      },
      "& a:hover":{
        color:"tomato"
      }
    },
  }))

export default Cursos