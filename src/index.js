import ReactDOM from 'react-dom';
import reportWebVitals from './reportWebVitals';
import App from "./App"
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import rootReducer from './redux/modules/index';

const store = createStore(rootReducer); //스토어 생성
console.log(store.getState());      //현재 스토어의 상태 확인.

ReactDOM.render(
    <Provider store={store}>
        <App/>
    </Provider>,
    document.getElementById('root')
);


//앱 퍼포먼스를 로그로 보여줌
// reportWebVitals(console.log);
