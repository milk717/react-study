/* 액션 타입 선언 */
const ADD_TODO = "todos/ADD_TODO";
const TOGGLE_TODO = "todos/TOGGLE_TODO";

/*액션 생성함수 만들기*/
let nextId = 1;
export const addTodo = text => ({type:ADD_TODO, text});