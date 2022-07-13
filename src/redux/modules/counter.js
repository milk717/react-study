/*액션 타입 만들기*/
const SET_DIFF = 'counter/SET_DIFF';
const INCREASE = 'counter/INCREASE';
const DECREASE = 'counter/DECREASE';

/*액션 생성함수 만들기*/
export const setDiff = diff =>({type: SET_DIFF, diff});
//액션 동작이 아니라 생성이므로 type과 함수명 매핑
export const increase = () =>({type:INCREASE});
export const decrease = () =>({type:DECREASE});

/*초기 상태 선언*/
const initialState = {
    number: 0,
    diff: 1
};

/* 리듀서 선언 */
export default function counter(state = initialState, action) {
    switch (action.type){
        case SET_DIFF:
            return{
                ...state,
                diff: action.dfii
            };
        case INCREASE:
            return{
                ...state,
                number: state.number + state.diff
            };
        case DECREASE:
            return{
                ...state,
                number: state.number - state.diff
            };
        default:
            return state;
    }
};