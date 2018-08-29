import React from 'react'

export default props => (
    <div className="miniatura" style={{ background: `url('${props.url}')` }}>
        <a href={props.link}>
            <div className="blackbox">
                <div className="blackbox-text">
                    <h1>{props.hUm}</h1>
                    <h2>{props.hDois}n</h2>
                </div>
            </div>
        </a>
    </div>
)