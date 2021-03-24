import React from 'react';
import styles from './Header.module.css';
import {Link} from 'react-router-dom';

import { useDispatch } from 'react-redux';
import { changeActiveSubreddit } from '../subreddits/subredditsSlice';

import { SearchBar } from './searchBar/SearchBar';
import RedditLogo from './reddit-logo.png'

export const Header = () => {
    const dispatch = useDispatch();

    const onTitleClicked = () => {
        dispatch(changeActiveSubreddit("/r/Home/"));
    }

    return (
        <header className={styles.mainHeader}>             
            <Link to="/"><h1 onClick={onTitleClicked}><img id="logo" src={RedditLogo} alt="Reddit Logo" /> Reddit<span>Client</span></h1>
            </Link>
            <SearchBar className={styles.searchBar} />
        </header>
    );
}