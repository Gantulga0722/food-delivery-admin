import { ButtonBase, Stack, Typography } from "@mui/material";
import { useBag } from "@/components/context/BagContext";

export const OrderFood = () => {
  const { bagItem } = useBag();
  return (
    <Stack
      padding={"24px"}
      bgcolor={"#FFF"}
      borderRadius={"16px"}
      boxShadow={"0px 0px 20px 0px rgba(0, 0, 0, 0.05)"}
      height={"612px"}
    >
      <Stack gap={"16px"}>
        {bagItem.map((item, index) => (
          <Stack key={index} gap={"16px"} direction={"row"}>
            <Stack
              width={"184px"}
              height={"121px"}
              sx={{
                backgroundImage: `URL(${item.imagePath})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            ></Stack>
            <Stack gap={"8px"}>
              <Typography fontSize={"18px"} fontWeight={600} color={"#000"}>
                {item.foodName}
              </Typography>
              <Typography fontSize={"18px"} fontWeight={600} color={"#18BA51"}>
                {item.price}₮
              </Typography>
              <Stack gap={"4px"} direction={"row"}>
                {item.ingredients.map(
                  (
                    ingr:
                      | string
                      | number
                      | boolean
                      | React.ReactElement<
                          any,
                          string | React.JSXElementConstructor<any>
                        >
                      | Iterable<React.ReactNode>
                      | React.ReactPortal
                      | Promise<React.AwaitedReactNode>
                      | null
                      | undefined,
                    index: React.Key | null | undefined
                  ) => (
                    <Typography key={index}>{ingr}</Typography>
                  )
                )}
              </Stack>
            </Stack>
          </Stack>
        ))}
      </Stack>
      <Stack
        direction={"row"}
        height={"48px"}
        padding={"8px 16px"}
        gap={"10px"}
      >
        <Stack>
          <Typography fontSize={"18px"} fontWeight={400} color={"#5E6166"}>
            Нийт төлөх дүн
          </Typography>
          <Typography fontSize={"18px"} fontWeight={700} color={"#121316"}>
            Some total numbers will be herer
          </Typography>
        </Stack>
        <ButtonBase>
          <Stack
            height={"48px"}
            padding={"8px 16px"}
            justifyContent={"center"}
            alignItems={"center"}
            borderRadius={"4px"}
            bgcolor={"#EEEFF2"}
          >
            <Typography
              fontSize={"16px"}
              fontWeight={400}
              color={"rgba(28, 32, 36, 0.24"}
            >
              Захиалах
            </Typography>
          </Stack>
        </ButtonBase>
      </Stack>
    </Stack>
  );
};
