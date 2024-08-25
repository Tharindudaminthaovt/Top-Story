import { Container, Grid } from "@mui/material";
import BodyContent from "./Components/BodyContent/BodyContent";
import FooterContent from "./Components/FooterContent/FooterContent";
import HeaderContent from "./Components/HeaderContent/HeaderContent";
import NewsCard from "./Components/NewsCard/NewsCard";
import "./App.css";

function App() {
  return (
    <>
      <HeaderContent />
      <BodyContent>
        <Container sx={{ marginY: 5 }}>
          <Grid container spacing={4}>
            <NewsCard />
          </Grid>
        </Container>
        <FooterContent />
      </BodyContent>
    </>
  );
}

export default App;
