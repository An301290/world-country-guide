export const mainBoxLayout = (isSmallScreen: boolean) => ({
  display: "flex",
  flexDirection: isSmallScreen ? "column" : "row",
  justifyContent: "space-between",
  width: "100%",
  px: 0,
});

export const stylesBoxComponents = (isSmallScreen: boolean) => ({
  width: "100%",
  maxWidth: 250,
  ml: isSmallScreen ? "auto" : 0,
  mr: isSmallScreen ? "auto" : 0,
  mb: isSmallScreen ? 2 : 0,
});

export const styleCircularProgress = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  height: "100vh",
};

export const styleError = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  height: "100vh",
};
