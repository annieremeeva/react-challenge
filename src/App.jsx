import './styles/index.sass'
import {NavLink, Outlet, useLocation} from 'react-router-dom';
import {useRef} from "react";
function App() {
    const puzzles = [
        {
            route: '/counter',
            title: '1. Simple Counter',
        },
        {
            route: '/list',
            title: '2. Dynamic List of Items with Strikethrough',
        },
        {
            route: '/color-picker',
            title: '3. Color Picker',
        },
        {
            route: '/password-strength-checker',
            title: '4. Password Strength Checker',
        },
        {
            route: '/countdown-timer',
            title: '5. Countdown Timer',
        },
        {
            route: '/countdown-timer/quiz',
            title: '5.1. Quiz',
        },

    ]
    const location = useLocation();
    const currentPath = location.pathname;
    const index = puzzles.findIndex((item) => item.route === currentPath);
    const sidebarNav = useRef(null);
    const bottomNav = useRef(null);
    const isRoot = currentPath === '/';
    const toggleSidebar = () => {
        sidebarNav.current.classList.toggle('app__nav_sidebar-active');
    }
    return (
        <div className="app">
            <div className="app__header">
                <button className="app__toggle-button" type='button' onClick={toggleSidebar}><div className="app__toggle-lines">
                    <span className="app__toggle-line_top"></span>
                    <span className="app__toggle-line_middle"></span>
                    <span className="app__toggle-line_bottom"></span>
                </div></button>
                <h1 className="app__header-text">
                    React Challenge
                </h1>
            </div>
            <div className="app__body">
                <div className="app__nav-container_sidebar">
                    <nav ref={sidebarNav} className="app__nav_sidebar">
                        { puzzles.map((puzzle, index) => <NavLink onClick={toggleSidebar} key={index} to={puzzle.route} className="app__nav-link_sidebar">{puzzle.title}</NavLink>) }
                    </nav>
                </div>


                <div className="app__content">
                    {!isRoot && <h2>{puzzles[index].title}</h2>}
                    <Outlet/>
                    <nav ref={bottomNav} className="app__nav_bottom">
                        {
                            <NavLink
                                className="app__nav-link_bottom"
                                style={{display: `${ index === 0 ? 'none' : 'initial'}`}}
                                to={`${puzzles[index - 1] ? puzzles[index - 1].route : '/'}`}>
                                {puzzles[index - 1] ? puzzles[index - 1].title : '/'}
                            </NavLink>

                        }
                        {
                            <NavLink
                                className="app__nav-link_bottom"
                                style={{display: `${ index === puzzles.length - 1 ? 'none' : 'initial'}`}}
                                to={`${puzzles[index + 1] ? puzzles[index + 1].route : '/'}`}>
                                {puzzles[index + 1] ? puzzles[index + 1].title : '/'}
                            </NavLink>
                        }
                    </nav>
                </div>
            </div>



        </div>
    )
}

export default App
