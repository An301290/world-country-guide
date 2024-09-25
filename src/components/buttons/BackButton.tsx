import React from "react";
import { Box, Button } from "@mui/material";
import ArrowBackOutlinedIcon from "@mui/icons-material/ArrowBackOutlined";

type BackButtonProps = {
  handleBack: () => void;
};
const BackButton: React.FC<BackButtonProps> = ({ handleBack }) => {
  return (
    <Box sx={{ mt: 3 }}>
      <Button
        variant="outlined"
        onClick={handleBack}
        sx={{ borderColor: "lightgray", color: "gray" }}
      >
        <ArrowBackOutlinedIcon fontSize="small" sx={{ mr: 1 }} />
        Back
      </Button>
    </Box>
  );
};

export default BackButton;
