

function Buttom (props) {
const {name, onClick} = props;

   return (
       <button onClick={onClick} >{name}</button>
   )
}

export default Buttom