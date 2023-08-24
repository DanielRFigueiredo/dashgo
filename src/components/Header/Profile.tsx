import { Avatar, Box, Flex, Text } from "@chakra-ui/react";

interface ProfileProps {
  showProfileData?: boolean;
}
export function Profile({ showProfileData = false }: ProfileProps) {
  return (
    <Flex align='center'>

      {showProfileData && (
        <Box mr='4' textAlign='center'>
          <Text>Daniel figueirdeo</Text>
          <Text color='gray.300' fontSize='small'>necoraio@hotmail.com</Text>
        </Box>
      )}

      <Avatar size='md' name="Daniel Figueiredo" />
    </Flex>
  )
}