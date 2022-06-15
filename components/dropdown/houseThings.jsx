import classes from './clothes-dropdown.module.css';
import Link from 'next/link';

function DropDownHouse(props){
    // const { kitchen, badroom, bedroom, familyroom } = props;

    return(

        <>
            <li className={classes.dropdown}>
                <span className={classes.dropbtn}>House</span>
                <div className={classes.dropdownContent}>
                <Link href='/categories/man'>
                        <a className={classes.dropdownItem}>Man</a>
                </Link>
                <Link href='/categories/woman'>
                        <a className={classes.dropdownItem}>Woman</a>
                </Link>
                <Link href='/categories/kid'>
                        <a className={classes.dropdownItem}>Kid</a>
                </Link>
                </div>
            </li>        
        </>
    )
}

export default DropDownHouse;