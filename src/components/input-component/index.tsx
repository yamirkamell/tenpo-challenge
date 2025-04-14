import { RootContainer, IconContainer, UsernameIcon, PasswordIcon, InputPersonalized, InputPasswordPersonalized, ShowPasswordContainer } from './styled';
import { useState } from 'react';
import { HiEye, HiEyeOff } from "react-icons/hi";

const InputComponent = ({icon, placeholderValue, handleSearch}: any) => {
    const [showPassword, setShowPassword] = useState(false);
    const handleClickShowPassword = () => setShowPassword((show) => !show);

return (
    <RootContainer>
        {icon &&
            <IconContainer>
                {placeholderValue == 'Username' 
                    ? <UsernameIcon />
                    : <PasswordIcon />
                }
            </IconContainer>
        }
        {placeholderValue == 'Password' || placeholderValue == 'Confirm Password' ? 
                <>
                    <InputPasswordPersonalized
                        placeholder={placeholderValue}
                        type={showPassword ? 'text' : 'password'}
                        onChange={event => handleSearch(event.target.value)}
                    />
                    <ShowPasswordContainer onClick={handleClickShowPassword} >
                        { showPassword ? <HiEyeOff size={22}/> : <HiEye size={22}/> }
                    </ShowPasswordContainer>
                </>
        :
            <InputPersonalized 
                placeholder={placeholderValue}
                defaultValue={''} 
                onChange={event => handleSearch(event.target.value)}
            />
        }
        
    </RootContainer>
);
}

export default InputComponent;