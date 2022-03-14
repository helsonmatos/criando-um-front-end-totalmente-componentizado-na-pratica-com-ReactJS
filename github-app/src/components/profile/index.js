import React from "react";
import * as S from './styled';


const Profile = () => {
    return (
        <S.Wrapper>
            <S.WrapperImage>
                <img src="https://avatars.githubusercontent.com/u/77506662?v=4" alt="Avatar of user"/>
            </S.WrapperImage>
            <h1>Helson Matos</h1>
            <S.WrapperUserName>
            <h3>Uername:</h3>
            <span>helsonmatos</span>
            </S.WrapperUserName>
            <S.WrapperStatusCount>
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
            </S.WrapperStatusCount>       
        </S.Wrapper>
   ) 
};

export default Profile;