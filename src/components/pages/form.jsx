import React, {Component} from 'react';

class Form extends Component {
    constructor(props) {
        super(props);

        this.state = {
            name: "",
            email: "",
            date: new Date()
        }

        // Bind methods to JSX
        this.changeName = this.changeName.bind(this);
        this.changeEmail = this.changeEmail.bind(this);
        this.changeDate = this.changeDate.bind(this);
    }

    changeName(e) {
        // setState updates the state of the object
        this.setState({name: e.target.value});
    }

    changeEmail(e) {
        this.setState({email: e.target.value});
    }

    changeDate() {
        this.setState({date: new Date()})
    }

    // Renderize to HTML DOM and React DOM
    render() {
        return (
            <div className="ed-grid">
                <h1>Formulario {this.props.name}</h1>
                <h4>{`Fecha actual: ${Math.ceil(this.state.date/1000)}`}</h4>
                <form id="elemento">
                    <div className="ed-grid m-grid-2">
                        <div className="form__item">
                            <label>Nombre completo</label>
                            <input 
                                type="text" 
                                onChange={this.changeName} 
                            />
                        </div>
                        <div className="form__item">
                            <label htmlFor="">Correo Electronico</label>
                            <input 
                                type="email"
                                onChange={this.changeEmail}
                            />
                        </div>
                        <div className="form__item">
                            <input type="submit" value="Enviar" className="button full"/>
                        </div>
                    </div>
                </form>
                <div>
                    <h2>{ `Hola ${this.state.name}` }</h2>
                    <span>{ `Tu correo es: ${this.state.email}` }</span>
                </div>
            </div>
        );
    }

    componentDidMount() {
        this.dateInterval = setInterval(() => {
            this.changeDate();
        }, 1000)
    }

    componentDidUpdate(prevProps, prevState) {
    }

    componentWillUnmount() {
        clearInterval(this.dateInterval);
    }
}

export default Form;