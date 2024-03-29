import classes from './Header.module.css';
import mealImage from '../../assests/meals.jpg'
import { Fragment} from 'react';
import HeaderCartButton from './HeaderCartButton';
const Header = (props) => {
    
    return (
        <Fragment >
            <header className={classes.header}>
                <h1>Food & Fun</h1>
                <HeaderCartButton onShow={props.onShow}/>
            </header>
            <div className={classes['main-image']}>
                <img src={mealImage} alt="Deliciously served !" />
            </div>
        </Fragment>
    );
}

export default Header;