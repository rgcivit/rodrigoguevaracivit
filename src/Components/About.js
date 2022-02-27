import { Button, Card, CardActions, CardContent, CardMedia, makeStyles, Typography } from '@material-ui/core';
import rgcivitfoto from '../images/rgcivitfoto.jpeg'
import TypeWriterEffect from "react-typewriter-effect"
import rgcivitcv from "../images/rgcivitcv.pdf"


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
            text="Hola, mi nombre es Rodrigo Guevara Civit"
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
            Soy Full Stack Web Developer,
            puedo trabajar con las siguientes
            tecnologías: React, Redux
            ,Express , Sequelize, CSS, HTML y
            Postgres. Me siento capacitado
            para desarrollar proyectos en
            grupo o individualmente.
            Me considero una persona
            proactiva, siempre con ganas de
            seguir aprendiendo nuevas
            tecnologías. Me gusta mucho trabajar en grupo y poder
            aprender lo que mi equipo puede aportarme, como así también 
            poder aportar mis conocimientos.
            </Typography>
          </CardContent>
          <CardActions>
              <Button variant="contained" 
              className={classes.pdfbutton}>
                <a href={rgcivitcv}download>
                Download C.V

                </a>
                </Button>
          </CardActions>
       </Card>
     </div>
    </div>
  )
}



const useStyles = makeStyles((theme) =>({
    section:{
       minHeight: "100vh",
      
    },
    sectiondark: {
       background: "#333",
       color: "#fff",
    },
    sectioncontent:{
      maxWidth:"80vw",
      margin:"0 auto",
   
    },
    card:{
      height:"70vh",
      display:"flex",
      objectFit:"cover",
      marginTop: theme.spacing(6),
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
        [theme.breakpoints.down("sm")]:{
          display:"none",
        },
      },
    },
    pdfbutton:{
      position:"absolute",
      bottom:"1rem",
      right:"4rem",
      [theme.breakpoints.down("sm")]:{
        bottom:"1rem",
        right:"1rem",
      },
      backgroundColor:"tomato",
      padding: theme.spacing(3),
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
