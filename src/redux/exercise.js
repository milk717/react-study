import {createStore} from 'redux';
//createStore == 스토어를 만들어주는 함수, 프로젝트에는 단 하나의 스토어가 있음.

//리덕스에서 관리할 상태 정의
const initialState = {
    counter: 0,
    text: '',
    list: []
};

/*
* 액션이란?
* 상태에 변화가 필요하게 될 때, 액션을 발생시킨다.
* 액션은 하나의 객체로 표현되고, type 필드를 필수로 갖고있어야 한다.
* */

//액션 타입 정의 (대문자)
const INCREASE = 'INCREASE';
const DECREASE = 'DECREASE';
const CHANGE_TEXT = 'CHANGE_TEXT';
const ADD_TO_LIST = 'ADD_TO_LIST';


/*
* 액션 생성 함수란?
* 액션을 만드는 함수, 파라미터를 받아와서 액션 객체를 만들어줌.
* 나중에 컴포넌트에서 액션을 쉽게 발생시키 위해서 액션 생성함수를 사용.
* 그래서 보통 액션 생성함수 앞에는 export 키워드를 붙인다.
* 액션 생성 함수는 필수적이지는 않다. 액션을 발생시킬 때 마다 직접 액션 객체를 작성해도 된다.
* */

//액션 생성함수 정의 (camelCase)
const increase = () => ({
    type: INCREASE    //type은 필수임. key값같은 느낌??
});

const decrease = () => ({
    type: DECREASE
});

const changeText = text => ({
    type: CHANGE_TEXT,
    text
});

const addToList = item => ({
    type: ADD_TO_LIST,
    item
});

/*
* 리듀서란?
* 리듀서 == 변화를 일으키는 함수
* 리듀서는 현재의 상태와, 전달받은 액션을 바탕으로 새로운 상태를 만들어서 반환한다.
* ex) 현재상태 == 1, 액션 == 상태 1증가 -> 새로운상태 == 2
* */

//리듀서 만들기
//state 의 초깃값을 initialState로 설정
function reducer(state = initialState, action) {
    switch (action.type) {
        case INCREASE:
            return {
                ...state,   //state의 이전 모든 값들
                counter: state.counter + 1
            };
        case DECREASE:
            return {
                ...state,
                counter: state.counter - 1
            };
        case CHANGE_TEXT:
            return {
                ...state,
                text: action.text
            };
        case ADD_TO_LIST:
            return {
                ...state,
                list: state.list.concat(action.item)
            };
        default:
            return state;
    }
}

//스토어 만들기
const store = createStore(reducer);

console.log(store.getState());    //현재 store안에 들어있는 상태 조회

//스토어 상태가 바뀔 때 마다 호출되는 listener
const listener = () => {
    const state = store.getState();
    console.log(state);
}

const unsubscribe = store.subscribe(listener);

store.dispatch(increase());
store.dispatch(decrease());
store.dispatch(changeText('안녕하세요'));
store.dispatch(addToList({id: 1, text: '와우'}));