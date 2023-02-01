import './App.css'
import React from "react";

import Primeiro from './components/Primeiro'
import ComParametro from './components/ComParametro'
import ComFilhos from './components/ComFilhos'
import Card from './components/layout/Card'

export default (props) => (
    <div className="App">
        <Card titulo="Componentes Com Filhos">
            <ComFilhos>
                <ul>
                    <li>Ana</li>
                    <li>Bia</li>
                    <li>Carlos</li>
                    <li>Daniel</li>
                </ul>
            </ComFilhos>
        </Card>
        <Card titulo="Componentes com parametro">
            <ComParametro titulo="Esse é o título"
                subtitulo="Esse é o subtítulo" />
            <ComParametro titulo="Esse é outro título"
                subtitulo="Esse é o outro subtítulo" />
        </Card>
        <Card titulo="Primeiro Componente">
            <Primeiro />
        </Card>
    </div>
)