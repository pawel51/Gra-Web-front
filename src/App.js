import React, {useState} from 'react';
import './Styles/App.css';
import LoginForm from './Components/LoginForm/LoginForm';
import RegistrationForm from './Components/RegistrationForm/RegistrationForm';
import PrivateRoute from './utils/PrivateRoute';
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";
import AlertComponent from './Components/AlertComponent/AlertComponent';
import Music from "./Components/Music/Music";
import lotrst from "./Components/Music/lotrst.mp3";
import PreCreator from "./Components/CharacterCreator/PreCreator";
import CharacterDetails from "./Components/CharacterDetails/CharacterDetails";
import Shop from "./Components/ShopComponent/Shop.js";
import AddItem from "./Components/Admin/AddItem.js";
import DeleteItem from "./Components/Admin/DeleteItem";
import AddMonster from "./Components/Admin/AddMonster";
import AddQuest from "./Components/Admin/AddQuest.js";
import AddClass from "./Components/Admin/AddClass";
import AddRace from "./Components/Admin/AddRace.js";
import NavigationBar from "./Components/Navigation/NavigationBar.js";
import Races from "./Components/Races/Races.js";
import CharacterList from './Components/CharacterList/CharacterList';
import Quests from "./Components/Quests/Quests.js";
import Guard from "./Components/Guard/Guard.js";
import CharacterSettings from "./Components/CharacterSettings/CharacterSettings.js";



function App() {
    const [title, updateTitle] = useState(null);
    const [play, setPlay] = useState(false)
    const [errorMessage, updateErrorMessage] = useState(null);
    const [audio, setAudio] = useState(new Audio(lotrst))

    return (
        <Router>
            <div className="App">
                {/*<Header title={title}/>*/}
                <div>
                    <Switch>
                        <Route path="/" exact={true}>
                            <LoginForm showError={updateErrorMessage} updateTitle={updateTitle}/>
                        </Route>
                        <Route path="/register">
                            <RegistrationForm showError={updateErrorMessage} updateTitle={updateTitle}/>
                        </Route>
                        <Route path="/login">
                            <LoginForm showError={updateErrorMessage} updateTitle={updateTitle}/>
                        </Route>
                        <Route path= "/characterlist">
                            <CharacterList/>
                        </Route>

                        <PrivateRoute path="/details">
                            <CharacterDetails/>
                        </PrivateRoute>
                        <PrivateRoute path={"/create"}>
                            <PreCreator/>
                        </PrivateRoute>
                        <PrivateRoute path={"/shop"}>
                            <Shop/>
                        </PrivateRoute>
                        <PrivateRoute path="/characterslist">
                            <CharacterList/>
                        </PrivateRoute>
                        <PrivateRoute path="/quests">
                            <Quests/>
                        </PrivateRoute>
                        <PrivateRoute path="/guard">
                            <Guard/>
                        </PrivateRoute>
                        <PrivateRoute path="/characterSettings">
                            <CharacterSettings/>
                        </PrivateRoute>

                        {/*ADMIN*/}
                        <PrivateRoute path={"/admin/item/add"}>
                            <AddItem/>
                        </PrivateRoute>
                        <PrivateRoute path={"/admin/monster/add"}>
                            <AddMonster/>
                        </PrivateRoute>
                        <PrivateRoute path={"/admin/quest/add"}>
                            <AddQuest/>
                        </PrivateRoute>
                        <PrivateRoute path={"/admin/delete"}>
                            <DeleteItem/>
                        </PrivateRoute>
                        <PrivateRoute path={"/admin/class/add"}>
                            <AddClass/>
                        </PrivateRoute>
                        <PrivateRoute path={"/admin/race/add"}>
                            <AddRace/>
                        </PrivateRoute>
                        <PrivateRoute path={"/admin/races"}>
                            <Races/>
                        </PrivateRoute>
                    </Switch>
                    {/*<footer className={"Footer"}>*/}
                    {/*    <p className={"footerText"}>All images in this project are used for education purposes</p>*/}
                    {/*</footer>*/}
                    <AlertComponent errorMessage={errorMessage} hideError={updateErrorMessage}/>

                    <Music play={play} setPlay={setPlay} audio={audio}/>
                </div>
            </div>
        </Router>
    );
}

export default App;
