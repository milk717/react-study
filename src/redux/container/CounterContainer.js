import React from 'react';
import {useSelector, useDispatch} from 'react-redux';
import Counter from '../components/Counter';
import {increase, decrease, setDiff} from '../modules/counter';

function CounterContainer(){
    //useSelector는 리덕스의 상태를 조회하는 훅
    //state 의 값은 store.getState() gka
    const {number, diff} = useSelector(state => ({
        number: state.counter.number,
        diff: state.counter.diff
    }));
}