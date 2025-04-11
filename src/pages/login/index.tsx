import { useState } from 'react';
import { RootContainer, LoginLabel, InputContainer, ButtonLogin, TitleUpperCase, TitleText } from './styled';
import InputComponent from '../../components/input-component';
import { login } from "./state/authState";
import { useNavigate } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../hooks/hooks';


const Login = () => {
    const { user, isAuthenticated } = useAppSelector((state) => state.auth);
    const dispatch = useAppDispatch();
    const navigate = useNavigate();
    const [username, setUsername] = useState<string>('');
    const [password, setPassword] = useState<string>('');

    const handleLogin = (data: any) => { 
        dispatch(login(data));
        navigate("/home");
        console.log( user, isAuthenticated );
    }

    return (
        <RootContainer>
            <TitleUpperCase>
                <TitleText>
                    T
                </TitleText>
                enpo Challenge
            </TitleUpperCase>
            <LoginLabel>
                Login
            </LoginLabel>
            <InputContainer>
                <InputComponent icon placeholderValue='Username' handleSearch={setUsername} />
                <InputComponent icon placeholderValue='Password' handleSearch={setPassword} />
            </InputContainer>
            <ButtonLogin onClick={() => handleLogin({ username: username, password: password })}>
                Login
            </ButtonLogin>
        </RootContainer>
    );
}

export default Login;