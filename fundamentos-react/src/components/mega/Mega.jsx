import React, { useState } from "react";

const Sorteio = () => {
    const [numerosSorteados, setNumerosSorteados] = useState([]);

    const sortearNumeros = () => {
        let numeros = [];
        while (numeros.length < 6) {
            let novoNumero = Math.floor(Math.random() * 60) + 1;
            if (!numeros.includes(novoNumero)) {
                numeros.push(novoNumero);
            }
        }
        setNumerosSorteados(numeros);
    };

    return (
        <div>
            <h2>Mega-sena</h2>
            <button onClick={sortearNumeros}>Sortear números</button>
            <p>Números sorteados: <br></br>{numerosSorteados.join(", ")}</p>
        </div>
    );
};

export default Sorteio;