import { useState } from 'react';
import { RootContainer, LoginLabel, InputContainer, ButtonLogin, TitleUpperCase, TitleText, ErrorText } from './styled';
import InputComponent from '../../components/input-component';
import { login } from "./state/authState";
import { Navigate, useNavigate } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../hooks/hooks';
import { resources, retuResource } from '../../_data/resources';

interface userTypes {
    id: number
    username: string
    pass: string
}

const USERS = [
    {
        id: 0, 
        username: 'yamirkamell@gmail.com',
        pass: 'dev12345'
    },
    {
        id: 1,
        username: 'test@dev.test',
        pass: '123456'
    }
]


const Login = () => {
    const { isAuthenticated } = useAppSelector((state) => state.auth);
    const dispatch = useAppDispatch();
    const navigate = useNavigate();
    const [username, setUsername] = useState<string>('yamirkamell@gmail.com');
    const [password, setPassword] = useState<string>('dev12345');
    const [errorAlert, setErrorAlert] = useState(false);

    const handleLogin = () => { 
        USERS.forEach((user: userTypes)  => {
            if (user.username === username && user.pass === password) {
                dispatch(login({username: username, password: password, accessToken: 'test token'}));
                localStorage.setItem('isAuth', 'true');
                navigate("/");
            }
            else {
              setErrorAlert(true);
            }
          });
    };

    return isAuthenticated ? <Navigate to='/' replace /> : (
        <RootContainer>
            <TitleUpperCase>
                <TitleText>
                    {retuResource(resources.T_label)}
                </TitleText>
                {retuResource(resources.Title_label)}
            </TitleUpperCase>
            <LoginLabel>
                {retuResource(resources._login_label)}
            </LoginLabel>
            <InputContainer>
                <InputComponent icon placeholderValue={retuResource(resources._user_label)} handleSearch={setUsername} />
                <InputComponent icon placeholderValue={retuResource(resources._password_label)} handleSearch={setPassword} />
            </InputContainer>
            {errorAlert ? <ErrorText>{retuResource(resources._validate_login_label)}</ErrorText>
            : null}
            <ButtonLogin onClick={() => handleLogin()}>
                {retuResource(resources._login_label)}
            </ButtonLogin>
        </RootContainer>
    );
}

export default Login;