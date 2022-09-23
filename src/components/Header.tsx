import { Flex, Text } from "@chakra-ui/react";

export function Header() {
  return (
    <Flex as="header" w="100%" maxWidth={1480} h="20" mx="4" px="6" mt="4">
      <Text fontSize="3xl" letterSpacing="tight">
        dashgo
        <Text as="span" color="pink.500" ml="1">
          .
        </Text>
      </Text>
    </Flex>
  );
}
