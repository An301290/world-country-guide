import React from "react";
import { Box, Button } from "@mui/material";

type FixedButtonProps = {
  handleScrollToTop: () => void;
  label: string;
};

const ScrollToTopButton: React.FC<FixedButtonProps> = ({
  handleScrollToTop,
  label,
}) => {
  return (
    <Box
      sx={{
        position: "fixed",
        bottom: 16,
        right: 16,
      }}
    >
      <Button
        sx={{
          borderColor: "lightgray",
          color: "gray",
        }}
        variant="outlined"
        onClick={handleScrollToTop}
      >
        {label}
      </Button>
    </Box>
  );
};

export default ScrollToTopButton;
