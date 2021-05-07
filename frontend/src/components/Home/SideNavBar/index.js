import React from 'react'
import styles from './SideNavBar.scss'
import {navItemList} from './constants';
import ContentsIcon from './ContentsIcon';

const SideNavBar = ({
    showSideNav=true,
}) => {

    return (
        showSideNav ?
        (<div className="sncontainer">
            <div className="snseparator"></div>
            <div className="sncontent">
                <div className="snheading">
                    <span className="snicon"><ContentsIcon/></span>
                    <span className="sntext">Contents</span>
                </div>
                {
                    navItemList.map((item, id) => {
                        return (
                            <div className="snnavItem">
                                {item}
                            </div>
                        )
                    })
                }
            </div>
        </div>) : null
    )
}

export default SideNavBar;