import React from 'react'
import './Categories.css'
import riverdale from './Media/riverdale.png'
import sabrina from './Media/sabrina.png'
import dark from './Media/dark.png'
import reaswhy from './Media/reaswhy.jpg'
import lupin from './Media/lupin.jpg'
import ragnarok from './Media/ragnarok.webp'

function Categories({ title }) {

    const styleH1 = {
        marginLeft: '22px'
    }

    return (
        <div className="categories">
            <h1 style={styleH1}>{title}</h1>
            <div className="categories_posters">
                <img className="categories_poster" src={riverdale} alt=""/>
                <img className="categories_poster" src={sabrina} alt=""/>
                <img className="categories_poster" src={dark} alt=""/>
                <img className="categories_poster" src={reaswhy} alt=""/>
                <img className="categories_poster" src={lupin} alt=""/>
                <img className="categories_poster" src={ragnarok} alt=""/>
            </div>
        </div>
    )
}

export default Categories
