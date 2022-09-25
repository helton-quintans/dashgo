import { Flex, Text, Input, Icon, HStack, Box, Avatar} from "@chakra-ui/react";
import {
  RiNotificationLine,
  RiSearchLine,
  RiUserAddLine,
} from "react-icons/ri";

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
          _placeholder={{ color: "gray.400" }}
          px="4"
          mr="4"
        />

        <Icon as={RiSearchLine} fontSize="20" />
      </Flex>

      <Flex align="center" ml="auto">
        <HStack  spacing="4" mx="8" pr="8" py="1" color="gray.300" borderColor="gray.700" borderRightWidth={1}>
          <Icon as={RiNotificationLine} fontSize="20" />
          <Icon as={RiUserAddLine} fontSize="20" />
        </HStack>

        <Flex
          align="center"
        >
          <Box mr="4" textAlign="right">
            <Text>Helton Quintans</Text>
            <Text color="gray.300" fontSize="s">helton.quit@gmail.com</Text>
          </Box>

          <Avatar size="md" name="Helton Quintãns" src='https://github.com/helton-quintans.png'/>

        </Flex>
      </Flex>
    </Flex>
  );
}
