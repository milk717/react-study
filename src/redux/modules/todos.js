/* 액션 타입 선언 */
const ADD_TODO = "todos/ADD_TODO";
const TOGGLE_TODO = "todos/TOGGLE_TODO";

/*액션 생성함수 만들기*/
/*
* 액션 생성함수는 말 그대로 액션을 생성하는 함수이기 때문에
* 액션 생성시에 동작을 정의해주진 않는다.
* 액션 생성함수에서는 함수이름과 액션 type을 매핑한다.
* 그리고 그 타입에 대한 다른 필드 값들을 받아와서 정의해준다.
* */
let nextId = 1;
export const addTodo = text => ({
    type: ADD_TODO,
    todo: {
        id: nextId++,
        text
    }
});
export const toggleTodo = id => ({
    type: TOGGLE_TODO,
    id
})

/*초기 상태 선언*/
/*
* 리듀서의 초기 상태는 꼭 객체타입이 아니어도 된다.
* 원시 타입도 가능, 배열도 가능
* */
const initialState = [];

/*리듀서 선언*/
export default function todos(state = initialState, action) {
    switch (action.type) {
        case ADD_TODO: {
            return state.concat(action.todo);
        }
        case TOGGLE_TODO: {
            return state.map(
                todo =>
                    todo.id == action.id
                        ? {...todo, done: !todo.done}
                        : todo
            );

        }
        default:
            return state;
    }
};