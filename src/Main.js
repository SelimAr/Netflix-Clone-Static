import React from 'react'
import Nav from './Nav.js'
import Banniere from './Banniere.js'
import Categories from './Categories.js'

function Main() {
    return (
        <div className="Main">
            <Nav/>
            <Banniere/>
            <Categories title="Action" />
            <Categories title="Comédie" />
            <Categories title="Horreur" />
            <Categories title="Romance" />
            <Categories title="Documentaires" />
        </div>
    )
}

export default Main