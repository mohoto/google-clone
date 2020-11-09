import React, { useState } from 'react';
import SearchIcon from '@material-ui/icons/Search';
import MicIcon from '@material-ui/icons/Mic';
import './Search.css';
import { Button } from '@material-ui/core/';
import { useHistory, useParams } from 'react-router-dom';
import { actionTypes } from '../../reducers/userReducer';
import { useStateValue } from '../../misc/stateProvider';

export default function Search({ hideButtons = false }) {

    const [input, setInput] = useState('');
    const history = useHistory();
    const [{ term }, dispatch] = useStateValue();



    const search = event => {
        event.preventDefault();
        dispatch({
            type: actionTypes.SET_KEYWORD,
            term: input
        })
        history.push('/recherche');

    }

    return (
        <form className="search">
            <div className="search__input">
                <SearchIcon className="search__inputIcon" />
                <input value={input} onChange={e => setInput(e.target.value)} />
                <MicIcon />
            </div>
            <div className={`search__button ${hideButtons ? "hidden" : ""}`}>
                <Button type="input" variant="outlined" onClick={search}>Google recherche</Button>
                <Button variant="outlined">J'ai de la chance</Button>
            </div>
        </form>
    )
}
