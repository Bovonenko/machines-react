import './header.scss';
import Logo from '../../assets/logo.png';
import Clock from '../clock/Clock';
import CustomIcon from '../customIcon/CustomIcon';

const Header = () => {
    return (
        <div className='header'>
            <div className="header__logo">
                <img src={Logo} alt="buhler logo" />
            </div>
            <div className="header__info">
                <div className="header__info-time">
                    <CustomIcon iconName='clock' />
                    <Clock/>
                </div>
                <div className="header__info-contacts">
                    <CustomIcon iconName='contact' />
                    <span>Operator</span>
                </div>
            </div>
        </div>
    )
}

export default Header;