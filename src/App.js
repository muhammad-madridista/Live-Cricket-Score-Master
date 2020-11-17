import React,{ Fragment, useEffect, useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/Navbar";
import MyCard from "./components/MyCard";
import { getMatches } from "./api/api";
import { Container, Grid, Typography } from "@material-ui/core";
function App() {
  const [matches, setMatches] = useState([]);

  useEffect(() => {
    getMatches()
      .then((data) => {
        console.log(data.matches);
        setMatches(data.matches);
      })
      .catch((error) => {});
  }, []);

  return (
    <div className="App">
      <Navbar></Navbar>
      <Typography variant="h3" style={{marginTop:20}}>
      Welcome to Cricket App
      </Typography>

      <Container>
        <Grid container>
          <Grid sm="2"></Grid>
          <Grid sm="8">
          {
          
              { matches } && matches.map((match) => {
                return(
                <Fragment>
              { match.type=="Twenty20" ? (<MyCard key={match.unique_id} match={match} />)
              : (""
                )
              }

               </Fragment>);
            })
          }
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}

export default App;
