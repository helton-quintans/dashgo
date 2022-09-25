import { Text } from "@chakra-ui/react";

export function Logo() {
    return (
        <Text fontSize={["2xl", "3xl"]} fontWeight="bold" my="5" letterSpacing="tight" align="center">
        dashgo
        <Text as="span" color="pink.500" ml="1">
          .
        </Text>
      </Text>
    )
}