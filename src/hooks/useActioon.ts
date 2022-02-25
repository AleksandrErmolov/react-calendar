import { allActionCreators } from './../store/reducers/action-creators';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '../store';
import { bindActionCreators } from 'redux';
export const useAction = () => {
    const dispatch = useDispatch<AppDispatch>()
    const bindAcionCreators(allActionCreators, dispatch)
}