export default function Product({name, onBuy}){

    return(
    <>
        <h1>
            {name}
        </h1>
        <button onClick={onBuy}>
            купить
        </button>
    </>
    )
}