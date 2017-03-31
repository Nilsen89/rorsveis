/**
 * Created by Rasmus on 31.03.2017.
 */
import React from 'react'
import {Route, Link, NavLink} from 'react-router-dom'

const ListItemLink = ({to, children}) => (
    <Route path={to} children={({match}) => (
        <li role="presentation">
            <NavLink exact activeStyle={{backgroundColor: "rgba(88, 88, 88, 0.2)"}} to={to}>{children}</NavLink>
        </li>
    )} />
);

export default ListItemLink