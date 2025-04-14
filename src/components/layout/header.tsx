import { useNavigate } from "react-router-dom";
import { resources, retuResource } from "../../_data/resources";
import logo from "../../assets/poke.png"
import circle from "../../assets/pokeball-line-circle.png"
import "./layout.css"
import { CiLogout } from "react-icons/ci";
import { useAppDispatch } from "../../hooks/hooks";
import { logout } from "../../pages/login/state/authState";


export const Header = () => {
  const navigate = useNavigate();
    const dispatch = useAppDispatch();

  const handleLogOut = async () => {
    await localStorage.removeItem('isAuth');
    dispatch(logout());
    await navigate('/login'); 
  }
  return (
    <>
      <div className="header">
        <img src={ logo } alt="PokeApi LOGO" className="header-logo"/>
      </div>
      <div className="pokeball-line-header">
        <img src={ circle } alt="Pokeball" className="pokeball-circle"/>
      </div>
      <div className="log-out" onClick={()=>{handleLogOut()}}>
        <CiLogout size={25} />
        <span>{retuResource(resources._logout_label)}</span>
      </div>
    </>
  )
}