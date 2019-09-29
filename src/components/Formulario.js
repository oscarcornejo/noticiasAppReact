import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Formulario extends Component {
    state = {
        categoria: ''
    }

    componentDidMount() {
        this.setState({
            categoria: 'general'
        })
    }

    handleChange = (e) => {
        this.setState({
            categoria: e.target.value
        }, () => {
             // PASARLO A LA PÁGINA PRINCIPAL
            this.props.consultarNoticias(this.state.categoria)
        })
    }

    render() {
        return (
            <div className="buscador row">
                <div className="col s12 m8 offset-m2">
                    <form >
                        <h2>Buscar por Categoría</h2>

                        <div className="input-field col s12 m8 offset-m2">
                            <select onChange={this.handleChange}>
                                <option value="general" select="this.state.categoria">General</option>
                                <option value="business" select="this.state.categoria">Negocios</option>
                                <option value="entertainment" select="this.state.categoria">Entretenimiento</option>
                                <option value="health" select="this.state.categoria">Salud</option>
                                <option value="science" select="this.state.categoria">Ciencia</option>
                                <option value="sports" select="this.state.categoria">Deportes</option>
                                <option value="technology" select="this.state.categoria">Tecnología</option>
                            </select>

                        </div>
                    </form>
                </div>
            </div>
        );
    }
}

Formulario.propTypes = {
    consultarNoticias: PropTypes.func.isRequired
}

export default Formulario;