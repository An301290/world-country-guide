export const stylesNavBar = (isSmallScreen: boolean) => ({
  display: "flex",
  flexGrow: 1,
  justifyContent: "space-between",
  alignItems: "center",
  ml: isSmallScreen ? "auto" : 15,
  mr: isSmallScreen ? "auto" : 15,
  mb: isSmallScreen ? 2 : 0,
});
