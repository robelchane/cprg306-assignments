export default function Item({name, quantity, category, onSelect}){
    return(
        <div onClick={onSelect}>
            <div className="ml-4 mb-4 bg-gray-300 p-1 w-1/3 hover:bg-orange-400">
                <p className="text-2xl font-bold">{name}</p>
                <p>Buy {quantity} in {category}</p>            
            </div>
        </div>
        );
}