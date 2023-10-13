import { Card, CardHeader, CardBody, CardFooter, Box, Text, Avatar } from '@chakra-ui/react'
import { AiOutlineRetweet } from 'react-icons/ai';
import { BiComment, BiLike, BiShare } from 'react-icons/bi';

const CardComponent = (props) => {
    return (
        <Card bgColor={"aqua"} >
            <CardHeader display={"flex"} gap={"10px"} bgColor={"green"}>
                {/* avatar */}
                <Box bgColor={"red"} width={"fit-content"} height={"fit-content"}>
                    <Avatar size={"md"} />
                </Box>
                {/* text */}
                <Box textAlign={"justify"} border={"2px solid black"} padding={""}>
                    <Text fontSize={"18px"} paddingBottom={"3px"}>ProfileUsename</Text>
                    <Text fontSize={"14px"} paddingBottom={"10px"}>@username</Text>
                </Box>
            </CardHeader>
            <CardBody>
                <Box>
                    <Text fontSize={"16px"}>
                        {props.caption}
                    </Text>
                </Box>
            </CardBody>
            <CardFooter>
                <BiLike />
                <BiComment />
                <AiOutlineRetweet />
                <BiShare />
            </CardFooter>

        </Card >
    )
}

export default CardComponent;