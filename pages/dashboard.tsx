import React from 'react'
import {
    Stack, Text, Container,

    Button
} from '@chakra-ui/react'
import TabNav from '../components/tabnav'


const Dashboard = ({ user = "Ana" }: { user?: string }) => {
    return (
        <Container>

            <Stack spacing={3} m={8}>
                <Text fontSize='lg'> Hola, {user}</Text>
                <Button size={"lg"} variant={'outline'} colorScheme={'gray'} data-testid="readed">Leídos</Button>
                <Button size={"lg"} variant={'outline'} colorScheme={'gray'} data-testid="reading">Leyendo</Button>
                <Button size={"lg"} variant={'outline'} colorScheme={'gray'} data-testid="mustRead">Quiero Leer</Button>
            </Stack>
            <TabNav />
        </Container>
    )
}
export default Dashboard