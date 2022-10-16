import React from 'react';
import "./header.scss";
import logo from "../../image/logo.png";
import Navigation from './Navigation/Navigation';
import Icons from './Icons/Icons';
import LanguageSwitcher from '../LanguageSwitcher';

export default function Header() {
  return (
    <header className='header'>
        <div className='header-content'>
             <img src={logo} className="logo"/>
             <Navigation />
             <LanguageSwitcher />
             <Icons />
        </div>
    </header>
  )
}
