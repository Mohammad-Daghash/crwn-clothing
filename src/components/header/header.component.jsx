import { useSelector } from 'react-redux';
import { selectCurrentUser } from '../../redux/user/user.selectors';
import { selectCartHidden } from '../../redux/cart/cart.selectors';
import { signOutStart } from '../../redux/user/user.actions';

import CartIcon from '../cart-icon/cart-icon.component';
import CartDropdown from '../cart-dropdown/cart-dropdown.component';

import { ReactComponent as Logo } from '../../assets/crown.svg';

import {
    HeaderContainer,
    LogoContainer,
    OptionsContainer,
    OptionLink,
} from './header.styles';

const Header = () => {
    const currentUser = useSelector(selectCurrentUser);
    const hidden = useSelector(selectCartHidden);

    return (
        <HeaderContainer>
            <LogoContainer to="/">
                <Logo className="logo" />
            </LogoContainer>
            <OptionsContainer>
                <OptionLink to="/shop">SHOP</OptionLink>
                {currentUser ? (
                    <OptionLink as="div" onClick={signOutStart}>
                        SIGN OUT
                    </OptionLink>
                ) : (
                    <OptionLink to="/signin">SIGN IN</OptionLink>
                )}
                <CartIcon />
            </OptionsContainer>
            {hidden ? null : <CartDropdown />}
        </HeaderContainer>
    );
};

export default Header;
