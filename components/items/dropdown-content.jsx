function DropDwownItem(props) {
  const { item } = props;
  return (
    <ul>
      <li>{item.casual.type}</li>
      <li>{item.formal.type}</li>
    </ul>
  );
}
export default DropDwownItem;
