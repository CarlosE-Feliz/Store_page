import NavigationBar from "../layout/navBar";
import Link from 'next/link';

function DropDown(props) {
    const { clothes, houseThings, others } = props;

    return (
        <div>
            <ul>
                <li>
                    {clothes}
                </li>
                <li>
                    {houseThings}
                </li>
                <li>
                    {others}
                </li>
            </ul>
        </div>
    )


}

export default DropDown;