import styled from 'styled-components'

const RootContainer = styled.div`
    display: flex; 
    flex-direction: column;
    align-items: center; 
    justify-content: center; 
    width: 470px; 
    height: 50%; 
    border-radius: 20px; 
    background-color: #ffff; 
    gap: 20px;
    @media (height <= 740px) {
        height: 65%; 
    }
`;

const LoginLabel = styled.span`
    color: #2A7B9B; 
    font-size: 28px;
`;

const InputContainer = styled.div`
    display: flex; 
    flex-direction: column; 
    gap: 20px;
`;

const ButtonLogin = styled.button`
    width: 350px; 
    height: 40px;
    border: none;
    border-radius: 4px;
    color: #ffffff;
    font-size: 16px;
    background-color: #2A7B9B;
    @media (width <= 375px) {
        width: 250px; 
    }
`;

const TitleUpperCase = styled.span`
    text-transform: uppercase;
    font-weight: 900; 
    color: black;
    display: flex;
    align-items: center;
    font-size: 25px;
    @media (width <= 375px) {
        font-size: 22px;
    }
`;

const TitleText = styled.span`
    background-color: #2A7B9B;
    color: black;
    width: 30px;
    height: 30px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 4px; 
`;

const ErrorText = styled.h5`
  color: red;  
`;

export {
    RootContainer,
    LoginLabel,
    InputContainer,
    ButtonLogin,
    TitleUpperCase,
    TitleText,
    ErrorText
  };
  