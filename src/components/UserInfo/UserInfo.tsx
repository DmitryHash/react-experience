import { FC } from "react";
import './UserInfo.scss'

interface IUserInfo {
    username: string
}

export const UserInfo: FC<IUserInfo> = ({username}) => {

const generateInintials = (username: string) => {
   return username.split(' ').map((e) => e[0]).join('').toUpperCase();
}

    return (
        <>
        <div className='userinfo'>
            <div className="userinfo__initials">{generateInintials(username)}</div>
            <div className="userinfo__name">{username}</div>
        </div>
        </>
    )
}