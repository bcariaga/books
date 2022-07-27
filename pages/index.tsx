import * as React from 'react'
import type { NextPage } from 'next'
import { Image, Text, Center, Stack } from '@chakra-ui/react'
import { useRouter } from 'next/router'
const Home: NextPage = () => {
  const router = useRouter()

  React.useEffect(() => {
    const timer = setTimeout(() => {
      router.push('login')
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div>
      <Center>
        <Stack>
          <Image src="/cat.gif" alt='loader cat' />
          <Text align={'center'}>Cargando...</Text>
        </Stack>
      </Center>
    </div>
  )
}

export default Home
