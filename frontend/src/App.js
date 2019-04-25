import React, {Fragment} from 'react';
import Header from "./components/Header/Header";
import {Switch, Route} from "react-router-dom";
import Posts from "./containers/Posts/Posts";
import Post from "./containers/Post/Post";

function App() {
    return (
        <Fragment>
            <Header/>
            <main className="container py-3">
                <Switch>
                    <Route path="/" exact component={Posts}/>
                    <Route path="/posts/:id" component={Post}/>
                </Switch>
            </main>
        </Fragment>
    );
}

export default App;
