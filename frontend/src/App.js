import React, {Fragment} from 'react';
import Header from "./components/Header/Header";
import {Switch, Route} from "react-router-dom";
import Posts from "./containers/Posts/Posts";

function App() {
    return (
        <Fragment>
            <Header/>
            <main className="container py-3">
                <Switch>
                    <Route path="/" exact component={Posts}/>
                </Switch>
            </main>
        </Fragment>
    );
}

export default App;
