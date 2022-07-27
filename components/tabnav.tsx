import { TabPanel, TabPanels, TabList, Tabs, Tab, Icon } from '@chakra-ui/react'
import { BsFillPersonFill } from 'react-icons/bs'
import { IoMdContacts } from 'react-icons/io'
import { AiOutlineSetting } from 'react-icons/ai'
import React from 'react'

export default function TabNav() {
    return (
        <Tabs isFitted defaultIndex={1} data-testid="tabs" variant='soft-rounded' size='lg' align='center'>
            <TabPanels>
                <TabPanel>

                </TabPanel>
                <TabPanel>

                </TabPanel>
                <TabPanel>

                </TabPanel>
            </TabPanels>
            <TabList>
                <Tab><Icon as={IoMdContacts} /></Tab>
                <Tab><Icon as={BsFillPersonFill} /></Tab>
                <Tab><Icon as={AiOutlineSetting} /></Tab>
            </TabList>
        </Tabs>
    )
}
