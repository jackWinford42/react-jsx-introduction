const Tweet = (props) => {
    return (
        <div>
            <h4>Tweet by {props.username}</h4>
            <p>{props.name} says: "{props.message}" on {props.date}</p>
        </div>
    );
}

const App = () => {
    return (
        <div>
            <Tweet username="captainJack" name="jack" message="this is a tweet" date="7/31/2021"/>
            <Tweet username="Smart Guy" name="Einstein" message="Actually Jack is completely wrong" date="8/1/2021"/>
            <Tweet username="Intelligent Person" name="Tanner" message="I agree with Smart Guy" date="8/2/2021"/>
        </div>
        
    )
}

ReactDOM.render(<App/>,
    document.getElementById("root"));