import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import Breadcrumb from '../Common/Breadcrumb';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import useCartInfo from '../../hooks/use-cart-info';
import { cart_product, decrease_quantity, remove_cart_product } from '../../redux/features/cart-slice';
import getImage from '../../helpers/getImage';

const CartMain = () => {
    interface iDataType {
        site_cart_btn_url : string;
        site_cart_btn_text: string;
    };
    interface RootState {
        cart: {
            cartProducts: any[];
        };
    }
  
    const [sectionData, setSectionData] = useState<iDataType>()
    const [pageData, setPageData] = useState({})

    useEffect(() => {
        fetch(
            `${process.env.APP_BACK_END_URL}/setting/inner-page/cart`,
            {
                method: "GET",
                headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json",
                }
            }
        )
            .then(response => response.json())
            .then((response) => handleResponseData(response))
            .catch(err => console.error(err))
    }, [])

    const handleResponseData = (res) => {
        setSectionData(res.data);
        let data = {
            'title': res.data.site_cart_title,
            'sub_title': res.data?.site_cart_sub_title,
            'image': res.data.site_cart_banner_image,
            'description': res.data?.site_cart_description,
            'keywords': res.data?.site_cart_keywords,
            'url': process.env.APP_BASE_URL
        } 
        setPageData(data);
    }

    const { cartProducts } = useSelector((state: RootState) => state.cart);
    const dispatch = useDispatch();
    const { total } = useCartInfo();
    const handleChange = (e) => { }

    return typeof pageData !== 'undefined'  &&  pageData !== null ? (
        <>
            <Breadcrumb pageData={pageData} />

            {cartProducts.length === 0 &&
                <div className="container">
                    <div className="empty-text pt-100 pb-100 text-center">
                        <h3>Your cart is empty</h3>
                    </div>
                </div>
            }

            {cartProducts.length >= 1 &&
                <section className="cart-area pt-100 pb-100">
                    <div className="container">
                        <div className="row">
                            <div className="col-12">
                                <div className="table-content table-responsive">
                                    <table className="table">
                                        <thead>
                                            <tr>
                                                <th className="product-thumbnail">Images</th>
                                                <th className="cart-product-name">Product</th>
                                                <th className="product-price">Unit Price</th>
                                                <th className="product-quantity">Quantity</th>
                                                <th className="product-subtotal">Total</th>
                                                <th className="product-remove">Remove</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                        {cartProducts?.map((item:any, index:any) => (
                                            <tr key={index}>
                                                <td className="product-thumbnail"><Link legacyBehavior href={`/course/${item.slug}`}><a><img src={getImage(item.image_url)} alt="img not found" /></a></Link></td>
                                                <td className="product-name"><Link legacyBehavior href={`/course/${item.slug}`}><a>{item.title}</a></Link></td>
                                                <td className="product-price"><span className="amount">${item.price}</span></td>
                                                <td className="product-quantity text-center">
                                                    <div className="product-quantity mt-10 mb-10">
                                                        <div className="product-quantity-form">
                                                            <form onSubmit={e => e.preventDefault()}>
                                                                <button onClick={() => dispatch(decrease_quantity(item))} className="cart-minus"><i className="far fa-minus"></i></button>
                                                                <input className="cart-input" type="text" onChange={handleChange} value={item?.quantity} />
                                                                <button onClick={() => dispatch(cart_product(item))} className="cart-plus"><i className="far fa-plus"></i></button>
                                                            </form>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td className="product-subtotal"><span className="amount">${item?.quantity * item.price}</span></td>
                                                <td className="product-remove"><button type='button' onClick={() => dispatch(remove_cart_product(item))}><i className="fa fa-times"></i></button></td>
                                            </tr>
                                        ))}
                                            <tr>
                                                <td colSpan={3} className='border-right-none'></td>
                                                <td><strong>Total</strong></td>
                                                <td className='border-right-none'><strong>${total}</strong></td>
                                                <td></td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                                <div className="row">
                                    <div className="col-12">
                                        <div className="coupon-all">
                                            <div className="coupon2">
                                                {sectionData?.site_cart_btn_url && <Link legacyBehavior href={sectionData?.site_cart_btn_url}><a className="edu-border-btn">{sectionData?.site_cart_btn_text}</a></Link>}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            }
        </>
    ) : null
};

export default CartMain;