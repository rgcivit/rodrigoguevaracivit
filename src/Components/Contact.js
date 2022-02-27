import { Button, Card, CardMedia, Grid, Link, makeStyles,Paper,Radio, TextField, Typography } from '@material-ui/core';
import { purple } from '@material-ui/core/colors';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
import WhatsAppIcon from '@material-ui/icons/WhatsApp';

import React, { useState } from 'react'


const Contact = ({title,dark, id}) => {
  const classes =useStyles();
 
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
          <form className = {classes.form}>
            <Grid>
            <Grid className={classes.grid}  >
            <TextField label="Tu nombre" placeholder='Ingresa tu primer nombre'variant='standard'fullWidth required/>
            </Grid>
            <Grid className={classes.grid}  >
            <TextField label="Tu apellido" placeholder='Ingresa tu apellido'variant='standard'fullWidth required/>
            </Grid>
            <Grid className={classes.grid}>
            <TextField type='email' label="Tu e-mail" placeholder='Ingresa tu mail'variant='standard'fullWidth required/>
            </Grid>
            <Grid className={classes.grid}>
            <TextField label="Escribe un mensaje" multiline rows={8} placeholder='escribe tu mensaje'variant='outlined'fullWidth required/>
            </Grid>
            </Grid>
            <Grid >
              <Button type='submit' variant="contained" component="a" href="mailto:rgcivitt@gmail.com" fullWidth>Submit</Button>
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
      background:"white",
      display:"flex",
      objectFit:"cover",
      marginTop: theme.spacing(6),
      position:"relative",
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
        marginLeft: theme.spacing(6)
      },
      github:{
        width:"40px",
        height:"auto",
        borderRadius:"15px",
        margin: theme.spacing(2),
        marginLeft: theme.spacing(1)
      },
      whatsapp:{
        width:"50px",
        height:"auto",
        borderRadius:"15px",
        margin: theme.spacing(1),
        marginLeft: theme.spacing(8)
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
      
    }
    
  }))

export default Contact
