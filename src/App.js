import { createMuiTheme, makeStyles, MuiThemeProvider } from "@material-ui/core";
import About from "./Components/About";
import Contact from "./Components/Contact";
import Navbar from "./Components/Navbar";
import Skills from "./Components/Skills";
import MyWork from "./Components/MyWork";
import Footer from "./Components/Footer";
import Cursos from "./Components/Cursos"

import { purple } from "@material-ui/core/colors";


const theme = createMuiTheme({
  palette:{
   primary:{main:purple[500]},
   secondary:{main:"#333"}
  }
})

function App() {
  const classes =useStyles();
  return (
    <MuiThemeProvider theme={theme}>
      <div className={classes.root}>
     <Navbar />
     <About title ="ACERCA DE MI"  id="about" dark={false} />
     <Skills title ="MIS HABILIDADES" id="skills" dark={true}/>
     <MyWork title ="MIS PROYECTOS" id="work" dark={false}/>
     <Contact title ="CONTACTO" id="contact" dark={true}/>
     
     
     <Footer />
      </div>
    </MuiThemeProvider>
    
    
  );
}
const useStyles = makeStyles((theme) =>({
  root:{
  
  }
}))

export default App;
