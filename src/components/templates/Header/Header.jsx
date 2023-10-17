import React from 'react'

import { Wrapper } from "./Header.styled";
import {Link} from "react-router-dom";
import {ROUTES} from "../../../utils/routes";

import LOGO from '../../../images/logo.svg'
import AVATAR from '../../../images/avatar.jpg'

const Header = () => {
    return (
        <Wrapper>
            <div className='logo'>
                <Link to={ROUTES.HOME} >
                    <img src={LOGO} alt="Stuff"/>
                </Link>
            </div>

            <div className='info'>
                <div className='user'>
                    <div className='avatar' style={{ backgroundImage: `url(${AVATAR})` }} ></div>
                    <div className='username'>Guest</div>
                </div>
                <form className='form'>
                    <div className='icon'>
                        <svg className='icon'>
                            <use xlinkHref={`${process.env.PUBLIC_URL}/sprite.svg#search`} />
                        </svg>
                    </div>
                    <div className='input'>
                        <input
                            type='search'
                            name='search'
                            placeholder='Search for anything...'
                            autoComplete='off'
                            onChange={() => {}}
                            value=''
                        />
                    </div>
                    {false && <div className='box'></div>}
                </form>

                <div className='account'>
                    <Link className='favourites' to={ROUTES.HOME}>
                        <svg className='icon-fav'>
                            <use xlinkHref={`${process.env.PUBLIC_URL}/sprite.svg#heart`} />
                        </svg>
                    </Link>
                    <Link to={ROUTES.CART} className='cart'>
                        <svg className='icon-cart'>
                            <use xlinkHref={`${process.env.PUBLIC_URL}/sprite.svg#bag`} />
                        </svg>
                            <span className='count'>2</span>
                    </Link>
                </div>
            </div>
        </Wrapper>
    )
}
export default Header
