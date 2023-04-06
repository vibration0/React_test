import {userinfo, foodMenu} from '../index';

function Body (){
    return(
    <>
     <ul>
        <li>{foodMenu[0]}</li>
        <li>{foodMenu[1]}</li>
        <li>{foodMenu[2]}</li>
     </ul>   
     <b>{userinfo.name}님의 주소는 {userinfo.address}입니다.</b>
     </>
    )
}

export default Body