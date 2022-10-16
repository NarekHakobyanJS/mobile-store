import React from 'react'
import { NavLink } from 'react-router-dom';
import "./navigation.scss";
import {useTranslation} from "react-i18next";

export default function Navigation() {
    const {t} = useTranslation();

    return (
        <nav className='nav'>
            <div className='nav-link'>
                <NavLink to="/">{t('Navigation.main')}</NavLink>
            </div>
            <div className='nav-link'>
                <NavLink to="/store">{t('Navigation.store')}</NavLink>
            </div>
            <div className='nav-link'>
                <NavLink to="/store">{t('Navigation.about')}</NavLink>
            </div>
            <div className='nav-link'>
                <NavLink to="./store">{t('Navigation.contact')}</NavLink>
            </div>
        </nav>
    )
}
