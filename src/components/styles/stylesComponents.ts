export const stylesMainBoxCard = (isSmallScreen: boolean) => ({
  display: "flex",
  flexDirection: "row",
  justifyContent: isSmallScreen ? "center" : "space-between",
  flexWrap: "wrap",
});

export const stylesCardCountryDetails = {
  width: "100%",
  height: { xs: "auto", md: "60vh" },
  mt: 3,
  display: "flex",
  flexDirection: { xs: "column", md: "row" },
  alignItems: "center",
};
