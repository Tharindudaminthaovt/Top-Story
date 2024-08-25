import { useLocation, useNavigate } from "react-router-dom";
import { Typography, Container } from "@mui/material";
import Button from "@mui/material/Button";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { styled } from "@mui/material/styles";

const StyledImage = styled("img")({
  width: "100%",
  height: "auto",
  margin: "20px 0",
});

const NewsDetail = () => {
  // Using useLocation to retrieve the state passed through Link
  const location = useLocation();
  const navigate = useNavigate();
  const article = location.state?.article;

  if (!article) {
    return <Typography variant="h6">No news article found!</Typography>;
  }
  const handleBackClick = () => {
    navigate(-1);
  };
  const handleVisitArticleClick = () => {
    if (article && article.url) {
      window.open(article.url, "_blank");
    } else {
      console.error("Article URL is not available.");
    }
  };
  return (
    <Container sx={{ marginY: 5 }}>
      <Button
        variant="outlined"
        startIcon={<ArrowBackIcon />}
        onClick={handleBackClick}
        sx={{ mb: 3 }}
      >
        Back
      </Button>

      <Typography variant="h4" gutterBottom>
        {article.title}
      </Typography>
      <StyledImage src={article.urlToImage || "Image"} alt={article.title} />
      <Typography variant="body2" component="p">
        {new Date(article.publishedAt).toLocaleDateString("en-GB", {
          day: "2-digit",
          month: "short",
          year: "numeric",
        })} - {article.author || "Unknown"}
      </Typography>
      <Typography variant="body1" style={{ marginTop: "20px" }}>
        {article.content
          ? `${article.content.substring(0, 200)}...`
          : "No content available."}
      </Typography>
      <Button
        variant="outlined"
        onClick={handleVisitArticleClick}
        sx={{ display: "block", margin: "20px auto" }}
      >
        Visit Full Article
      </Button>
    </Container>
  );
};

export default NewsDetail;
