import { Flex, Text } from "@chakra-ui/react";
import { BiArrowBack } from "react-icons/bi";
import './Back-Top.css'

const BackTop = () => {
    return (
        <Flex className="back-top">
            <BiArrowBack />
            <Text >@Username</Text>
        </Flex >
    )
}

export default BackTop;