import React from 'react'
import './Banniere.css'
import StrangerThings from './Media/ST.jpg'
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import AddIcon from '@material-ui/icons/Add';

function Banniere() {

    const suiteText = (s, n) =>  {
        return s?.length > n ? s.substr(0, n - 1) + '...' : s;
    }

    const styleBanniere = {
        backgroundImage: `url(${StrangerThings})`,
        backgroundPosition: 'center',
        backgroundSize: 'cover'
    }

    return (
        <header className="Banniere" style={styleBanniere}>
            <div className="Banniere_content">
                <h1 className="Banniere_title">Stranger Things</h1>
                <h1 className="Banniere_description">{suiteText(`En 1983, à Hawkins dans l'Indiana,
                    Will Byers disparaît de son domicile. Ses amis se lancent alors dans une recherche
                    semée d'embûches pour le retrouver. Pendant leur quête de réponses, les garçons
                    rencontrent une étrange jeune fille en fuite.`, 207)}
                </h1>
                <div className="Banniere_btns">
                    <button className="Banniere_btn"><PlayArrowIcon/>Lecture</button>
                    <button className="Banniere_btn"><AddIcon/>Ma liste</button>
                </div>
            </div>
            <div className="Banniere_bottom"></div>
        </header>
    )
}

export default Banniere
