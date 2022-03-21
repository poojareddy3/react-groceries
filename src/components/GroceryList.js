import './styles.css'

function GroceryList(props){
    return(
        props.isPurchased ?  null :   //displays the list if isPurchased is false
        <div class="listDisplay">
            <h3><span>item:</span> {props.item}</h3>
            <h3><span>brand:</span>{props.brand}</h3>
            <h3><span>units:</span>{props.units}</h3>
            <h3><span>quantity:</span>{props.quantity}</h3>
            <h3><span>isPurchased:</span>{String(props.isPurchased)}</h3>
            <button onClick={props.remove}>Remove</button>
        </div>
    )
}

export default GroceryList