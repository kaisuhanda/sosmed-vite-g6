import { Box, Button, Card, CardBody, Text } from "@chakra-ui/react"
import { Link } from "react-router-dom";
import { useDispatch,useSelector } from "react-redux";
import { Input, InputGroup, InputRightElement } from '@chakra-ui/react'
import { useState } from "react";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import axios from 'axios';
import { API_URL } from "../../../helper";


const Register = () => {
  const dispatch = useDispatch();
  const [showPassword, setShowPassword] = useState(false);
  const [password, setPassword] = useState("");
  const [passwordConfirmation, setPasswordConfirmation] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [passwordError, setPasswordError] = useState(""); 
  const navigate = useNavigate();

  const handleRegister = () => {
    if (password.length < 8) {
      setPasswordError("Password harus lebih  8 characters atau username / email kosong.");
      alert("Password harus lebih  8 characters atau username / email kosong.");
      navigate('/Register')
    } else if (password !== passwordConfirmation) {
      setPasswordError("Passwords do not match.");
      alert("Password tidak sama.");
      navigate('/Register')
    } else {
      setPasswordError("");

      axios
        .get(`${API_URL}/account?username=${username}`)
        .then((response) => {
          if (response.data.length > 0) {
            alert("Username sudah ada. Tolong gunakan username yang lain.");
            navigate("/Register");
          } else {
            axios
              .get(`${API_URL}/account?email=${email}`)
              .then((emailResponse) => {
                if (emailResponse.data.length > 0) {
                  alert("Email sudah ada. Tolong gunakan email yang lain.");
                  navigate("/Register");
                } else {
                  const userData = { username, password, email };
                  axios
                    .post(`${API_URL}/account`, userData)
                    .then((response) => {
                      console.log("Penambahan data sukses:", response.data);
                      alert("Penambahan data sukses");
                      navigate("/");
                    })
                    .catch((error) => {
                      console.error("Error penambahan data:", error);
                    });
                }
              })
              .catch((emailError) => {
                console.error("Error checking email:", emailError);
              });
          }
        })
        .catch((usernameError) => {
          console.error("Error checking username:", usernameError);
        });
    }
  };



      

        
      const handleLogout = () => {
       
        localStorage.removeItem("username");
        localStorage.removeItem("password"); 
        localStorage.removeItem("email");
        localStorage.removeItem("isLoggedIn");
        setIsLoggedIn(false);
      };



      const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    return <Box>
        <Card maxW={"md"} margin={"auto"} marginTop={"75"} paddingY={"4"} shadow={"lg"} >
            <CardBody textAlign={"center"} >
                <Text textAlign={"center"} fontWeight={700} fontSize={"2xl"}>Welcome</Text>
                <Text textAlign={"center"} >Selamat datang di Register</Text>
                <Text textAlign={"left"} >Username</Text>
                <Input type="text" placeholder='input your username' value={username} onChange={(e) => setUsername(e.target.value)} />
                <Text textAlign={"left"} >Email</Text>
                <Input type="text" placeholder='input your email' value={email} onChange={(e) => setEmail(e.target.value)} />
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
                    <Text textAlign={"left"} >konfirmasi Pasword</Text>
                <InputGroup>
                        <Input
                            type={showPassword ? "text" : "password"}
                            placeholder='Input your password again'
                            value={passwordConfirmation}
                            onChange={(e) => setPasswordConfirmation(e.target.value)}
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
                <Button type="button" marginTop={"8"} colorScheme="green" onClick={handleRegister}>
                    <Link to={'/'}>
                        Daftar
                    </Link>
                </Button>
            </CardBody>
        </Card>
    </Box>
}

export default Register;