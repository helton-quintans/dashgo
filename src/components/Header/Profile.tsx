import { Avatar, Box, Flex, Text } from "@chakra-ui/react"

export function Profile() {
    return (
        <Flex
          align="center"
        >
          <Box mr="4" textAlign="right">
            <Text>Helton Quintans</Text>
            <Text color="gray.300" fontSize="s">helton.quit@gmail.com</Text>
          </Box>

          <Avatar size="md" name="Helton Quintãns" src='https://github.com/helton-quintans.png'/>

        </Flex>
    )
}