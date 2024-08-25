

import { Box, Typography, Container ,useTheme} from "@mui/material";

const FooterContent = () => {
const theme=useTheme()

  return (
    // Use Headroom for the footer and configure its behavior
    
      <Box
        component="footer"
        sx={{
          py: 3,
          px: 2,
          backgroundColor:theme.palette.primary.main,
        }}
      >
        <Container maxWidth="lg" color="primary" >
          <Typography variant="body2" color="white" align="center">
            
            © TopStory || Tharindu Damintha
          </Typography>
        </Container>
      </Box>
 
  );
};

export default FooterContent;
