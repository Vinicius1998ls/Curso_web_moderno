import React from "react";

import produtos from "../../data/produtos";

export default props => {

    function getProdutosListItem() {
        return produtos.map(produtos => {
            return <li key={produtos.id}>
                {produtos.id} - {produtos.nome} - R$ {produtos.preco} 
            </li>
        })
    }

    return (
        <div>
            <h2>Repetição</h2>
            <ul>
                {getProdutosListItem()}
            </ul>
        </div>
    )
}