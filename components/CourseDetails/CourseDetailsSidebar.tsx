import React, { useState } from 'react';
import Link from 'next/link';
import ModalVideo from 'react-modal-video';
import getImage from '../../helpers/getImage';
import { v4 as uuidv4 } from 'uuid';
import { IClassroom } from '../../interfaces/classroom';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { selectProducts } from '../../redux/features/product-slice';
import { cart_product } from '../../redux/features/cart-slice';
const CourseDetailsSidebar = ({ data }) => {
    const [isOpen, setIsOpen] = useState(false);
    const openVideoModal = () => setIsOpen(!isOpen);
    const dispatch = useDispatch();
    const products = useSelector(selectProducts);
    return (
        <>
            {data && (
                <div className="course-video-widget">
                    <div className="course-widget-wrapper mb-30">
                        <ModalVideo channel='youtube' isOpen={isOpen} videoId='vWLcyFtni6U' onClose={() => { openVideoModal(); }} />
                        <div className="course-video-thumb w-img">
                            <img src={getImage(data.image_url)} alt="img not found" />
                            <div className="sidber-video-btn">
                                <span className="popup-video" onClick={() => { openVideoModal(); }}><i className="fas fa-play"></i></span>
                            </div>
                        </div>
                        <div className="course-video-price-wrap">
                            <div className="course-video-price">
                                {data.price !== "Free" && <span>{data.money_sign}{data.price}</span>}
                                {data.price == "Free" && <span>{data.money_sign}{data.price}</span>}
                                {data.discount !== 0 && <del>{data.money_sign}{data?.discount}</del>}
                            </div>
                            <div className='course-video-price-btn'>
                                <button type='button' onClick={() => dispatch(cart_product(data))}><i className='far fa-shopping-cart'></i> Add to cart</button>
                            </div>
                        </div>
                        <div className="course-video-body">
                            <ul>
                                <li>
                                    <div className="course-vide-icon">
                                        <i className="flaticon-filter"></i>
                                        <span>Level</span>
                                    </div>
                                    <div className="video-corse-info">
                                        <span>{data.level}</span>
                                    </div>
                                </li>
                                <li>
                                    <div className="course-vide-icon">
                                        <i className="flaticon-computer"></i>
                                        <span>Lectures</span>
                                    </div>
                                    <div className="video-corse-info">
                                        <span>{data.lessons.length} {data.lessons.length > 1 ? "Lectures" : "Lecture"}</span>
                                    </div>
                                </li>
                                <li>
                                    <div className="course-vide-icon">
                                        <i className="flaticon-menu-1"></i>
                                        <span>Credit</span>
                                    </div>
                                    <div className="video-corse-info">
                                        <span>{data.credit} {data.credit > 1 ? "Points" : "Point"}</span>
                                    </div>
                                </li>
                                <li>
                                    <div className="course-vide-icon">
                                        <i className="flaticon-clock"></i>
                                        <span>Duration</span>
                                    </div>
                                    <div className="video-corse-info">
                                        <span>{data.duration}</span>
                                    </div>
                                </li>
                                <li>
                                    <div className="course-vide-icon">
                                        <i className="flaticon-menu-2"></i>
                                        <span>Category</span>
                                    </div>
                                    <div className="video-corse-info">
                                        <div className='cart-info-body-categories'>
                                            {data.categories && data.categories.map((category: any) => (
                                                <span key={uuidv4()} className={`${category.slug}`}>
                                                    <Link href={`/category/${category.slug}`} legacyBehavior><a>{category.title}</a></Link>
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                </li>
                                {data.language != '' &&
                                    <li>
                                        <div className="course-vide-icon">
                                            <i className="flaticon-global"></i>
                                            <span>Language</span>
                                        </div>
                                        <div className="video-corse-info">
                                            <span>{data.language}</span>
                                        </div>
                                    </li>}
                                <li>
                                    <div className="course-vide-icon">
                                        <i className="flaticon-bookmark-white"></i>
                                        <span>Access</span>
                                    </div>
                                    <div className="video-corse-info">
                                        <span>Full Lifetime</span>
                                    </div>
                                </li>
                                <li>
                                    <div className="course-vide-icon">
                                        <i className="flaticon-award"></i>
                                        <span>Certificate</span>
                                    </div>
                                    <div className="video-corse-info">
                                        <span>Yes </span>
                                    </div>
                                </li>
                            </ul>
                        </div>
                        {data.classrooms && data.classrooms.map((classroom: IClassroom) => (
                            <div className="video-wishlist mb-0" key={uuidv4()}>
                                <Link href={`/class/${classroom.slug}`} legacyBehavior><a className="video-cart-btn">
                                    <i className="far fa-book"></i>Start Course</a>
                                </Link>
                            </div>
                        ))}
                    </div>
                </div>
            )}
        </>
    )
};

export default CourseDetailsSidebar;