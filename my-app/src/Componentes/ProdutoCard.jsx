
function Card ({ titulo,descricao,imagem,className,botao,remover,valor}) {
    return (
        <div className={className}>
            <img src={imagem} alt="" />
            <h2>{titulo}</h2>
            <p>{descricao}</p>
            <div className="div">
            <button onClick={remover}>{botao}</button>
            <p className="valor">R${valor}</p>
            </div>

        </div>
    )

}


export default Card;