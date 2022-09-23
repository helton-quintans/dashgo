import {
  Button,
  Flex,
  Stack,
  Input,
  FormControl,
  FormLabel,
} from "@chakra-ui/react";
import { SubmitHandler, useForm } from "react-hook-form";

export default function Home() {
  const { register, handleSubmit, formState } = useForm({
    // resolver: yupResolver(signInFormSchema)
  });

  return (
    <Flex w="100vw" h="100vh" align="center" justify="center">
      <Flex
        as="form"
        width="100%"
        maxWidth={360}
        bg="gray.800"
        p="8"
        borderRadius={8}
        flexDir="column"
        // onSubmit={handleSubmit(handleSignIn)}
      >
        <Stack spacing="4">
          <FormControl>
            <FormLabel>Email</FormLabel>
            <Input
              focusBorderColor="pink.500"
              name="email"
              type="email"
              // label="E-mail"
              // error={errors.email}
              {...register("email")}
            />
          </FormControl>
          <FormControl>
            <FormLabel>Senha</FormLabel>
            <Input
              focusBorderColor="pink.500"
              name="password"
              type="password"
              // label="Senha"
              // error={errors.password}
              {...register("password")}
            />
          </FormControl>
        </Stack>

        <Button
          type="submit"
          mt="6"
          colorScheme="pink"
          size="lg"
          // isLoading={formState.isSubmitting}
        >
          Entrar
        </Button>
      </Flex>
    </Flex>
  );
}
