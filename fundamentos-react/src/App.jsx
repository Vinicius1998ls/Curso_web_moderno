import './App.css'
import React from "react";

import Primeiro from './components/basicos/Primeiro'
import ComParametro from './components/basicos/ComParametro'
import ComFilhos from './components/basicos/ComFilhos'
import Card from './components/layout/Card'
import Repeticao from './components/basicos/Repeticao';
import Condicional from './components/basicos/Condicional';
import CondicionalComIf from './components/basicos/CondicionalComIf';

export default (props) => (
    <div className="App">
        <Card titulo="#06 Condicional v2" color='#FA6900'>
            <CondicionalComIf numero={6}></CondicionalComIf>
        </Card>
        <Card titulo="#05 Condicional v1">
            <Condicional numero={9}></Condicional>
        </Card>
        <Card titulo="#04 Repetição">
            <Repeticao></Repeticao>
        </Card>
        <Card titulo="#03 Componentes Com Filhos">
            <ComFilhos>
                <ul>
                    <li>Ana</li>
                    <li>Bia</li>
                    <li>Carlos</li>
                    <li>Daniel</li>
                </ul>
            </ComFilhos>
        </Card>
        <Card titulo="#02 Componentes com parametro">
            <ComParametro titulo="Esse é o título"
                subtitulo="Esse é o subtítulo" />
            <ComParametro titulo="Esse é outro título"
                subtitulo="Esse é o outro subtítulo" />
        </Card>
        <Card titulo="#01 Primeiro Componente">
            <Primeiro />
        </Card>
    </div>
)