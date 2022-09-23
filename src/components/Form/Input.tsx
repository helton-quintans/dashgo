import { Input as ChakraInput, FormControl, FormLabel, InputProps as ChakraInputPros } from "@chakra-ui/react";

interface InputProps extends ChakraInputPros {
    name: string;
    label: string;
}

export function Input({ name, label, ...rest }: InputProps) {
  return (
    <FormControl>
      {!! label && <FormLabel htmlFor={name}>{label}</FormLabel>}
      <ChakraInput
        id="email"
        name="email"
        type="email"
        focusBorderColor="pink.500"
        bgColor="gray.900"
        variant="filled"
        _hover={{
            bgColor:"gray.900"
        }}
        size="lg"
        {...rest}
      />
    </FormControl>
  );
}
