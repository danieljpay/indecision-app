class IndecisionApp extends React.Component {
    constructor(props){
        super(props);
        this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
        this.handlePick = this.handlePick.bind(this);
        this.handleAddOption = this.handleAddOption.bind(this);
        this.handleDeleteOption = this.handleDeleteOption.bind(this);
        this.state = {
            options: []
        };
    }

    componentDidMount() {
        try {
            const json = localStorage.getItem("options");
            const options = JSON.parse(json);

            if(options) {
                this.setState(() => ({ options })) //options: options
            }
        }   catch(e) {
            //do nothing at all
        }
    }

    componentDidUpdate(prevProps, prevState) {
        if(prevState.options.length !==  this.state.options.length) {
            const json = JSON.stringify(this.state.options);
            localStorage.setItem("options", json);
        }      
    }

    componentWilUnmount() {
        console.log("componenteWillUnmount! ");
    }

    handleDeleteOptions() {
        this.setState(() => ({options:  [] }));
    }

    handleDeleteOption(optionToRemove) {
        this.setState((prevState) => ({
            options: prevState.options.filter((option) =>  optionToRemove !== option)
        }));
    }

    handlePick() {
        const randomNum = Math.floor(Math.random()*this.state.options.length);
        const option = this.state.options[randomNum];
        alert(option);
    }

    handleAddOption(option) {

        if(!option) {
            return "Ingresa un valor válido para agregarlo a las opciones";
        }
        else if(this.state.options.indexOf(option) > -1){
            return "Está opción ya existe";
        }

        this.setState((prevState) => ({options: prevState.options.concat(option) }));
    }

    render() {
        const subtitle = "Deja tu vida en manos de una computadora";

        return (
            <div>
                <Header subtitle = {subtitle}/>
                <Action 
                    hasOptions={this.state.options.length > 0}
                    handlePick={this.handlePick}
                />
                <Options 
                    options = {this.state.options}
                    handleDeleteOptions={this.handleDeleteOptions}
                    handleDeleteOption={this.handleDeleteOption}
                />
                <AddOption 
                    handleAddOption={this.handleAddOption}
                />
            </div>
        );
    }
}

function Header(props) {
    return (
        <div>
            <h1>{props.title}</h1>
            {props.subtitle && <h2>{props.subtitle}</h2>}
        </div>
    );
}

Header.defaultProps = {
    title: "Indecision app"
}

function Action(props) {
    return (
        <div>
            <button 
                onClick={props.handlePick}
                disabled={!props.hasOptions}
            >
                ¿Qué debo hacer?
            </button>
        </div>
    );
}

function Options(props) {
    return (
        <div>
            <button 
                onClick={props.handleDeleteOptions}>Eliminar todo</button>
                {props.options.length === 0 && <p>Por favor agrega una opción para empezar</p>}
            {
                props.options.map((option) => (
                    <Option 
                        key={option} 
                        optionText={option}
                        handleDeleteOption={props.handleDeleteOption}
                    />
                ))
            }
        </div>
    );
}

function Option(props) {
    return (
        <div>
            {props.optionText}
            <button 
                onClick={(e) => {
                    props.handleDeleteOption(props.optionText);
                }}
            >
                eliminar
            </button>
        </div>
    );
}

class AddOption extends React.Component {
    constructor(props){
        super(props);
        this.handleAddOption = this.handleAddOption.bind(this);
        this.state = {
            error: undefined
        };
    }

    handleAddOption(e){
        e.preventDefault();
        const option = e.target.elements.newOption.value.trim();
        const error = this.props.handleAddOption(option);

        this.setState(() => ({error}));

        if(!error){
            e.target.elements.newOption.value = '';
        }
    }

    render() {
        return (
            <div>
                {this.state.error && <p>{this.state.error}</p>}
                <form onSubmit={this.handleAddOption}>
                    <input 
                        type="text" 
                        name="newOption" 
                        placeholder="Escribe tu opción"
                    >
                    </input>
                    <button>Agregar</button>
                </form>
            </div>
        );
    }
}

// const User = (props) => {
//     return (
//         <div>
//             <p>Name: {props.name}</p>
//             <p>Age: {props.age}</p>
//         </div>
//     );
//  }

ReactDOM.render(<IndecisionApp />, document.getElementById("app"));