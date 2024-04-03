import { ButtonBase, Stack, Typography } from "@mui/material";
import { CategoryIcon } from "@/components/icons";

export const FoodCardCategory = ({ category }: { category: string }) => {
  return (
    <Stack
      paddingY={"16px"}
      justifyContent={"space-between"}
      alignItems={"center"}
      direction={"row"}
    >
      <Stack direction={"row"} alignItems={"center"}>
        <CategoryIcon />
        <Stack height={"30px"}>
          <Typography fontSize={"22px"} fontWeight={700} color={"#272727"}>
            {category}
          </Typography>
        </Stack>
      </Stack>
      <ButtonBase onClick={() => {}}>
        <Stack gap={"5px"} direction={"row"}>
          <Stack width={"109px"} height={"30px"} justifyContent={"center"}>
            <Typography fontSize={"14px"} fontWeight={400} color={"#18BA51"}>
              Бүгдийг харах
            </Typography>
          </Stack>
          <Stack width={"15px"} height={"30px"} justifyContent={"center"}>
            <Typography fontSize={"14px"} fontWeight={400} color={"#18BA51"}>
              {">"}
            </Typography>
          </Stack>
        </Stack>
      </ButtonBase>
    </Stack>
  );
};

