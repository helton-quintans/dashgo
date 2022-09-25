import { Avatar, Box, Flex, Text } from "@chakra-ui/react";

interface ProfilePros {
  showProfileData?: boolean;
}
export function Profile({ showProfileData }: ProfilePros) {
  return (
    <Flex align="center">
      {showProfileData && (
        <Box mr="4" textAlign="right">
          <Text>Helton Quintans</Text>
          <Text color="gray.300" fontSize="s">
            helton.quit@gmail.com
          </Text>
        </Box>
      )}

      <Avatar
        size="md"
        name="Helton Quintãns"
        src="https://github.com/helton-quintans.png"
      />
    </Flex>
  );
}
