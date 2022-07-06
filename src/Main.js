import { Link } from 'react-router-dom';

function Main(){
    return(
        <div>
            <h1>메인 페이지 입니다</h1>
            <button><Link to="/player">클릭해서 동영상 재생</Link></button>
        </div>
    );
}

export default Main;