import { EventActionCreators } from './event/action-creators';
import { AuthActionCreators } from './auth/actions-creator';

export const allActionCreators ={
    ...AuthActionCreators,
    ...EventActionCreators
}