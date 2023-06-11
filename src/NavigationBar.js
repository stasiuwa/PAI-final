import React from "react";
import { Link } from 'react-scroll';
import "./Assets/styles/NavigationBar.css"
const Nav = () => {
    return (
        <nav>
                <input type="checkbox" className="openSidebarMenu" id="openSidebarMenu"/>
                <label htmlFor="openSidebarMenu" className="sidebarIconToggle">
                    <div className="spinner diagonal part-1"></div>
                    <div className="spinner horizontal"></div>
                    <div className="spinner diagonal part-2"></div>
                </label>
            <div id="sidebarMenu">
                <ul className="sidebarMenuInner">
                    <li>
                        <Link activeClass="active"
                              to="video"
                              spy={true}
                              smooth={true}
                              duration={500}>
                            START
                        </Link>
                    </li>
                    <li>
                        <Link activeClass="active"
                              to="sell-section"
                              spy={true}
                              smooth={true}
                              duration={500}>
                            SPRZEDAŻ
                        </Link>
                    </li>
                    <li>
                        <Link activeClass="active"
                              to="offer-bar"
                              spy={true}
                              smooth={true}
                              duration={500}>
                            OFERTA
                        </Link>
                    </li>
                    <li>
                        <Link activeClass="active"
                              to="section_appointment"
                              spy={true}
                              smooth={true}
                              duration={500}>
                            UMÓW SIĘ
                        </Link>
                    </li>
                    <li>
                        <Link activeClass="active"
                              to="section_opinions"
                              spy={true}
                              smooth={true}
                              duration={500}>
                            OPINIE
                        </Link>
                    </li>
                    <li>
                        <Link activeClass="active"
                              to="section-employees"
                              spy={true}
                              smooth={true}
                              duration={500}>
                            PRACOWNICY
                        </Link>
                    </li>
                    <li>
                        <Link activeClass="active"
                              to="section_contact"
                              spy={true}
                              smooth={true}
                              duration={500}>
                            KONTAKT
                        </Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
}
export default Nav;