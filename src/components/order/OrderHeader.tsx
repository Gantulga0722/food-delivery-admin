import { Search } from "@mui/icons-material";
import { InputBase, Stack, Typography } from "@mui/material";
import { styled, alpha } from "@mui/material/styles";
import SearchIcon from "@mui/icons-material/Search";

export const OrderHeader = () => {
  const Search = styled("div")(({ theme }) => ({
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    "&:hover": {
      backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(3),
      width: "auto",
    },
  }));

  const SearchIconWrapper = styled("div")(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  }));

  const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: "inherit",
    "& .MuiInputBase-input": {
      padding: theme.spacing(1, 1, 1, 0),
      // vertical padding + font size from searchIcon
      paddingLeft: `calc(1em + ${theme.spacing(4)})`,
      transition: theme.transitions.create("width"),
      width: "100%",
      [theme.breakpoints.up("md")]: {
        width: "20ch",
      },
    },
  }));

  return (
    <Stack
      padding={"20px 24px 20px 24px"}
      justifyContent={"space-between"}
      direction={"row"}
      bgcolor={"#FFF"}
      alignItems={"center"}
      borderRadius={"10px 10px 0 0"}
    >
      <Stack width={"650px"} height={"36px"}>
        <Typography
          fontSize={"20px"}
          fontWeight={700}
          lineHeight={"28px"}
          letterSpacing={"-0.5px"}
        >
          Admin dashboard
        </Typography>
      </Stack>
      <Stack
        width={"400px"}
        borderRadius={"8px"}
        border={"1px solid #ECEDF0)"}
        bgcolor={"#F7F7F8"}
      >
        <Search>
          <SearchIconWrapper>
            <SearchIcon />
          </SearchIconWrapper>
          <StyledInputBase
            placeholder="Search"
            inputProps={{ "aria-label": "search" }}
          />
        </Search>
      </Stack>
    </Stack>
  );
};
