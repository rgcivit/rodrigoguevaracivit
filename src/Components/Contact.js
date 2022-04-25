import { Button, Card, CardMedia, Grid, Link, makeStyles,Paper,Radio, TextField,Input
, Typography } from '@material-ui/core';
import { purple } from '@material-ui/core/colors';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
import WhatsAppIcon from '@material-ui/icons/WhatsApp';
import emailjs from 'emailjs-com';

import React, { useState } from 'react'




const Contact = ({title,dark, id}) => {
  const classes =useStyles();
  function sendEmail(e) {
    e.preventDefault();
    emailjs.sendForm('service_6j1wnzj', 'template_ri0w178', e.target, 'T74a96cFKIlGJM5L9')
    .then((result) => {
      console.log(result.text);
    }, (error) => {
      console.log(error.text);
    });
    alert('Mensaje enviado');
    e.target.reset();
  }
  
  return (
    
    <div className={`${classes.section} ${dark && classes.sectiondark}`}>
     <div className={classes.sectioncontent} id={id}>
       <Typography variant ="h3">{title}</Typography>
       <Card className={classes.root2}>
         <div>
         <Link href='https://github.com/rgcivit'>
       <GitHubIcon className={classes.github} />
         </Link>
         </div>
         <div>
           <Link href='https://wa.me/542612161271'>
             <WhatsAppIcon className={classes.whatsapp}/>
           </Link>
         </div>
         <div>
       <Link href='https://www.linkedin.com/in/rodrigo-guevara-civit-43713599/'>
       <LinkedInIcon className={classes.linked}/>
       </Link>
         </div>
       </Card>
       <Paper className= {classes.root}>
          <div className={classes.titleandchoices}>
       <Typography variant ="h5">PUEDES CONTACTARME</Typography>
       <div className ={classes.choices}>
         <Typography color='textSecondary'variant ="body2" component="p"> Envíame un mail</Typography>
                
        </div>
          </div>
          <form  onSubmit={sendEmail} className = {classes.form}>
            <Grid>
            <Grid className={classes.grid}  >
            <TextField label="Subject" placeholder='Ingresa el asunto'variant='standard' name='subject' fullWidth required/>
            </Grid>
            <Grid className={classes.grid}  >
            <TextField label="Tu nombre" placeholder='Ingresa tu primer nombre'variant='standard' name='name' fullWidth required/>
            </Grid>
            <Grid className={classes.grid}  >
            <TextField label="Tu apellido" placeholder='Ingresa tu apellido'variant='standard' name='lastname' fullWidth required/>
            </Grid>
            <Grid className={classes.grid}>
            <TextField type='email' label="Tu e-mail" placeholder='Ingresa tu mail'variant='standard'name='email' fullWidth required/>
            </Grid>
            <Grid className={classes.grid}>
            <TextField label="Escribe un mensaje" multiline rows={8} placeholder='escribe tu mensaje'variant='outlined' name='message' fullWidth required/>
            </Grid>
            </Grid>
            <Grid className={classes.button} >
              <button type='submit'  value='send Message' >Submit</button>
            </Grid>
          </form>
       </Paper>
     </div>
  </div>
  )
  }

const useStyles = makeStyles((theme) =>({
    section:{
      
      minHeight: "100vh",
      display:"flex",
      flexDirection:"column",
      justifyContent:"flex-start",
      alignItems:"center",
    },
    sectiondark: {
       background: "#333",
       color: "#fff",
    },
    root:{
      marginTop: theme.spacing(4),
      background:"tomato",
      color:"#fff",
      fontSize: "1.2rem",
      maxWidth:"500px",
      display:"flex",
      flexDirection:"column",
      justifyContent:"space-between",
      padding:theme.spacing(4),
      "& button":{
        backgroundColor:"#fff",
        color:"tomato",
        fontWeight:900,
        fontSize:"1.2rem",
        marginTop:theme.spacing(2),
      },
      "& button:hover":{
        backgroundColor:theme.palette.primary.main,
        color:"purple",
      }
    },
    root2:{
      height:"10vh",
      background:"tomato",
      display:"flex",
      objectFit:"cover",
      marginTop: theme.spacing(6),
      position:"relative",
     [theme.breakpoints.down('sm')]: {
      marginTop: theme.spacing(4),
      maxWidth:"100%",
  }
},
    sectioncontent:{
      maxWidth:"70vw",
        
    },
    titleandchoices:{
      "& h5":{
        marginTop:theme.spacing(1),
      }
    },
    form:{
      display:"flex",
      flexDirection:"column",
      "& input":{
        marginBottom:theme.spacing(4)
        
      }

    },
    linked:{
        width:"60px",
        height:"auto",
        borderRadius:"15px",
        margin: theme.spacing(1),
        marginTop:theme.spacing(0),
        marginLeft: theme.spacing(15),
        [theme.breakpoints.down('sm')]: {
          marginLeft: theme.spacing(4.5),
          marginTop: theme.spacing(0),
      }
    },
      github:{
        width:"40px",
        height:"auto",
        borderRadius:"15px",
        margin: theme.spacing(2),
        marginLeft: theme.spacing(2),
        [theme.breakpoints.down('sm')]: {
          marginTop: theme.spacing(1),
          marginLeft: theme.spacing(1),
      }
    },
      whatsapp:{
        width:"50px",
        height:"auto",
        borderRadius:"15px",
        margin: theme.spacing(1),
        marginLeft: theme.spacing(11),
        [theme.breakpoints.down('sm')]: {
          marginTop: theme.spacing(0),
          marginLeft: theme.spacing(6),
      }
    },
    media3:{
        width:"60px",
        height:"auto",
        borderRadius:"15px",
        margin: theme.spacing(1),
        marginLeft: theme.spacing(25)
    },
    choices:{
      marginBottom: theme.spacing(2)
    },
    grid:{
      marginBottom: theme.spacing(1),
      display:"flex",
      
    },
    button:{
      display:"flex",
      justifyContent:'center',
      marginTop: theme.spacing(2),
      "& button":{
        backgroundColor:"white",
        color:"tomato",
        fontWeight:900,
        fontSize:"1.6rem",
        fontFamily: "cursive",
        padding:theme.spacing(1),
      },
    }
    
  }))

export default Contact
