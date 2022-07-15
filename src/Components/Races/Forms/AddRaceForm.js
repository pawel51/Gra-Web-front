import React, {useState} from 'react';

const AddRaceForm = (props) => {
    const initUser = {id: null, name: '',}

    const [race, setRace] = useState({id: null, name: ''});

    const handleChange = e => {
        const {name, value} = e.target;
        setRace({...race, [name]: value});
    }

    const handleSubmit = e => {
        e.preventDefault();
        if (race.name && race.username) {
            handleChange(e, props.addUser(race));
        }
    }


    return (
        <form>
            <label>Name</label>
            <input className="u-full-width" type="text" name="name" value={race.name} onChange={handleChange}/>
            <label>Username</label>
            <input className="u-full-width" type="text" name="username" value={race.username} onChange={handleChange}/>
            <button className="button-primary" type="submit" onClick={handleSubmit}>Add race</button>
        </form>
    )
};

export default AddRaceForm;