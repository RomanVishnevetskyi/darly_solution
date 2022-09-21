import React from 'react';
import {UserState} from "../../store/reducers/UserSlice";

const Table: React.FC<UserState> = ({users}) => {
    return (
        <div className="table-responsive-sm table-size m-3">
            <table className="table table-hover table-sm">
                <thead>
                <tr>
                    <th scope="col">Id</th>
                    <th scope="col">First Name</th>
                    <th scope="col">Last Name</th>
                    <th scope="col">User Name</th>
                    <th scope="col">E-mail</th>
                    <th scope="col">City</th>
                </tr>
                </thead>
                <tbody>
                {
                    users.map((item) => {
                        return <tr key={item.id}>
                            <th scope="row">{item.id}</th>
                            <td>{item.firstname}</td>
                            <td>{item.lastname}</td>
                            <td>{item.username}</td>
                            <td>{item.email}</td>
                            <td>{item.city}</td>
                        </tr>
                    })
                }
                </tbody>
            </table>
        </div>
    );
};

export default Table;