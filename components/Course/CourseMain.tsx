import React, { useEffect, useState, useMemo } from 'react';
import CourseBar from './CourseBar';
import CourseSidebar from './CourseSidebar';
import Link from 'next/link';
import Breadcrumb from '../Common/Breadcrumb';
import { ICourse } from '../../interfaces/course';
import { ICategory } from '../../interfaces/category';
import getImage from '../../helpers/getImage';
import { v4 as uuidv4 } from 'uuid';
import { useRouter } from "next/router";
import Preloader from '../Common/Preloader';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { ICourseFilter } from '../../interfaces/CourseFilter';
import storage from "local-storage-fallback"
import { LOCAL_STORAGE_KEYS } from '../../hooks/useStorage';
import { IWishlist } from '../../interfaces/wishlist';
import DOMPurify from 'isomorphic-dompurify';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { selectProducts } from '../../redux/features/product-slice';
import { cart_product } from '../../redux/features/cart-slice';

const CourseMain = () => {
    const router = useRouter();
    const [data, setData] = useState([])
    const [wishlistData, setWishlistData] = useState([])
    const [sectionData, setSectionData] = useState({})
    const [categoriesData, setCategoriesData] = useState({})
    const [pageData, setPageData] = useState({})
    const [cats, setCats] = useState([]);
    const [selectedPrice, setSelectedPrice] = useState('');
    const [selectedRating, setSelectedRating] = useState('');
    const [search, setSearch] = useState('');
    const searchVal = router.query.search;
    const UserObj = JSON.parse(storage.getItem(LOCAL_STORAGE_KEYS.APP_USER));
    const wishlistIds: any = [];

    const validationSchema = useMemo(
        () =>
            yup.object({

            }),
        [],
    );

    const {
        handleSubmit,
        register,
        setValue,
        formState: { errors },
    } = useForm<ICourseFilter>({
        resolver: yupResolver(validationSchema),
    });

    if(searchVal)
    {
        fetch(`${process.env.APP_BACK_END_URL}/courses/search`, {
            method: "POST",
            headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            },
            body: JSON.stringify({'search': searchVal}),
        })
            .then(response => response.json())
            .then(response => courseFilterResponse(response) )
            .catch(err => console.error(err))
    }

    const handleCourseFilter = async (data: ICourseFilter) => {
        fetch(`${process.env.APP_BACK_END_URL}/courses/search`, {
            method: "POST",
            headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
        })
            .then(response => response.json())
            .then(response => courseFilterResponse(response) )
            .catch(err => console.error(err))
    };

    const courseFilterResponse = (response: any) => {
        if (response.data) {
            setData(response.data);
        }
    }

    const checkCatsPref = (catId: string) => {
        cats.push(catId);
        setCats(cats);
        setValue('cats', JSON.stringify(cats));
    }

    const uncheckCatsPref = (catId: string) => {
        cats.map((option: any, index: number) => {
            if(catId == option) {
                let indx = cats.indexOf(option)
                cats.splice(indx, 1)
            }
        });
        setValue('cats', JSON.stringify(cats));
    }

    const checkPricePref = (price: string) => {
        setSelectedPrice(price);
        setValue('price', price);
    }

    const checkRatingPref = (rating: string) => {
        setSelectedRating(rating);
        setValue('rating', rating);
    }

    const searchPref = (search: string) => {
        setSearch(search);
        setValue('search', search);
    }

    useEffect(() => {
        fetch(
            `${process.env.APP_BACK_END_URL}/setting/inner-page/course`,
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

        fetch(
            `${process.env.APP_BACK_END_URL}/courses/all`,
            {
                method: "GET",
                headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json",
                }
            }
        )
            .then(response => response.json())
            .then((response) =>  {
                setData(response.data);
                setWishlistData(response.wishlistArray);  
            })
            .catch(err => console.error(err))

        fetch(
            `${process.env.APP_BACK_END_URL}/categories/type?type=Course`,
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
                setCategoriesData(response.data);
            })
            .catch(err => console.error(err))
    }, [])

    const handleResponseData = (res) => {
        setSectionData(res.data);
        let data = {
            'title': res.data.site_courses_title, 
            'sub_title': res.data.site_courses_sub_title,
            'image': res.data.site_courses_banner_image,
            'description': res.data?.site_courses_description,
            'keywords': res.data?.site_courses_keywords,
            'url': process.env.APP_BASE_URL
        } 
        setPageData(data);
    }

    const submitCourseForm = (e) => {
        setPageData([]);
        handleSubmit(handleCourseFilter)();
    }

    if (!pageData) return <Preloader />

    const dispatch = useDispatch();
    const products = useSelector(selectProducts);

    return typeof data !== 'undefined'  &&  data !== null ? (
        <main>
            <Breadcrumb pageData={pageData} />

            <CourseBar searchVal={searchVal ?? ""} totalCourse={data.length} searchPref={searchPref} sectionData={sectionData} submitCourseForm={submitCourseForm}  />
            <section className="course-content-area pb-90">
                <form onSubmit={handleSubmit(handleCourseFilter)} autoComplete='off'>
                    <input type="hidden"
                        name="cats"
                        value={JSON.stringify(cats)}
                        {...register('cats')} />
                    <input type="hidden"
                        name="rating"
                        value={selectedRating}
                        {...register('rating')} />
                    <input type="hidden"
                        name="price"
                        value={selectedPrice}
                        {...register('price')} />
                    <input type="hidden"
                        name="search"
                        value={search}
                        {...register('search')} />
                    <div className="container">
                        <div className="row mb-10">
                            <div className="col-xl-3 col-lg-4 col-md-12">
                                <CourseSidebar checkCatsPref={checkCatsPref} uncheckCatsPref={uncheckCatsPref} checkRatingPref={checkRatingPref} checkPricePref={checkPricePref} cats={cats} sectionData={sectionData} categoriesData={categoriesData} />
                            </div>
                            <div className="col-xl-9 col-lg-8 col-md-12">
                                <div className="row">
                                    {data && data.map((course: ICourse) => (
                                        <div key={uuidv4()} className="col-xl-4 col-lg-6 col-md-6">
                                            <div className="protfolio-course-2-wrapper mb-30">
                                                <div className="student-course-img">
                                                    <Link href={`/course/${course.slug}`} legacyBehavior><a><img src={getImage(course.image_url)} alt="course-img" /></a></Link>
                                                </div>
                                                <div className="course-cart">
                                                    <div className="course-info-wrapper">
                                                        <div className="cart-info-body">
                                                            <div className='cart-info-body-categories'>
                                                                {course.categories && course.categories.map((cat: ICategory) => (
                                                                    <span key={cat.title} className={`category-color category-color-1 ${cat.slug}`}>
                                                                        <Link href={`/category/${cat.slug}`} legacyBehavior><a>{cat.title}</a></Link>
                                                                    </span>
                                                                ))}
                                                            </div>
                                                            <Link href={`/course/${course.slug}`} legacyBehavior><a><h3>{course.title}</h3></a></Link>
                                                            <div className="cart-lavel">
                                                                <h5>Level : <span>{course.level}</span></h5>
                                                                <p dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(course.teaser) }} />
                                                            </div>
                                                            <div className="course-action">
                                                                <Link href={`/course/${course.slug}`} legacyBehavior><a className="view-details-btn">View Details</a></Link>
                                                                <Link href={`/my-wishlist?cid=${course.id}`} legacyBehavior><a>
                                                                    <button className={`wishlist-btn ${( wishlistData[course.id] && wishlistData[course.id].includes(UserObj?.id) == true ) ? 'w-added' : ''}`}><i className="flaticon-like"></i></button>
                                                                </a></Link>
                                                                <button type='button' onClick={() => dispatch(cart_product(course))} className="c-share-btn">
                                                                    <i className="fal fa-shopping-cart"></i>
                                                                </button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="portfolio-course-2-content">
                                                    <div className="portfolio-course-wrapper">
                                                        <div className="portfolio-price">
                                                            {course.price !== "Free" && <span>{course.money_sign}{course.price}</span>}
                                                            {course.price == "Free" && <span>{course.money_sign}{course.price}</span>}
                                                            {course.discount !== "0.00" && course.discount && (
                                                                <del className="price-old">{course.money_sign}{course?.discount}</del>
                                                            )}
                                                        </div> 
                                                        <div className="portfolio-course-2">
                                                            <h3><Link href={`/course/${course.slug}`} legacyBehavior><a>{course.title}</a></Link></h3>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="course-2-footer">
                                                    <div className="coursee-clock">
                                                        <i className="flaticon-clock"></i><span>{course.duration}</span>
                                                    </div>
                                                    <div className="course-creadit d-none">
                                                        <i className="flaticon-menu-1"></i><span>{course.credit}</span>
                                                    </div>
                                                    <div className="course-network">
                                                        <i className="fal fa-signal mr-10"></i><span>{course.level.substring(0,20)} {course.level.length > 20 ? `...` : ''}</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </form>
            </section>
        </main>
    ) : null
};

export default CourseMain;