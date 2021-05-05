import React from 'react';
import styles from './DropDownMenu.scss'

const DropDownMenu = ({
    boardName='',
    boardDescription='',
    imageURL='',
    chairPersonName='',
    setShowDropDown,
}) => {
    const handleMouseEnter = () => {
        console.log(boardName, boardDescription, imageURL, chairPersonName)
        setShowDropDown(true);
    }
    const handleMouseLeave = () => {
        setShowDropDown(false);
    }
    return (
        <div className="content" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
            <div className="infoDiv">
                <span className="name">{boardName}</span>
                <p className="description">{boardDescription}</p>
            </div>
            <div className="externalLinksDiv">
                <div className="title">
                    <span className="caption">Notices</span>
                    <span className="arrowIcon">L</span>
                </div>
                <p className="description">{`View all the recent notices related to ${boardName}.`}</p>
                <div className="title" style={{marginTop: '24px'}}>
                    <span className="caption">Events</span>
                    <span className="arrowIcon">L</span>
                </div>
                <p className="description">{`View all the events organised by ${boardName}.`}</p>
                <div className="title" style={{marginTop: '24px'}}>
                    <span className="caption">Announcements</span>
                    <span className="arrowIcon">L</span>
                </div>
                <p className="description">{`View all the announcements related to ${boardName}.`}</p>
            </div>
            <div className="imageDiv">
                <img src={imageURL} className="image"/>
                <span className="name">{chairPersonName}</span>
                <span className="description">{`Chairman ${boardName}`}</span>
            </div>
        </div>
    )
}

export default DropDownMenu;