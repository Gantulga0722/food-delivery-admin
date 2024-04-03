import { FoodCateCrud } from "@/components/foodcatecrud/FoodCateCrud";
import { Container, Stack } from "@mui/material";

const foodCateCRUD = () => {
  return (
    <Stack
      width={"100%"}
      sx={{ backgroundColor: "#FFF" }}
      alignItems={"flex-start"}
      paddingTop={"100px"}
      bgcolor={""}
      height={"content"}
    >
      <Container maxWidth={"xl"} sx={{ width: "1306px" }}>
        <Stack gap={"30px"}>
          <FoodCateCrud />
        </Stack>
      </Container>
    </Stack>
  );
};
export default foodCateCRUD;
