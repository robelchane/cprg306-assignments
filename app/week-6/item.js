export default function item(props){
    return(
        <div className="ml-4 mb-4 bg-gray-300 p-1 w-1/3">
            <p className="text-2xl font-bold">{props.name}</p>
            <p>Buy {props.quantity} in {props.category}</p>
            
        </div>
        );
}