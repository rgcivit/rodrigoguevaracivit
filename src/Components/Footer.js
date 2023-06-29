
import { Grid } from "@material-ui/core";
import { Box } from "@material-ui/core";
import { Container } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";


export default function Footer() {
    const classes = useStyles();
    return <footer >
        
        <Box >
   <Container maxWidth= 'lg' className={classes.container}>
            <Grid container spacing= {5}  >
                <Grid item xs={3} sm={4}>
                    <Box borderBottom={3} borderRadius ={5} className={classes.box1}>
                    <h4> Rodrigo Guevara Civit- Copyright © 2022</h4></Box>
                    
                </Grid>
              
            </Grid>
    </Container>
        </Box>
        </footer>
}
 const useStyles = makeStyles((theme) =>({
    container:{
        alignItems:"center",
        marginLeft:"66vw",
        paddingBottom:"2vh",
        fontFamily:"'Roboto', sans-serif",
        paddingTop:"8vh",
        color:"balck",
   
         [theme.breakpoints.down("sm")]:{
               display:"none",
        
    },
    
}
}))