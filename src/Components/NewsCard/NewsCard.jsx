import { Grid, CircularProgress } from "@mui/material";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { styled } from "@mui/material/styles";
import { Link } from "react-router-dom";
import useFetchData from "../../Utils/useFetchData.jsx";
import { useContext } from "react";
import { SearchVal } from "../SearchBar/SearchBar.jsx";

const StyledImage = styled("img")({
  width: "100%",
  height: "auto",
  padding: "1px",
  borderRadius: "5px",
});

const NewsCard = () => {
  const { news, loading, error } = useFetchData();

  const search = useContext(SearchVal);
console.log(search)
  if (loading)
    return (
      <Box
        sx={{
          display: "flex",
          width: "100%",
          justifyContent: "center",
          mt: "30px",
        }}
      >
        <CircularProgress />
      </Box>
    );

  if (error) {
    return (
      <div>
        <p>Error: {error.message}</p>
      </div>
    );
  }

  return (
    <>
      {news
        .filter((article) => {
          return search.toLowerCase() === ""
            ? article
            : article.title.toLowerCase().includes(search.toLowerCase());
        })
        .map((article, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Link
              to={`/news/${index}`}
              state={{ article }}
              style={{ textDecoration: "none" }}
            >
              <Paper
                elevation={3}
                sx={{
                  cursor: "pointer",
                  height: "100%",
                  transition: "transform 0.3s, box-shadow 0.3s",
                  "&:hover": {
                    transform: "scale(1.05)",
                    boxShadow: "0 8px 16px rgba(0, 0, 0, 0.2)",
                  },
                  // Additional styles for accessibility and design
                  ":focus": {
                    outline: "3px solid #3f51b5", // Accessible focus outline
                  },
                }}
              >
                <StyledImage src={article.urlToImage || "Image"} alt="image" />
                <Box paddingX={1}>
                  <Box sx={{ alignItems: "center" }}>
                    <Typography variant="h6" component="h2">
                      {article.title}
                    </Typography>
                    {/* Date */}
                  </Box>
                  <Box sx={{ display: "flex", alignItems: "center" }}>
                    <Typography variant="body3" component="p">
                      By {article.author || "Unknown"} - {article.source.name}
                    </Typography>
                  </Box>
                  <Typography variant="body2" component="p">
                    {new Date(article.publishedAt).toLocaleDateString("en-GB", {
                      day: "2-digit",
                      month: "short",
                      year: "numeric",
                    })}
                  </Typography>
                  <Box
                    sx={{ display: "flex", alignItems: "center" }}
                    marginTop={3}
                  >
                    {article.description}
                  </Box>
                </Box>
              </Paper>
            </Link>
          </Grid>
        ))}
    </>
  );
};

export default NewsCard;
