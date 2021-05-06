import React from 'react'
import styles from './SideNavBar.scss'
import {navItemList} from './constants';

const SideNavBar = ({
    showSideNav=true,
}) => {
    
    return (
        showSideNav ?
        (<div className="sncontainer">
            <div className="snseparator"></div>
            <div className="sncontent">
                <div className="snheading">
                    <span className="snicon"></span>
                    <span className="sntext">Content</span>
                </div>
                {
                    navItemList.map((item, id) => {
                        return (
                            <div className="snnavItem" onClick={() => handleClick(item)}>
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