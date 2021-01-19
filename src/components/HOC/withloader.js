/* 
HOC empiezan con with seguido de la frase o verbo de lo que hace el archivo
Solamente tienen extension JS y no JSX
*/

import React, { Component } from 'react';

const withLoader = (propName, WrappedComponent) => {
    return class WithLoader extends Component {
        constructor(props) {
            super(props)
        }

        render() {
            return this.props[propName].length === 0 ?
            <h1>Cargando...</h1>
            : <WrappedComponent {...this.props} />
        }
    }
}

export default withLoader;