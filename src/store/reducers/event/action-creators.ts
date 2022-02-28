import { AppDispatch } from '../..';
import UserService from '../../../api/UserService';
import { IEvent } from '../../../models/IEvents';
import { IUser } from '../../../models/IUsers';
import { EventActionEnum, SetEventsAction, SetGuestsAction } from './types';

export const EventActionCreators = {
    setGuests: (payload: IUser[]):SetGuestsAction => ({type: EventActionEnum.SET_GUESTS, payload}),
    setEvents: (payload: IEvent[]):SetEventsAction => ({type: EventActionEnum.SET_EVENTS, payload}),
    fetchGuests: () => async (dispatch:AppDispatch) =>  {
        try {
            const response = await UserService.getUsers()
            dispatch(EventActionCreators.setGuests(response.data))
        } catch (error) {
            console.log(error)
        }
    }
}