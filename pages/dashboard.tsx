import React from 'react'
import {
    Stack, Text, Container,

    Button
} from '@chakra-ui/react'
import TabNav from '../components/tabnav'
import Link from 'next/link'


const Dashboard = ({ user = "Ana" }: { user?: string }) => {
    return (
        <Container>

            <Stack spacing={3} m={8}>
                <Text fontSize='lg'> Hola, {user}</Text>
                <Link passHref href={'/readed'}>
                    <Button size={"lg"} variant={'outline'} colorScheme={'gray'} data-testid="readed">Leídos</Button>
                </Link>

                <Button size={"lg"} variant={'outline'} colorScheme={'gray'} data-testid="reading">Leyendo</Button>
                <Button size={"lg"} variant={'outline'} colorScheme={'gray'} data-testid="mustRead">Quiero Leer</Button>
            </Stack>
            <TabNav />
        </Container>
    )
}
export default Dashboard