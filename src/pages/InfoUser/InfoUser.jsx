import { Box, Flex, Image, Text, Avatar, Button, ButtonGroup, Tab, Tabs, TabIndicator, TabList, TabPanel, TabPanels, } from '@chakra-ui/react'
import BackTop from '../../components/BackTop/BackTop'
import './InfoUser.css'
import { AiOutlineMessage } from "react-icons/ai";
import React, { useEffect } from 'react';
import axios from 'axios';
import { API_URL } from '../../../helper';
import CardComponent from '../../components/CardComponent/CardComponent';

const InfoUser = () => {
    const [inUsername, setInUsername] = React.useState("");
    const [databasePost, SetInDatabasePost] = React.useState([]);

    useEffect(() => {
        axios.get(API_URL + `/post`)
            .then((response) => {
                console.log(response.data);
                SetInDatabasePost(response.data)
            })
            .catch((error) => {
                alert("error")
            })
    }, [])


    const printData = () => {
        return databasePost.map((value, index) => {
            return (
                <CardComponent key={index} caption={value.caption} />
            )
        })
    }

    return <Flex className='main-container'>
        <BackTop className='back-top' />

        {/* user info section */}
        <Box>

            {/* banner */}
            <Box>
                <Image src='https://ik.imagekit.io/tvlk/blog/2020/01/shutterstock_404607271.jpg' alt='Banner-Image' width={"800px"} height={"200px"} marginTop={"70px"} bgColor={"red"} />
            </Box>

            {/* avatar */}
            <Box bgColor={"red"} width={"fit-content"} position={"absolute"} top={"200px"} marginLeft={"20px"}>
                <Avatar size={"2xl"} />
            </Box>

            <Flex height={"300px"} width={"800px"} color={"white"} bgColor={"salmon"} direction={"column"}>

                {/* button */}
                <Flex  >
                    <ButtonGroup display={"flex"} justifyContent={"flex-end"} bgColor={"yellow"} width={"100%"}>
                        <Button color='white' variant='link' fontSize={'32px'} type='button' margin={"10px"}>
                            <AiOutlineMessage />
                        </Button>
                        <Button type='button' colorScheme='gray' color='black' variant='solid' fontSize={'20px'} margin={"10px"}>
                            Follow
                        </Button>
                    </ButtonGroup>
                </Flex>
                {/* text */}
                <Box textAlign={"justify"} border={"2px solid black"} padding={"20px 20px 0px 20px"}>
                    <Text fontSize={"24px"} paddingBottom={"3px"}>ProfileUsename</Text>
                    <Text fontSize={"16px"} paddingBottom={"10px"}>@username</Text>
                    <Text fontSize={"16px"}>
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iste perferendis aliquid corporis quia tenetur possimus ad eveniet culpa, dolor fugiat architecto numquam eum, placeat officia odit, consequuntur ut labore distinctio.
                    </Text>
                </Box>
            </Flex>
        </Box>



        {/* content section */}
        <Tabs position="relative" variant="line" isFitted>
            <TabList >
                <Tab color={'white'}>Tweets</Tab>
                <Tab color={'white'}>Replies</Tab>
                <Tab color={'white'}>Media</Tab>
                <Tab color={'white'}>Liked</Tab>
            </TabList>
            <TabIndicator
                mt="-1.5px"
                height="2px"
                bg="blue.500"
                borderRadius="1px"
            />
            <TabPanels>
                <TabPanel>
                    {/* <CardComponent /> */}
                </TabPanel>
                {printData()}
            </TabPanels>
        </Tabs>
    </Flex >
}

export default InfoUser