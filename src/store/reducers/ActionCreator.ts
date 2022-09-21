import axios from "axios";
import {IUser} from "../../models/IUser";
import {AppDispatch} from "../store";
import {userSlice} from "./UserSlice";

const url='http://localhost:3000'
export const fetchUsers = () => async (dispatch: AppDispatch) => {
    try {
        dispatch(userSlice.actions.usersFetching())
        const response = await axios.get<IUser[]>(`${url}/users`);
        setTimeout(() => {
            dispatch(userSlice.actions.usersFetchingSuccess(response.data));
        }, 1000)

    } catch (error:any) {
            dispatch(userSlice.actions.usersFetchingError(error.message))
    }

}

export const addUserFromForm = (obj: IUser) => async (dispatch: AppDispatch) => {
    try {
        const response = await axios.post<IUser[]>(`${url}/users`, obj);
        if (response.status = 200 || 201) {
            dispatch(fetchUsers())
        }

    } catch (e:any) {
        dispatch(userSlice.actions.usersFetchingError(e.message))

    }

}



