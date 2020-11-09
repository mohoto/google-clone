import React from 'react';
import Search from '../Components/interfaces/Search';
import { useStateValue } from '../misc/stateProvider';
import useGoogleSearch from '../useGoogleSearch';
import Response from '../response';
import { Link } from 'react-router-dom';
import './SearchPage.css';
import SearchIcon from '@material-ui/icons/Search';
import DescriptionOutlinedIcon from '@material-ui/icons/Description';
import ImageOutlinedIcon from '@material-ui/icons/ImageOutlined';
import LocalMallOutlinedIcon from '@material-ui/icons/LocalMallOutlined';
import VideoLibraryOutlinedIcon from '@material-ui/icons/VideoLibraryOutlined';
import MoreVertOutlinedIcon from '@material-ui/icons/MoreVertOutlined';

export default function SearchPage() {

    const [{ term }] = useStateValue();
    /*APPEL API GOOGLE*/
    const { data } = useGoogleSearch(term);

    //AIzaSyBXJ2fOjgh1FPuHibL6NyKy0SPSqLbGN6Q
    //https://www.googleapis.com/customsearch/v1?[parameters]
    //https://cse.google.com/cse/create/new
    //54dd4a19c184425c5

    /*Appel à partir du fichier Response.js*/
    //const data = Response;
    //console.log(data);

    return (
        <div className="searchPage">
            <div className="searchPage__header">
                <Link to="/">
                    <img className="searchPage__logo"
                        src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/1000px-Google_2015_logo.svg.png" />
                </Link>
                <div className="searchPage__headerBody">
                    <Search hideButtons />
                    <div className="searchPage__options">
                        <div className="searchPage__option">
                            <SearchIcon />
                            <Link to="/all">Tous</Link>
                        </div>
                        <div className="searchPage__option">
                            <DescriptionOutlinedIcon />
                            <Link to="/news">Actualités</Link>
                        </div>
                        <div className="searchPage__option">
                            <ImageOutlinedIcon />
                            <Link to="/images">Images</Link>
                        </div>
                        <div className="searchPage__option">
                            <LocalMallOutlinedIcon />
                            <Link to="/shopping">Shopping</Link>
                        </div>
                        <div className="searchPage__option">
                            <VideoLibraryOutlinedIcon />
                            <Link to="/videos">Videos</Link>
                        </div>
                        <div className="searchPage__option">
                            < MoreVertOutlinedIcon />
                            <Link to="/plus">Plus</Link>
                        </div>
                        <div className="searchPage__option">
                            <Link to="/settings">Paramètres</Link>
                        </div>
                        <div className="searchPage__option">
                            <Link to="/tools">Outils</Link>
                        </div>
                    </div>
                </div>
            </div>
            {term && (
                <div className="searchPage__results">
                    <p className="result_info">Environ {data?.searchInformation.formattedTotalResults} résultats ({data?.searchInformation.formattedSearchTime} secondes)</p>
                    {data?.items.map(item =>

                        <div className="searchPage__result">
                            <a href={item.link} className="searchPage__resultLink">
                                {item.displayLink}
                            </a>
                            <a href="{item.link}" className="searchPage__resultTitle">
                                <h3>{item.title}</h3>
                            </a>
                            <p className="searchPage__resultSnippet">
                                {item.snippet}
                            </p>
                        </div>

                    )}
                </div>
            )}
        </div>
    )
}
