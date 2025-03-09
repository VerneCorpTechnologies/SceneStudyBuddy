import React, { useState } from "react";
import { TextField, Typography, Button, Box } from "@mui/material";
import MainCard from '../../../components/cards/MainCard';

const SamplePage = () => {
  const [sceneName, setSceneName] = useState("");

  return (
    <MainCard title="Create a scene">
      <Box display="flex" flexDirection="column" gap={2}>
        <TextField
          label="Scene Name"
          variant="outlined"
          fullWidth
          value={sceneName}
          onChange={(e) => setSceneName(e.target.value)}
        />
        <Typography variant="body2">
          Users will be able to upload a new scene here. They will upload a PDF, 
          which will trigger an API call to an AI model. The model will convert 
          the PDF into JSON, identifying the characters and corresponding dialogue. 
          Users will then select their character and the gender of the AI's character. 
          They will then save the scene and be prompted to rehearse.
        </Typography>
        <Button variant="contained" color="primary">
          Upload a PDF
        </Button>
      </Box>
    </MainCard>
  );
};

export default SamplePage;

