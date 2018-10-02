import React from 'react';
import {Route, Link, Switch} from 'react-router-dom';

import BusinessList from '../BusinessList/BusinessList';
import SearchBar from '../SearchBar/SearchBar';
import Yelp from '../../util/Yelp';
import Header from './Components/Header';
import Background from './Components/Background';
import Body from './Components/Body';
import Reviews from './Components/Reviews';


const BusinessProfileInfo = ({businessInfo}) => (

        <div>
        {/*
          TODO:
          {Backgorund}
            Highlighted pictures (Top, Left/right)
          {Header}
            Name   Category Price Rating Review count
          {Top sections}

            Info panel (Top, left/right)
              phone address hours/open Now website
                *Is cloased{returns only of cloased}
          {Lower Section}
            Highligth Reiews

        */
      console.log(businessInfo)}

            <Header businessInfo={businessInfo} />

            <Background  businessInfo={businessInfo} />

            <Body businessInfo={businessInfo} />

            <Reviews businessInfo={businessInfo} />

        </div>
)


export default BusinessProfileInfo;
