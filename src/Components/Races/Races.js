import React, {useEffect, useState} from 'react';
import useAsyncRequest from "./Hooks/UseAsyncRequest.js";
import RacesTable from "./RacesTable.js";
import EditRaceForm from "./Forms/EditRaceForm.js";
import AddRaceForm from "./Forms/AddRaceForm.js";
import { withRouter } from "react-router-dom";

const Races = () => {
    const [data, loading] = useAsyncRequest(3);
    const [races, setRaces] = useState(null);


    const [editing, setEditing] = useState(false);

    const initialUser = {id: null, name: '', username: ''};

    const [currentRace, setCurrentRace] = useState(initialUser);

    useEffect(() => {
        if (data) {
            const formattedRaces = data.map((obj, i) => {
                return {
                    id: i,
                    name: obj.name,
                };
            });
            setRaces(formattedRaces);
        }
    }, [data]);



    const addRace = race => {
        race.id = races.length + 1;
        setRaces([...races, race]);
    }

    const editRace = (id, race) => {
        setEditing(true);
        setCurrentRace(race);
    }
    const updateRace = (newRace) => {
        setRaces(races.map(race => (race.id === currentRace.id ? newRace : race)))
    }

    const deleteRace = id => setRaces(races.filter(race => race.id !== id));


    return (
        <div className="container">
            <h1>RPG in game race factory</h1>
            <div className="row">
                <div className="five columns">
                    { editing ? (
                        <div>
                            <h2>Edit race</h2>
                            <EditRaceForm
                                currentRace={currentRace}
                                setEditing={setEditing}
                                updateRace={updateRace}
                            />
                        </div>
                    ) : (
                        <div>
                            <h2>Add race</h2>
                            <AddRaceForm addRace={addRace} />
                        </div>
                    )}
                </div>
                {loading || !races ? (
                    <p>Loading...</p>
                ) : (
                    <div className="seven columns">
                        <h2>View Races</h2>

                        <RacesTable
                            races={races}
                            deleteRace={deleteRace}
                            editRace={editRace}
                        />
                    </div>
                    )}
            </div>
        </div>
    )

};

export default withRouter(Races) ;