/**
 * Created by Rasmus on 31.03.2017.
 */
import React from 'react'
import {Route, Link} from 'react-router-dom'

const IndexListItemLink = ({to, children}) => (
    <Route path={to} children={({match}) => (
        <li role="presentation" className={match ? 'active' : ''}>
            <Link to={to} params={this.props.lang} onlyActiveOnIndex>{children}</Link>
        </li>
    )} />
);

export default IndexListItemLink
