import { Flex, Box, Stack, Text, Link, Icon, LinkProps as ChakraLinkProps } from "@chakra-ui/react";
import { ElementType } from "react";

//!ElementType é passado assim -> ex.: <Icon as={RiDashboardLine} />
interface NavLinkProps extends ChakraLinkProps{
  icon: ElementType;
  children: string;
}

export function NavLink({ icon, children, ...rest }: NavLinkProps) {
  return (
    <Link display="flex" {...rest}>
      <Icon as={icon} fontSize="20" />
      <Text ml="4" fontWeight="medium">
        {children}
      </Text>
    </Link>
  );
}
