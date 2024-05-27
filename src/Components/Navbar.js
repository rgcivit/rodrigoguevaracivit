
import {AppBar, IconButton, List, makeStyles, Toolbar,Drawer, Divider,ListItem, ListItemIcon, Typography} from '@material-ui/core'
import rgclogo from "../images/rgclogo.png"
import {Link,animateScroll as scroll} from "react-scroll"
import  InfoTwoToneIcon  from '@material-ui/icons/InfoTwoTone'
import  EmojiObjectsTwoToneIcon  from '@material-ui/icons/EmojiObjectsTwoTone'
import  BuildTwoToneIcon  from '@material-ui/icons/BuildTwoTone'
import  ContactMailTwoToneIcon  from '@material-ui/icons/ContactMailTwoTone'
import MenuIcon from "@material-ui/icons/Menu"
import CancelIcon from "@material-ui/icons/Cancel"
import {useState} from "react"





const Navbar = () => {
    const classes =useStyles();
    const [open, setOpen]= useState(false)
    const  links =[
        {
            id:"about",
            text:"Acerca de mi",
            icon:<InfoTwoToneIcon fontSize='large' className={classes.about}/>
        },
        {
          id:"skills",
          text:" Mis Habilidades",
          icon:<EmojiObjectsTwoToneIcon fontSize='large' className={classes.ligth}/>
      },
      {
          id:"work",
          text:"Mis Proyectos",
          icon:<BuildTwoToneIcon fontSize='large' className={classes.work} />
      },
   
      {
          id:"contact",
          text:"Contacto",
          icon:<ContactMailTwoToneIcon fontSize='large'className={classes.contact} />
      },
     
     
      ]
      const scrollToTop =()=>{
          scroll.scrollToTop()
      }
  return (
      <>
    <AppBar position='sticky' className={classes.root}>
      <Toolbar className={classes.toolbar}>
      <Typography variant="h6" component="div" sx={{ flexGrow: 1 }} >
          <img style={{height:'80px', widht:'100%'}} src={rgclogo} className={classes.logo} onClick={scrollToTop} alt="failed to load"/>{"  "}
            
          </Typography>

        <List className={classes.menu}>
            {
                links.map(({id,text}, index) =>(
                    <Link key= {index}
                     to={id} 
                     spy={true} 
                     activeClass="active"
                     soomth={true} 
                     duration={500} 
                     offset={-90}>
                     {text}</Link>
                     
                ))
                                  
            }
         
        </List>
      
        <IconButton edge="end" 
        className={classes.menubutton}
        onClick={() => setOpen(!open)}>
        <MenuIcon fontSize="large"/>
        </IconButton>
      </Toolbar>
    </AppBar>
    <Drawer anchor ="right" open ={open} onClose={() => setOpen(false)} >
      <IconButton  onClick= {() => setOpen(false)}className={classes.cancelicon}>
          <CancelIcon fontSize='large'/>
      </IconButton >
      <Divider/>
      {
                links.map(({id,text,icon}, index) =>(
                    <Link key= {index}
                    className = {classes.sidebar}
                     to={id} 
                     spy={true} 
                     activeClass="active"
                     soomth={true} 
                     duration={500}
                     offset={-80}
                     onClick={() => setOpen(!open)} >
                     <ListItem component="h5">
                         <span> 
                             <ListItemIcon>
                                 {icon}
                             </ListItemIcon>
                         </span>{text}
                     </ListItem>
                     </Link>
                ))
            
            }
            
    </Drawer>
    </>
  )
}

const useStyles = makeStyles((theme) =>({
    root:{
        backgroundColor: "#fafafa",
        top:0,
        left:0,
        right:0,
        zIndex:999,
    },
    toolbar:{
        display:"flex",
        justifyContent:'flex-start',
        alignItems:'center'
    },
    logo:{
        height: "6rem",
        width:"10rem",
        "&:hover":{
            cursor: "pointer"
            

        }
        
    },
    ligth:{
        color:"#ffcc00",
    },
    about:{
        color:"blue",
        
    },
    work:{
        color:"green"
    },
    contact:{
        color:"red"
    },
    courses:{
        color:"green",
    },
    menu:{
        
        [theme.breakpoints.down("sm")]:{
            display:"none"
        },
        "& a":{
            color:"#333",
            fontSize: "1.4rem",
            fontWeight: "bold",
            marginLeft: theme.spacing(3)

        },
        "& a:hover": {
            cursor:"pointer",
            color:"tomato",
            borderBottom:"3px solid tomato",

        }
    },
    menubutton:{
        display:"none",
        [theme.breakpoints.down("sm")]:{
            display:"block",
            color:"tomato",
            position:"absolute",
            top:0,
            right:10,
        }
    },
    cancelicon:{
        color:"tomato",
        position:"absolute",
        top:0,
        right:10,
    },
    sidebar:{
        width: "40vw",
        [theme.breakpoints.down("sm")]:{
            width:"70vw",
            marginLeft:"-10vw"
        },
        "& h5":{
            margin: theme.spacing(8,0,0,4),
            fontSize:"1.4rem",
            color:"#333",
            fontWeight:"bold",
        },
        "& h5:hover":{
            color:"tomato",
            cursor:"pointer"
        }
    },
   
  }))

export default Navbar;
