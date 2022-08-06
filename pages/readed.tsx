import { Image, Center, Container, Stack, Text, Flex, Heading } from '@chakra-ui/react';
import React from 'react'

interface BookItemProps {
    title: string
    author: string
    editorial: string
    ISBN: string
    imgUrl: string
}
function BookItem({ ISBN, author, editorial, title, imgUrl }: BookItemProps) {
    return (<Stack spacing={3} m={8} direction={{
        base: 'row'
    }}>
        <Flex flex={1}>
            <Image objectFit="cover" boxSize="100%" src={imgUrl} alt='EL HECHIZO DEL AGUA - portada' />
        </Flex>
        <Stack flex={1} flexDirection="column" justifyContent="flex-end">
            <Heading fontSize={'1xl'} fontFamily={'body'} mb={8}>
                {title}
            </Heading>
            <Text mb={4}>
                Autor: {author}
            </Text>
            <Text mb={4}>
                Editorial: {editorial}
            </Text>
            <Text mb={4}>
                ISBN: {ISBN}
            </Text>

        </Stack>
    </Stack>);
}


const Readed = () => {
    return (
        <Container overflow={'auto'} mt={8} data-testid="readed" >
            <Center data-testid="title">
                <Text fontSize='3xl' > Leidos </Text>
            </Center>
            <BookItem key={'9789504975847'} ISBN='9789504975847' author='Bonelli Florencia' editorial='PLANETA' title='EL HECHIZO DEL AGUA' imgUrl='https://contentv2.tap-commerce.com/cover/medium/9789504975847_1.jpg?id_com=1113&w=200' />
            <BookItem key={'9789500766647'} ISBN='9789500766647' author='Allende Isabel' editorial='SUDAMERICANA' title='VIOLETA' imgUrl='https://contentv2.tap-commerce.com/cover/large/9789500766647_1.jpg?id_com=1113' />
            <BookItem key={'9788433981219'} ISBN='9788433981219' author='Houellebecq' editorial='ANAGRAMA' title='ANIQUILACION' imgUrl='https://contentv2.tap-commerce.com/cover/large/9788433981219_1.jpg?id_com=1113' />
            <BookItem key={'9789877389326'} ISBN='9789877389326' author='Dicker Joel' editorial='ALFAGUARA' title='EL CASO ALASKA SANDERS' imgUrl='https://contentv2.tap-commerce.com/cover/large/9789877389326_1.jpg?id_com=1113' />
        </Container>
    )
}



export default Readed;