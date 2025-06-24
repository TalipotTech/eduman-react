import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import useSticky from '../../../../hooks/useSticky';
import MobileMenu from '../HeaderOne/MobileMenu';
import HeaderMenu from '../HeaderOne/HeaderMenu';
import HeaderTopTwo from './HeaderTopTwo';
import getImage from '../../../../helpers/getImage';
import storage from "local-storage-fallback"
import { LOCAL_STORAGE_KEYS } from '../../../../hooks/useStorage';
import useCartInfo from '../../../../hooks/use-cart-info';
import SidebarCart from '../../../Common/SidebarCart';

const HeaderTwo = () => {
    // sticky nav
    const { sticky } = useSticky();
    const [menuOpen, setMenuOpen] = useState(false)
    const [cartOpen, setCartOpen] = useState(false)
    const { quantity } = useCartInfo();
    const router = useRouter()
    const [path, setPath] = useState("")

    interface iDataType {
        site_header_logo : string;
        site_header_white_logo : string;
        site_header_category_icon: string;
        site_header_name: string;
        site_header_slogan: string;
        site_header_phone: string;
        site_header_email: string;
        site_header_address: string;
        site_header_category_title: string;
        site_header_login_text: string;
        site_header_login_url: string;
        site_header_signup_text: string;
        site_header_signup_url: string;
        site_header_promo_message: string;
    };
    const [data, setData] = useState<iDataType>()
    const UserObj = JSON.parse(storage.getItem(LOCAL_STORAGE_KEYS.APP_USER));
    const logout = () => {
        storage.removeItem(LOCAL_STORAGE_KEYS.APP_TOKEN)
        storage.removeItem(LOCAL_STORAGE_KEYS.APP_USER)
        storage.clear()
        router.push('/login');
    }

    useEffect(() => {
        setPath(router.pathname)
        fetch(
            `${process.env.APP_BACK_END_URL}/site-setting/header`,
            {
                method: "GET",
                headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json",
                }
            }
        )
            .then(response => response.json())
            .then((response) => {
                setData(response.data);
            })
            .catch(err => console.error(err))
    }, [router])

    return typeof data !== 'undefined'  &&  data !== null ? (
        <header>
            <HeaderTopTwo data={data} />
            {data && (
                <div className={sticky ? "sticky header-area-2 sticky-header" : "header-area-2 sticky-header"}>
                    <div className="container-fluid">
                        <div className="header-main-wrapper">
                            <div className="row align-items-center">
                                <div className="col-3 col-lg-3 col-md-3 col-sm-3 col-3">
                                    <div className="header-logo">
                                        <Link href="/" legacyBehavior><a><img src={getImage(data.site_header_logo)} alt="img" /></a></Link>
                                    </div>
                                </div>
                                <div className="col-xl-9 col-lg-9 col-md-9 col-sm-9 col-9">
                                    <div className="header-main-right  d-flex justify-content-end">
                                        <div className="main-menu d-none d-xl-block">
                                            <nav id="mobile-menu">
                                                <HeaderMenu />
                                            </nav>
                                        </div>
                                        <div className="header-btn">
                                            {UserObj?.id ==  null ?
                                                <Link href={data.site_header_login_url} legacyBehavior><a className="edu-thard-btn d-none d-sm-block">{data.site_header_login_text}</a></Link>
                                            :
                                                <ul className='bd-profile-dropdown'>
                                                    <li className="menu-item-has-children"><button type='button' className="side-toggle">Profile <i className="far fa-chevron-down"></i></button>
                                                        <ul className="sub-menu">
                                                            <li className='pb-0'><Link href="/my-profile" legacyBehavior><a>Hi, {UserObj.first_name} {UserObj.last_name}</a></Link></li>
                                                            <li><Link href="/my-profile" legacyBehavior><a>Edit Account</a></Link></li>
                                                            <li>
                                                                <button type='button' className="side-toggle header-3" onClick={() => { logout() }}>Logout</button>
                                                            </li>
                                                        </ul>
                                                    </li>
                                                </ul>
                                            }
                                            <div className="cart-wrapper ml-30">
                                                <button type='button' className="cart-toggle-btn" onClick={() => { setCartOpen(!cartOpen) }}>
                                                    <div className="header__cart-icon p-relative">
                                                        <i className="far fa-shopping-cart"></i>
                                                        <span className="item-number">{quantity}</span>
                                                    </div>
                                                </button>
                                            </div>
                                            <div className="menu-bar ml-20 bd-profile-menu-space">
                                                <button type='button' className="side-toggle header-2" onClick={() => { setMenuOpen(!menuOpen) }}>
                                                    <div className="bar-icon">
                                                        <span></span>
                                                        <span></span>
                                                        <span></span>
                                                    </div>
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}

            <MobileMenu data={data} menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
            <div onClick={() => setMenuOpen(false)} className={menuOpen ? "offcanvas-overlay overlay-signin" : "offcanvas-overlay"}></div>

            <SidebarCart cartOpen={cartOpen} setCartOpen={setCartOpen} />
			<div onClick={() => setCartOpen(false)} className={cartOpen ? "body-overlay opened" : "body-overlay"}></div>
        </header>
    ) : null
};

export default HeaderTwo;