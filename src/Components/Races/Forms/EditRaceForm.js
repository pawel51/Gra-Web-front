import React, {useEffect, useState} from 'react';

const EditRaceForm = (props) => {
    const [race, setRace] = useState(props.currentRace);

    useEffect(() => {
        setRace(props.currentRace)
    }, [props])

    const handleChange = e => {
        const {name, value} = e.target;
        setRace({...race, [name]: value});
    }

    const handleSubmit = e => {
        e.preventDefault();
        if (race.name && race.username) props.updateRace(race);
    }

    return (
        <form>
            <label>Name</label>
            <input className="u-full-width" type="text" value={race.name} name="name" onChange={handleChange} />
            <label>Username</label>
            <input className="u-full-width" type="text" value={race.username} name="username" onChange={handleChange} />
            <button className="button-primary" type="submit" onClick={handleSubmit} >Edit user</button>
            <button type="submit" onClick={() => props.setEditing(false)} >Cancel</button>
        </form>
    )
};

export default EditRaceForm;