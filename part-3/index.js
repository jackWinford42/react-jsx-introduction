const Person = (props) => {
    return (
        <div>
            <p>Learn some information about this person</p>
            <p>age: {props.age} name: {props.name.length < 9 ? props.name : props.name.slice(0,6)}</p>
            {/* I am not sure why the instructions say only people over 18 can vote, since this
            leads to my program telling an 18 year old they must be 18 but I coded it that way anyway. */}
            <h3>{parseInt(props.age) > 18 ? "Please go vote!" : "you must be 18"}</h3>
            <ul>
                {props.hobbies.map(hobby => <li>{hobby}</li>)}
            </ul>
        </div>
    );
}

const App = () => {
    return (
        <div>
            <Person name="Jack Winford" age="20" hobbies={["coding","eating","sleeping"]}/>
            <Person name="tom" age="1" hobbies={["crying","eating","sleeping","crawling"]}/>
            <Person name="Clarice" age="18" hobbies={["rowing","anthropology","partying"]}/>
        </div>
        
    )
}

ReactDOM.render(<App/>,
    document.getElementById("root"));