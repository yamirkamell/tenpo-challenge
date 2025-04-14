import styled from 'styled-components'
import { FaUser, FaLock } from "react-icons/fa";


const RootContainer = styled.div`
    display: flex; 
    flex-direction: row;
    width: 350px; 
    height: 45px; 
    border-radius: 4px;
    background-color: #e8e6e6;
    color: #2A7B9B;
    @media (width <= 375px) {
        width: 250px; 
    }
`;

const IconContainer = styled.div`
    width: 45px;
    height: 45px; 
    background-color: #2A7B9B; 
    display: flex; 
    align-items: center; 
    justify-content: center;
`;

const UsernameIcon = styled(FaUser)`
    width: 15px; 
    height: 15px; 
    color: #ffff;
`;

const PasswordIcon = styled(FaLock)`
    width: 15px; 
    height: 15px; 
    color: #ffff;
`;

const InputPersonalized = styled.input`
    width: 350px; 
    border-radius: 10px; 
    border: none !important;
    outline: none; 
    background-color: transparent; 
    color: #2A7B9B; 
    padding-inline: 10px;
`;

const InputPasswordPersonalized = styled.input`
    width: 310px; 
    border-radius: 10px; 
    border: none !important;
    outline: none; 
    background-color: transparent; 
    color: #2A7B9B; 
    padding-inline: 10px;
`;

const ShowPasswordContainer = styled.div`
    width: 50px;
    height: 45px;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export {
    RootContainer,
    IconContainer,
    UsernameIcon,
    PasswordIcon,
    InputPersonalized,
    InputPasswordPersonalized,
    ShowPasswordContainer
  };
  