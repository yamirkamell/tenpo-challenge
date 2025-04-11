import { RootContainer, IconContainer, UsernameIcon, PasswordIcon, InputPersonalized, InputPasswordPersonalized } from './styled';
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
                    {   showPassword ? 
                            <HiEyeOff onClick={handleClickShowPassword}/> 
                        : 
                            <HiEye onClick={handleClickShowPassword}/>
                    }
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