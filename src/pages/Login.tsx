import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  Checkbox,
  Stack,
  Button,
  Heading,
  Text,
  useColorModeValue,
  InputLeftElement,
  InputGroup,
} from "@chakra-ui/react";
import { useState } from "react";
import { FaRegEyeSlash, FaRegEye } from "react-icons/fa";
import { useAppDispatch, useAppSelector } from "../app/hooks";
import { selectLogin, userLogin } from "../app/features/auth/loginSlice";
import { Navigate } from "react-router-dom";

// interface IProps {}

const Login = ({ isAuth }) => {
  if (isAuth) return <Navigate to={"/"} replace />;

  const dispatch = useAppDispatch();
  const [showPassword, setShowPassword] = useState(false);
  const loginLoading = useAppSelector(selectLogin);
  const [inputs, setInputs] = useState<{
    identifier: string;
    password: string;
  }>({
    identifier: "",
    password: "",
  });

  const formSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    dispatch(userLogin(inputs));
  };

  const inputsHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setInputs({ ...inputs, [name]: value });
  };

  return (
    <Flex
      minH={"calc(100dvh - 300px)"}
      align={"center"}
      justify={"center"}
      bg={useColorModeValue("gray.50", "gray.800")}
    >
      <Stack spacing={8} mx={"auto"} maxW={"lg"}>
        <Stack align={"center"}>
          <Heading fontSize={"4xl"}>Sign in to your account</Heading>
        </Stack>
        <Box
          onSubmit={formSubmit}
          as="form"
          rounded={"lg"}
          bg={useColorModeValue("white", "gray.700")}
          boxShadow={"lg"}
          p={8}
        >
          <Stack spacing={4}>
            <FormControl id="email">
              <FormLabel>البريد لالكتروني</FormLabel>
              <Input
                name="identifier"
                onChange={inputsHandler}
                type="email"
                value={inputs.identifier}
                isRequired
              />
            </FormControl>
            <FormControl id="password" isRequired>
              <FormLabel>Password</FormLabel>
              <InputGroup>
                <Input
                  name="password"
                  onChange={inputsHandler}
                  value={inputs.password}
                  p={0}
                  pr={5}
                  type={showPassword ? "text" : "password"}
                />
                <InputLeftElement h={"full"}>
                  <Button
                    p={0}
                    fontSize={16}
                    variant={"ghost"}
                    onClick={() =>
                      setShowPassword((showPassword) => !showPassword)
                    }
                  >
                    {showPassword ? <FaRegEye /> : <FaRegEyeSlash />}
                  </Button>
                </InputLeftElement>
              </InputGroup>
            </FormControl>

            <Stack spacing={10}>
              <Stack
                direction={{ base: "column", sm: "row" }}
                align={"start"}
                justify={"space-between"}
              >
                <Checkbox>Remember me</Checkbox>
                <Text color={"blue.400"}>Forgot password?</Text>
              </Stack>
              <Button
                isLoading={loginLoading.loading}
                loadingText="تسجيل الدخول"
                type="submit"
                bg={"blue.400"}
                color={"white"}
                _hover={{
                  bg: "blue.500",
                }}
              >
                Sign in
              </Button>
            </Stack>
          </Stack>
        </Box>
      </Stack>
    </Flex>
  );
};

export default Login;
