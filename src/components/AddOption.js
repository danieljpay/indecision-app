import React from "react";

export default class AddOption extends React.Component {
    state = {
        error: undefined
    }

    handleAddOption = (e) => {
        e.preventDefault();
        const option = e.target.elements.newOption.value.trim();
        const error = this.props.handleAddOption(option);

        this.setState(() => ({error}));

        if(!error){
            e.target.elements.newOption.value = '';
        }
    };

    render() {
        return (
            <div>
                {this.state.error && <p className="add-option-error">{this.state.error}</p>}
                <form className="add-option" onSubmit={this.handleAddOption}>
                    <input 
                        className="add-option__input"
                        type="text" 
                        name="newOption" 
                        placeholder="Escribe tu opción"
                    >
                    </input>
                    <button className="button">Agregar</button>
                </form>
            </div>
        );
    }
}