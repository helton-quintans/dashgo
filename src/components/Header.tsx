import { Flex, Text, Input, Icon } from "@chakra-ui/react";
import { RiSearchLine } from "react-icons/ri"

export function Header() {
  return (
    <Flex as="header" w="100%" maxWidth={1480} h="20" mx="4" px="6" mt="4">
      <Text fontSize="3xl" fontWeight="bold" mt="4" letterSpacing="tight">
        dashgo
        <Text as="span" color="pink.500" ml="1">
          .
        </Text>
      </Text>

      <Flex
        as="label"
        flex="1"
        py="4"
        px="8"
        ml="6"
        maxWidth={400}
        alignSelf="center"
        position="relative"
        bgColor="gray.800"
        borderRadius="full"
      >
        <Input
          variant="unstyled"
          color="gray.50"
          placeholder="Buscar na plataforma"
          _placeholder={{color: "gray.400"}}
          px="4"
          mr="4"
        />

        <Icon as={RiSearchLine} fontSize="20"/>

      </Flex>
    </Flex>
  );
}
