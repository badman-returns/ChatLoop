import React, { useState, useRef, useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import { Flex, Box, Heading, FormControl, FormLabel, Input, Button, Text, Spacer, useToast } from '@chakra-ui/react';
import { useUserAuthentication } from '../../context/authContext';

type InputElement = React.ChangeEvent<HTMLInputElement>;

const Login: React.FC = () => {

    const [isLogin, setIsLogin] = useState<boolean>(true);
    const [isGuest, setIsGuest] = useState<boolean>(true);
    const [name, setName] = useState<string>("");
    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const [confirmPassword, setConfirmPassword] = useState<string>("");

    const { signUp, signIn, user } = useUserAuthentication();
    const navigate = useNavigate();
    const toast = useToast()
    const nameRef = useRef() as React.MutableRefObject<HTMLInputElement>;
    const emailRef = useRef() as React.MutableRefObject<HTMLInputElement>;
    const passRef = useRef() as React.MutableRefObject<HTMLInputElement>;
    const confirmRef = useRef() as React.MutableRefObject<HTMLInputElement>;

    const setRegister = () => {
        if (emailRef?.current.value !== null || emailRef?.current.value !== "") {
            emailRef.current.value = "";
        }
        if (passRef?.current.value !== null || passRef?.current.value !== "") {
            passRef.current.value = ""
        }
        setIsLogin(false);
        setEmail("");
        setPassword("");
        setConfirmPassword("");
    }

    const setLogin = () => {
        if (nameRef?.current.value !== null || nameRef.current.value !== "") {
            nameRef.current.value = "";
        }
        if (emailRef?.current.value !== null || emailRef?.current.value !== "") {
            emailRef.current.value = "";
        }
        if (passRef?.current.value !== null || passRef?.current.value !== "") {
            passRef.current.value = ""
        }
        if (confirmRef?.current.value !== null || confirmRef?.current.value !== "") {
            confirmRef.current.value = ""
        }
        setIsLogin(true);
        setEmail("");
        setPassword("");
        setConfirmPassword("");
    }

    const setGuest = () => {
        setIsGuest(true);
        handleLogin();
    }

    const handleRegister = async (): Promise<any> => {
        if (password === confirmPassword) {
            try {
                await signUp(email, password, name);
                navigate('/login');
            } catch (err) {
                console.log(err);
            }
        }
        else {
            toast({
                title: 'Password Mismatch.',
                description: "Password and Confirm Password mismatch",
                status: 'error',
                duration: 4000,
                isClosable: true,
                position: 'bottom-right'
            })

        }
    }

    const handleLogin = async (): Promise<any> => {
        try {
            await signIn(isGuest ? process.env.REACT_APP_GUEST_EMAIL : email, isGuest ? process.env.REACT_APP_GUEST_PASSWORD : password);
            navigate('/');
        } catch (err) {
            console.log(err);
            toast({
                title: 'Incorrect Password.',
                description: `${err}`,
                status: 'error',
                duration: 4000,
                isClosable: true,
                position: 'bottom-right'
            })
        }
    }

    useEffect(() => {
        if (user) {
            navigate('/');
        }
    });
    return (
        <Flex width="full" align="center" justifyContent="center">
            <Box p={10} mt={10}>
                <Box textAlign="center" m={4}>
                    <Heading>Welcome to Chatloop</Heading>
                </Box>
                <Box p={10} maxW='lg' minW='md' borderWidth='1px' borderRadius='lg' overflow='hidden' boxShadow="xl">
                    <Box textAlign='center' mb={4}>
                        <Heading>{isLogin ? 'Login' : 'Register'}</Heading>
                    </Box>
                   {!isLogin && <Box display='flex' alignItems='baseline'>
                        <FormControl>
                            <FormLabel htmlFor='name'>Name</FormLabel>
                            <Input id='name' type='text' ref={nameRef} onInput={(e: InputElement) => setName(e.target.value)} />
                        </FormControl>
                    </Box>}
                    <Box display='flex' alignItems='baseline'>
                        <FormControl>
                            <FormLabel htmlFor='email'>Email address</FormLabel>
                            <Input id='email' type='email' ref={emailRef} onInput={(e: InputElement) => setEmail(e.target.value)} />
                        </FormControl>
                    </Box>
                    <Box display='flex' alignItems='baseline'>
                        <FormControl>
                            <FormLabel htmlFor='password'>Password</FormLabel>
                            <Input id='password' type='password' ref={passRef} onInput={(e: InputElement) => setPassword(e.target.value)} />
                        </FormControl>
                    </Box>
                    {!isLogin && <Box display='flex' alignItems='baseline'>
                        <FormControl>
                            <FormLabel htmlFor='confirmPassword'>Confirm Password</FormLabel>
                            <Input id='confirmPassword' type='password' ref={confirmRef} onInput={(e: InputElement) => setConfirmPassword(e.target.value)} />
                        </FormControl>
                    </Box>}
                    <Button mt={5} minW="100%" textAlign="center" bg='green.400' textColor="text.primary" variant='solid' onClick={isLogin ? handleLogin : handleRegister}>
                        {isLogin ? "Login" : "Register"}
                    </Button>
                    {isLogin && <Button mt={5} minW="100%" textAlign="center" bg='pink.500' textColor="text.primary" variant='solid' onClick={setGuest}>
                        Login as Guest
                    </Button>}
                    {isLogin ? (<Box mt={4} d='flex' justifyContent="center">
                        <Text>Don't have an account?</Text> <Spacer /><Text onClick={setRegister}>Register</Text>
                    </Box>) :
                        (<Box mt={4} d='flex' justifyContent="center">
                            <Text>Don't have an account?</Text> <Spacer /><Text onClick={setLogin}>Login</Text>
                        </Box>)
                    }
                </Box>
            </Box>
        </Flex>
    )
}

export default Login;
