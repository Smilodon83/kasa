// Import pour la Création du Router
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

// Pages

import Home from './Home'
import About from './About'
import Logement from './Logement'
import Error from './Error'

// Components

import Header from './../components/Header'
import Footer from './../components/Footer'

function App() {
    return (
        <div className="App">
            <Router>
                <Header />
                <Switch>
                    <Route exact path="/">
                        <Home />
                    </Route>
                    <Route exact path="/logements/:id">
                        <Logement />
                    </Route>
                    <Route exact path="/About">
                        <About />
                    </Route>
                    <Route path="/*">
                        <Error />
                    </Route>
                </Switch>
            </Router>
            <Footer />
        </div>
    )
}

export default App
