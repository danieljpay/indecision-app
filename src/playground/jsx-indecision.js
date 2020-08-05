console.log("App.js is running");

// JSX - JavaScript XML

const app = {
    title: "Indecision App",
    subtitle: "Deja tu vida en manos de una computadora",
    options: []
};

const onFormSubmit = (e) => {
    e.preventDefault(); //evita que refreque la página

    const option = e.target.elements.option.value;

    if(option){
        app.options.push(option);
        e.target.elements.option.value = '';
        render();
    }
};

const onRemoveAll = () => {
    app.options = [];
    render();
};

const onMakeDecision = () => {
    const randomNum = Math.floor(Math.random()*app.options.length);
    const option = app.options[randomNum];
    alert(option);
};

const appRoot = document.getElementById("app");

function render(){
    const template = (
        <div>
            <h1>{app.title}</h1>
            {app.subtitle && <p>{app.subtitle}</p>}
            <p>{app.options.length > 0 ? "Aquí están tus opciones" : "Sin opciones"}</p>
            <button disabled={app.options.length === 0} onClick={onMakeDecision}>¿Qué debo hacer?</button>
            <button name="Reset" onClick={onRemoveAll}>Reiniciar opciones</button>
            <ol>
            {
                app.options.map((option) => <li key={option}>{option}</li>)
            }
            </ol>
            <form onSubmit={onFormSubmit}>
                <input type="text" name="option" placeholder="Escribe una opción"></input>
                <button name="addOption">Agregar opción</button>
            </form>
        </div>
    );

    ReactDOM.render(template, appRoot);
}

render();