const FirstComponent = () => {
    return (
        <h1>My Very First Component</h1>
    );
}

const NamedComponent = (props) => {
    return (
        <h1>My name is {props.name}</h1>
    );
}

const App = () => {
    return (<div>
        <FirstComponent />
        <NamedComponent name="Jack" />
    </div>)
}

ReactDOM.render(<App/>,
    document.getElementById("root"));