import React from "react";


const Profile = () => {
    return (
        <div className="mudando">
            <link rel="stylesheet" type="text/css" href="styled.css"></link>
        <div>
            <img src="https://avatars.githubusercontent.com/u/77506662?v=4" alt="Avatar of user"/>
            <h1>Helson Matos</h1>
            <h3>Uername:</h3>
            <span className="avatar">helsonmatos</span>
                <div>
                    <h4>Followers</h4>
                    <span>10</span>
                </div>
                <div>
                    <h4>Starreds</h4>
                    <span>10</span>
                </div>
                <div>
                    <h4>Followings</h4>
                    <span>5</span>
                </div>
            </div>
        </div>
   ) 
};

export default Profile;