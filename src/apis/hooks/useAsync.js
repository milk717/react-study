import {useReducer, useEffect} from 'react';

//리듀서 선언하기
function reducer(state, action) {
    switch (action.type) {
        case 'LOADING':
            return{
                loading: true,
                data: null,
                error: null
            };
        case 'SUCCESS':
            return{
                loading: false,
                data: action.data,
                error: null
            }
        case 'ERROR':
            return {
                loading: false,
                data: null,
                error: action.error
            };
        default:
            throw new Error(`Unhandled action type: ${action.type}`);
    }
}

//커스텀 훅 만들기
//callback == api 요청 시작 함수
//deps == useEffect deps 배열
export default function useAsync(callback, deps = []) {
    //리듀서 초기 상태 설정하기
    const [state, dispatch] = useReducer(reducer, {
       loading : false,
        data: null,
        error:fasle
    });

    const fetchData = async () =>{
        dispatch({type: 'LOADING'});
        try{
            const data = await callback();
            dispatch({type: 'SUCCESS', data});
        }catch{
            dispatch({type: 'ERROR', error: e});
        }
    };

    useEffect(()=>{
        fetchData();
    },deps);

    return [state, fetchData];
}