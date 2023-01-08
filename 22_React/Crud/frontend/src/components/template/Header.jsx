import './Header.css'
import React from 'react'

export default props =>
    <header className="header d-name d-sm-flex flex-column">
        <h1 className="mt-3">
            <i className={`fa fa-${props.icon}`}></i> {props.tittle}
        </h1>
        <p className="leat text-muted">{props.subtitle}</p>
    </header>