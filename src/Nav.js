import React, { useState, useEffect} from 'react'
import './Nav.css'
import netflixLogo from './Media/netflixLogo.png'
import avatarLogo from './Media/avatarLogo.png'
import SearchIcon from '@material-ui/icons/Search';
import NotificationsIcon from '@material-ui/icons/Notifications';
import InputBase from '@material-ui/core/InputBase';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    
    main: {
        position: 'fixed',
        right: '125px',
        top: '23px',
    },
    search: {
        position: 'relative',
        borderRadius: theme.shape.borderRadius,
        height: '30px',
        marginLeft: 0,
        width: '100%',
        [theme.breakpoints.up('sm')]: {
          marginLeft: theme.spacing(1),
          width: 'auto',
        },                        
    },
    searchIcon: {
        padding: theme.spacing(0, 0),
        height: '100%',
        position: 'absolute',
        pointerEvents: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: '#FFF',
    },
    inputRoot: {
        color: '#FFF',
        height: '30px',
    },
    inputInput: {
        padding: theme.spacing(1, 0, 1, 0),
        paddingLeft: `calc(1em + ${theme.spacing(3)}px)`,
        transition: theme.transitions.create('width'),
        width: '100%',
        cursor: 'pointer',
        [theme.breakpoints.up('sm')]: {
          width: '0ch',
          '&:focus': {
            width: '12ch',
          },
        },
      },
  }));

function Nav() {

    const classes = useStyles();

    const [show, setShow] = useState(false);

    const gliss = () => {
        if (window.scrollY > 70) {
            setShow(true);
        } else {
            setShow(false);
        }
    };

    useEffect(() => {
        window.addEventListener("scroll", gliss);
    }, []);


    return (
        <div className={`nav ${show && "nav_background"}`}>
            <div className="nav_content">
                <img className="nav_logo" src={netflixLogo} alt=""/>
                <img className="nav_avatar" src={avatarLogo} alt=""/>
                <div className={classes.main}>
                    <div className={classes.search}>
                        <div className={classes.searchIcon}>
                            <SearchIcon fontSize="large"/>
                        </div>
                        <InputBase
                            placeholder="Rechercher"
                            classes={{ root: classes.inputRoot, input: classes.inputInput, }}
                            inputProps={{ 'aria-label': 'search' }}
                        />
                    </div>
                </div>
                <NotificationsIcon fontSize="large" className="notif_logo"/>
            </div>
        </div>
    )
}

export default Nav
