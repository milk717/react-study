import { Link, useLocation } from 'react-router-dom';

function Main(){
    const {state} = useLocation();
    console.log(state);
    return(
        <div>
            <h1>메인 페이지 입니다</h1>
            <button><Link to="/player">클릭해서 동영상 재생</Link></button>
        </div>
    );
}

export default Main;