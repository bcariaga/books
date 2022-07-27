import React from 'react'
import {
    Stack, Input, Container, FormControl,
    FormLabel,
    Center,
    Image,
    Button
} from '@chakra-ui/react'
import Link from 'next/link'


const Login = ({ setUser = () => { } }: { setUser?: Function }) => {
    return (
        <Container>
            <Stack spacing={3} m={8} >
                <Center>
                    <Image src='https://via.placeholder.com/300x200' alt='logo' />
                </Center>
                <FormControl>
                    <Center>
                        <FormLabel>Usuario</FormLabel>
                    </Center>
                    <Input type={'text'} name='username' data-testid='username' onChange={e => setUser(e.target.value)} />
                </FormControl>
                <FormControl >
                    <Center>
                        <FormLabel>Clave</FormLabel>
                    </Center>
                    <Input type={'password'} name='password' data-testid='password' />
                </FormControl>
                <FormControl >
                    <Center>
                        <Link passHref href={'/dashboard'}>
                            <Button data-testid='submit'>
                                Ingresar
                            </Button>
                        </Link>
                    </Center>
                </FormControl>
                <FormControl >
                    <Center>
                        <Button data-testid='register' variant='link'>
                            Registrarse
                        </Button>
                    </Center>

                </FormControl>
            </Stack>
        </Container>

    )
}

export default Login;