import DropDown from "../items/items-dropdown";

function NavigationBar (props) {
    const { items } = props;
    return (
        <div>
            <ul>
                {
                    items.map(item=>(
                       <DropDown 
                       key={item.id}
                        clothes={item.clothes}
                        houseThings={item.houseThings}
                        others={item.others}
                       />
                    ))
                }
            </ul>
        </div>
    )


}

export default NavigationBar;