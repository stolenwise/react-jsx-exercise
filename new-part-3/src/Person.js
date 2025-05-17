function Person({ name, age, hobbies, message }) {
    return (
    <div className="person">
        <p>Learn some information about this person</p>
        <h3>Name: 
            {name.length > 8 ? name.slice(0, 6) : name}</h3>

        <strong>{name} ({age})</strong>
        {age >= 18 ? <h3>Please go vote!</h3> : <h3>You must be 18</h3>}
             
            <ul>
                <li>Hobbies:</li>
                {hobbies.map((h, idx) => <li key={h}>{h}</li>)} 
            </ul>
        <h3>{message}</h3>
    </div>   
        );
    }
export {Person};