import React, { ReactNode } from "react";
import { Box, Container, PaletteMode } from "@mui/material";

type LayoutProps = {
  mode: PaletteMode;
  handleThemeChange: () => void;
  children: ReactNode;
};

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <Container>
        <Box
          sx={{
            marginTop: "100px",
          }}
        >
          {children}
        </Box>
      </Container>
    </>
  );
};

export default Layout;
