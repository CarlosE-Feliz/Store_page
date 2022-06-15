import Link from 'next/link';
import DropDwownItem from '../items/dropdown-content';

import classes from './clothes-dropdown.module.css';

function DropDownClothes(props){
   const { items } = props;
    return(
        <>
           {
               items.map(item => (
                // eslint-disable-next-line react/jsx-key
                <li className={classes.dropdown}>
                <span className={classes.dropbtn}>{item.title}</span>
                <div className={classes.dropdownContent}>
                <Link href={`/${item.id}`}>
                   <a className={classes.dropdownItem}>
                   {item.title}
                    </a>
                </Link>
                </div>
            </li>  
               ))
           }      
        </>
    )

}



export default DropDownClothes;