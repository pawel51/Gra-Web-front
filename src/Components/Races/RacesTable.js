import React from 'react';

const RacesTable = (props) => {

    return (
        <table>
            <thead>
            <tr>
                <th>ID</th>
                <th>Name</th>
            </tr>
            </thead>
            <tbody>
            { props.races.length > 0 ? (
                props.races.map(race => {
                    const {id, name} = race;
                    return (
                        <tr>
                            <td>{id}</td>
                            <td>{name}</td>
                            <td>
                                <button onClick={() => props.deleteRace(id)}>Delete</button>
                                <button onClick={() => props.editRace(id, race)}>Edit</button>
                            </td>
                        </tr>
                    )
                })
            ) : (
                <tr>
                    <td colSpan={4}>No users found</td>
                </tr>
            )
            }
            </tbody>
        </table>
    );
};

export default RacesTable;