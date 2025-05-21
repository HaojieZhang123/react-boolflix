import React from 'react'
import NetflixLogo from '../assets/Netflix-Logo.png'
import NetflixAvatar from '../assets/Netflix-Avatar.png'
import { useShows } from '../context/ShowsContext';

const Header = () => {

    const { search, setSearch, searchShows } = useShows();

    return (
        <>
            <header>
                <div className='left-header'>
                    <div>
                        <img src={NetflixLogo} alt="Netflix" />
                    </div>

                    <nav>
                        <ul>
                            <li>Home</li>
                            <li>TV Shows</li>
                            <li>Movies</li>
                            <li>New and Popular</li>
                            <li>My List</li>
                        </ul>
                    </nav>
                </div>

                <div className="right-header">
                    <div className="input-container">
                        <input type="text" value={search} onChange={(e) => setSearch(e.target.value)} />
                        <button onClick={() => searchShows(search)}>Search</button>
                    </div>

                    <div className="user-avatar">
                        <img src={NetflixAvatar} alt="User" />
                    </div>
                </div>
            </header>
        </>
    )
}

export default Header