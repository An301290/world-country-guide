export const stylesMainBoxCard = (isSmallScreen: boolean) => ({
  display: "flex",
  flexDirection: "row",
  justifyContent: isSmallScreen ? "center" : "space-between",
  flexWrap: "wrap",
});
