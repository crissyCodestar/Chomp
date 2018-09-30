import React from 'react';
import {Route, Link, Switch} from 'react-router-dom';

import BusinessList from '../BusinessList/BusinessList';
import SearchBar from '../SearchBar/SearchBar';
import Yelp from '../../util/Yelp';


const BusinessProfileInfo = ({businessInfo}) => (
        <div>
            {businessInfo.name}
        </div>
)


export default BusinessProfileInfo;
