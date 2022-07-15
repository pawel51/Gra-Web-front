import React from 'react';
import {Nav} from "react-bootstrap";
import {Link} from "react-router-dom";
import "../../Styles/App.css"
import {ACCESS_TOKEN_NAME} from "../../constants/apiConstants.js";

const NavigationBar = (props) => {
    function handleLogout() {
        localStorage.removeItem(ACCESS_TOKEN_NAME)
        props.history.push('/login')
    }
    return (
        <Nav className={"topbarnavigation"} justify variant="tabs" defaultActiveKey="/home">
            <div className="ml-auto">
                <button className="btn btn-danger" onClick={() => handleLogout()}>Logout</button>
            </div>
            <Nav.Item>
                <Nav.Link className={"navigationLink"} as={Link} to={"/details"}>Armory</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link className={"navigationLink"} as={Link} to={"/quests"}>Quests</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link className={"navigationLink"} as={Link} to={"/guard"}>Guard</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link className={"navigationLink"} as={Link} to={"/shop"}>Shop</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link className={"navigationLink"} as={Link} to={"/characterslist"}>CharacterList</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link className={"navigationLink"} as={Link} to={"/charactersettings"}>Settings</Nav.Link>
            </Nav.Item>
        </Nav>
    );
};

export default NavigationBar;