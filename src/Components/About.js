import { Button, Card, CardActions, CardContent, CardMedia, makeStyles, Typography } from '@material-ui/core';
import rgcivitfoto from '../images/rgcivitfoto.jpeg'
import TypeWriterEffect from "react-typewriter-effect"
//import rgcivitcv from "../images/rgcivitcv.pdf"
import CVrgciviteng from "../images/CVrgciviteng.pdf"
import rgcivitcv2 from "../images/rgcivitcvesp.pdf"


const About = ({title,dark, id}) => {
    const classes =useStyles();
  return (
    <div className={`${classes.section} ${dark && classes.sectiondark}`}>
     <div className={classes.sectioncontent} id={id}>
       <Typography variant ="h3"  >{title}</Typography>
       <Card className={classes.card}>
          <CardMedia image={rgcivitfoto}className={classes.media} title="picture"/>
          <CardContent className={classes.cardcontent}>
            <TypeWriterEffect
            text="Hi!, my name is Rodrigo Guevara Civit"
            textStyle={{fontSize:"2rem", fontWeight:"700px", color:"tomato"}}
            startDelay={100}
            cursorColor="white"
            typeSpeed={100}
            />
             <TypeWriterEffect
            text=" Fullstack Web Developer"
            textStyle={{fontSize:"1.2rem", fontWeight:"500px"}}
            startDelay={5000}
            cursorColor="white"
            typeSpeed={100}
            />
            <Typography variant="h6" color="textSecondary">
            Im FullStack Web Developer, oriented mainly to Back-end, 
            being able to work in Front-end without any problem.
             I can work with the following technologies: React, Redux, Express,CSS, HTML, Node.js,  Firebase,
              Heroku, Git, Github, MaterialUI,  Sequelize and Postgres. I feel qualified to develop group projects and 
              thus be able to contribute everything I have learned so far.

            One of the greatest passions in my life has been technology, 
            so I really enjoy being able to work in this community, and always 
            with the objective of being able to grow in all aspects related to it. 
            Doing courses either self-taught or through companies; as well as, 
            learning from my colleagues and contributing what is necessary from my knowledge.
            </Typography>
            <CardActions>
              <Button variant="contained" 
              className={classes.pdfbutton}>
                <a href={rgcivitcv2}download>
                  Spanish C.V
                  
                </a>
                </Button>
                <Button variant="contained" 
              className={classes.pdfbutton2}>
                <a href={CVrgciviteng}download>
                  English C.V
                  

                </a>
                </Button>
          </CardActions>
          </CardContent>
         
       </Card>
     </div>
    </div>
  )
}

const useStyles = makeStyles((theme) =>({
    section:{
       minHeight: "100vh",
       margin:"5 auto",
      
       
    },
    sectiondark: {
       background: "#333",
       color: "#fff",
       
    },
    sectioncontent:{
      maxWidth: "100vw",
      
      margin:"0 auto",
      
      
      
     " & h3":{
      [theme.breakpoints.down("sm")]:{
        fontSize:"3rem",
      },
   
     }
    },
    card:{
      height:"100vh",
      display:"flex",
      objectFit:"cover",
      marginTop: theme.spacing(0),
      position:"relative",

    },
    media:{
      width:"1000px",
      height:"auto",
      borderRadius:"10px",
      margin: theme.spacing(4)
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
      position:"flex",
      display:"flex",
      marginTop:theme.spacing(15),
      justifyContent:"center",
      marginRight:"5rem",
      
      [theme.breakpoints.down("sm")]:{
        position:"auto",
        padding: theme.spacing(0.1),
        
      },
      backgroundColor:"tomato",
      padding: theme.spacing(1),
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
      position:"flex",
      display:"flex",
      justifyContent:"center",
      marginTop:theme.spacing(15),
      marginRight:"0rem",
     
      [theme.breakpoints.down("sm")]:{
       position:"auto",
       padding: theme.spacing(0.1),
       
      },
      backgroundColor:"blue",
      padding: theme.spacing(1),
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

export default About
