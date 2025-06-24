import Link from 'next/link';
import React from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import useCartInfo from '../../hooks/use-cart-info';
import getImage from '../../helpers/getImage';
import { cart_product, decrease_quantity, remove_cart_product } from '../../redux/features/cart-slice';

interface RootState {
    cart: {
        cartProducts: any[];
    };
}

const SidebarCart = ({setCartOpen, cartOpen}) => {
    const { cartProducts } = useSelector( (state: RootState) => state?.cart );
    const dispatch = useDispatch();
    const { total } = useCartInfo();
    const handleChange = (e) => { }
    return (
        <div className="cartmini__area">
            <div className={cartOpen ? "cartmini__wrapper opened" : "cartmini__wrapper"}>
                <div className="cartmini__title">
                    <h4>Shopping cart</h4>
                </div>
                <div className="cartmini__close">
                    <button type="button" className="cartmini__close-btn" onClick={() => setCartOpen(false)}><i className="fal fa-times"></i></button>
                </div>
                <div className="cartmini__widget">
                    <div className="cartmini__inner">
                        {cartProducts.length === 0 &&
                            <div className="empty-text text-center pt-30 pb-30">
                                <h5>Your cart is empty</h5>
                            </div>
                        }
                        {cartProducts.length >= 1 &&
                            <ul>
                                {cartProducts?.map((item:any, index:any) => (
                                <li key={index}>
                                    <div className="cartmini__thumb">
                                        <Link  legacyBehavior href={`/course-details/${item.id}`}><a><img src={getImage(item.image_url)} alt="img not found" /></a></Link>
                                    </div>
                                    <div className="cartmini__content">
                                        <h5><Link href={`/course-details/${item.id}`} legacyBehavior><a>{item.title}</a></Link></h5>
                                        <div className="product-quantity mt-10 mb-10">
                                            <form onSubmit={e => e.preventDefault()}>
                                                <button onClick={() => dispatch(decrease_quantity(item))} className="cart-minus"><i className="far fa-minus"></i></button>
                                                <input className="cart-input" type="text" onChange={handleChange} value={item?.quantity} />
                                                <button onClick={() => dispatch(cart_product(item))} className="cart-plus"><i className="far fa-plus"></i></button>
                                            </form>
                                        </div>
                                        <div className="product__sm-price-wrapper">
                                            <span className="product__sm-price">${item?.quantity * item.price}</span>
                                        </div>
                                    </div>
                                    <button type='button' className="cartmini__del" onClick={() => dispatch(remove_cart_product(item))}><i className="fal fa-times"></i></button>
                                </li>
                                ))}
                            </ul>
                        }
                    </div>
                    <div className="cartmini__checkout">
                        <div className="cartmini__checkout-title mb-30">
                            <h4>Subtotal:</h4>
                            <span>${total}</span>
                        </div>
                    </div>
                    <div className="cartmini__viewcart">
                        <Link href="/cart" legacyBehavior><a className="edu-sec-btn">View cart</a></Link>
                        <Link href="/checkout" legacyBehavior><a className="edu-sec-btn">Checkout</a></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SidebarCart;