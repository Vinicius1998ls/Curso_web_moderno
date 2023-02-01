import './index.css'
import React from 'react'
import ReactDOM from 'react-dom'

// import Primeiro from './components/Primeiro'
// import ComParametro from './components/ComParametro'
import ComFilhos from './components/ComFilhos'

ReactDOM.render(
    <div>
        {/* <Primeiro />
        <ComParametro titulo="Esse é o título"
            subtitulo="Esse é o subtítulo" />
        <ComParametro titulo="Esse é outro título"
            subtitulo="Esse é o outro subtítulo" /> */}

        <ComFilhos>
            <ul>
                <li>Ana</li>
                <li>Bia</li>
                <li>Carlos</li>
                <li>Daniel</li>
            </ul>
        </ComFilhos>

    </div>,
    document.getElementById('root')
)