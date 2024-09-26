import { FaTwitter, FaGithub } from 'react-icons/fa';

import CoverImage from '../images/cover-image.jpg';
import ProfileImage from '../images/profile-image.png';

export const Header = () => {
    return (
        <header className="main-cover" style={{backgroundImage: `url(${CoverImage})`}}>
            <div className="overlay"></div>
            <div className="container">
                <div className="display-table">
                    <div className="display-table-contents">
                        {/* cover image */}
                        <div className="profile-thumb" style={{backgroundImage: `url(${ProfileImage})`}}></div>
                        {/* 名前、肩書などなど */}
                        <h1 className="title-text">My Name</h1>
                        <h3 className="title-text">My Title(ex.Engineer)</h3>
                        <ul className="social-icons">
                            <li className="icon-link">
                                <a href="https://twitter.com/">
                                    <FaTwitter color="white" size="2rem" />
                                </a>
                            </li>
                            <li className="icon-link">
                                <a href="https://github.com/">
                                    <FaGithub color="white" size="2rem" />
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </header>
    );
};