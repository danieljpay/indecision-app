class VisibilityToggle extends React.Component {

    constructor(props){
        super(props);
        this.handleToggleVisibility = this.handleToggleVisibility.bind(this);
        this.state = {
            visibility: false
        };
    }

    handleToggleVisibility() {
        this.setState ((prevState) => {
            return {
                visibility: !prevState.visibility
            };
        });
    }

    render() {
        return (
            <div>
                <h1>Visibility toggle</h1>
                <button name="details" onClick={this.handleToggleVisibility}>{this.state.visibility ? "Ocultar detalles" : "Mostrar detalles"}</button>
                {this.state.visibility && (
                    <div>
                        <p>!Oh! ahora ves los detalles</p>
                    </div>
                )}
            </div>
        );
    }    
}

ReactDOM.render(<VisibilityToggle />, document.getElementById("app"));