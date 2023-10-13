import { Box, Button, Card, CardBody, Text, Flex, Spacer } from "@chakra-ui/react"
import { Link } from "react-router-dom";
import { useDispatch,useSelector } from "react-redux";
import { Input, InputGroup, InputRightElement } from '@chakra-ui/react'
import { useState } from "react";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import axios from 'axios';
import { API_URL } from "../../../helper";
import { color } from "framer-motion";


const AuthPage = () => {
    const dispatch = useDispatch();
    const [showPassword, setShowPassword] = useState(false);
     const [password, setPassword] = useState("");
     const [username, setUsername] = useState("");
     const [isLoggedIn, setIsLoggedIn] = useState(false);
    
    const navigate = useNavigate();
    
    useEffect(() => {
       
        axios.get(`${API_URL}/account`)
            .then(response => {
                const userData = response.data.account;;
            })
            .catch(error => {
                console.error("Error fetching data from db.json: ", error);
            });
    }, []);

    const handleLogin = () => {
        axios
          .get(`${API_URL}/account?username=${username}&password=${password}`)
          .then((response) => {
            const matchingUser = response.data[0];
            if (matchingUser) {
              
              dispatch({ type: "LOGIN", payload: { username,password } });
              setIsLoggedIn(true);
              navigate("/dash");
              localStorage.setItem("username", username);
              localStorage.setItem("password", password); 
            } else {
              navigate('/');
              alert("Login failed. Please check your username and password.");
            }
          })
          .catch((error) => {
            console.error("Error fetching data from server: ", error);
            alert("Error fetching data from server. Please try again.");
          });
      };
      

    
      const handleLogout = () => {
        localStorage.removeItem("username"); 
        localStorage.removeItem("password"); 
        localStorage.removeItem("isLoggedIn");
        setIsLoggedIn(false);
      };



      const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    return <Box color='whiteAlpha.100'>
        <Flex minHeight={"100vh"} alignItems={"center"}>
        <Card boxShadow={"none"} backgroundColor={"transparent"} maxW={"md"} margin={"auto"} marginTop={"100"} paddingY={"4"}  w='50%' h={"max-content"}  fontSize={"215px"} textAlign={"center"} >
            <CardBody>
            X<sup>2</sup>
              </CardBody></Card>
        <Card maxW={"md"} margin={"auto"} marginTop={"100"} paddingY={"4"} shadow={"xl"} w='50%'  >
            <CardBody textAlign={"center"} >
            <Text textAlign={"center"} fontWeight={700} fontSize={"2xl"}>WELLCOME</Text>
                <Text textAlign={"center"} fontWeight={700} fontSize={"2xl"}>Selamat Datang</Text>
                <Text textAlign={"center"} >ini sosmed XX</Text>
                <Text textAlign={"left"} >Username</Text>
                <Input type="text" placeholder='input your username' value={username} onChange={(e) => setUsername(e.target.value)} />
                <Text textAlign={"left"} >Pasword</Text>
                <InputGroup>
                        <Input
                            type={showPassword ? "text" : "password"}
                            placeholder='Input your password'
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                        <InputRightElement width="3rem">
                            <Button
                                h="2.5rem"
                                size="sm"
                                onClick={togglePasswordVisibility}
                                leftIcon={showPassword ? <AiOutlineEyeInvisible /> : <AiOutlineEye />}
                            >
                            </Button>
                        </InputRightElement>
                    </InputGroup>
                <Button type="button" marginTop={"8"} colorScheme="green" onClick={handleLogin}>
                    <Link to={"/dash"}>
                        Login
                    </Link>
                </Button>
                <Text textAlign={"center"} >Belum punya account ?<Link to={"/Register"}>
                        <span style={{ color: 'blue' }}>Daftar</span>
                    </Link></Text>
            </CardBody>
        </Card>
        </Flex>
    </Box>
}

export default AuthPage;