import { RootContainer, IconContainer, UsernameIcon, PasswordIcon, InputPersonalized, InputPasswordPersonalized, ShowPasswordContainer } from './styled';
import { useState } from 'react';
import { HiEye, HiEyeOff } from "react-icons/hi";
import { resources, retuResource } from '../../_data/resources';

const InputComponent = ({icon, value, placeholderValue, handleSearch}: any) => {
    const [showPassword, setShowPassword] = useState(false);
    const handleClickShowPassword = () => setShowPassword((show) => !show);

return (
    <RootContainer>
        {icon &&
            <IconContainer>
                {placeholderValue == retuResource(resources._user_label) 
                    ? <UsernameIcon />
                    : <PasswordIcon />
                }
            </IconContainer>
        }
        {placeholderValue == retuResource(resources._password_label) ? 
                <>
                    <InputPasswordPersonalized
                        defaultValue={value}
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
                defaultValue={value} 
                onChange={event => handleSearch(event.target.value)}
            />
        }
        
    </RootContainer>
);
}

export default InputComponent;