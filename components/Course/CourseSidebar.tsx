import React, { useReducer } from "react";
import { v4 as uuidv4 } from 'uuid';

const initialState = {
    isActive: true,
    isActiveA: true,
    isActiveB: true,
    isActiveC: true,
    isActiveD: true,
    isActiveE: true
}
const reducer = (state: { isActive: any; isActiveA: any; isActiveB: any; isActiveC: any; isActiveD: any; isActiveE: any; }, action: any) => {
    switch (action) {
        case "categories":
            return {
                ...state,
                isActive: !state.isActive,
            };
        case "ratings":
            return {
                ...state,
                isActiveA: !state.isActiveA,
            };
        case "price":
            return {
                ...state,
                isActiveB: !state.isActiveB,
            };
        default:
            throw new Error("Unexpected action");
    }
};

const CourseSidebar = (data) => {
    const [state, dispatch] = useReducer(reducer, initialState);
    let checkCatsPref = data.checkCatsPref,
        uncheckCatsPref = data.uncheckCatsPref,
        checkRatingPref = data.checkRatingPref,
        checkPricePref = data.checkPricePref,
        cats = data.cats;
    
    const handleChangeCategory = e => {
        if (e.target.checked) {
            let selectedName = e.target.getAttribute('data-name');
            checkCatsPref(e.target.value, selectedName); 
        }
        else 
        {
            let selectedName = e.target.getAttribute('data-name');
            uncheckCatsPref(e.target.value, selectedName); 
        }
    };

    const handleChangeRating = e => {
        if (e.target.checked) {
            let selectedName = e.target.getAttribute('data-name');
            checkRatingPref(e.target.value, selectedName); 
        }
        
    };

    const handleChangePrice = e => {
        if (e.target.checked) {
            let selectedName = e.target.getAttribute('data-name');
            checkPricePref(e.target.value, selectedName); 
        }
     
    };

    let checkAnswer = (val) => {
        return cats.includes(val)
    };

    return typeof data?.categoriesData !== 'undefined'  &&  data !== null ? (
        <div>
            <div className="course-sidebar-widget mb-20">
                <div className={`course-sidebar-info ${state.isActive ? "danger" : "content-hidden"}`}>
                    <h3 className="drop-btn" onClick={() => dispatch("categories")}>{data.sectionData.site_courses_filter_category_title}</h3>
                    <ul>
                        {data.categoriesData && Object.keys(data.categoriesData).map((key) => (
                        <li key={uuidv4()}>
                            <div className="course-sidebar-list">
                                <input 
                                    data-val={data.categoriesData[key].id}
                                    data-name={`course-filter-cat[${data.categoriesData[key].id}]`} 
                                    onChange={handleChangeCategory} 
                                    className="edu-check-box" 
                                    type="checkbox" 
                                    id={`e${data.categoriesData[key].id}`} 
                                    value={data.categoriesData[key].id} />
                                <label htmlFor={`e${data.categoriesData[key].id}`} className="edu-check-label">{ data.categoriesData[key].title }</label>
                            </div>
                        </li>
                        ))}
                    </ul>
                </div>
            </div>
            <div className="course-sidebar-widget mb-20">
                <div className={`course-sidebar-info ${state.isActiveA ? "danger" : "content-hidden"}`}>
                    <h3 className="drop-btn" onClick={() => dispatch("ratings")}>{data.sectionData.site_courses_filter_rating_title}</h3>
                    <ul>
                        <li>
                            <div className="course-sidebar-list">
                                <input 
                                    data-name={`course-filter-rating`} 
                                    onChange={handleChangeRating} 
                                    className="edu-check-box" 
                                    type="radio" 
                                    id="e-25" 
                                    name="rating"
                                    value="5" />
                                <label className="edu-check-star" htmlFor="e-25">
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                </label>
                            </div>
                        </li>
                        <li>
                            <div className="course-sidebar-list">
                                <input 
                                    data-name={`course-filter-rating`} 
                                    onChange={handleChangeRating} 
                                    className="edu-check-box" 
                                    type="radio" 
                                    id="e-24" 
                                    name="rating"
                                    value="4" />
                                <label className="edu-check-star" htmlFor="e-24">
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                    <i className="fal fa-star"></i>
                                </label>
                            </div>
                        </li>
                        <li>
                            <div className="course-sidebar-list">
                                <input 
                                    data-name={`course-filter-rating`} 
                                    onChange={handleChangeRating} 
                                    className="edu-check-box" 
                                    type="radio" 
                                    id="e-12" 
                                    name="rating"
                                    value="3" />
                                <label className="edu-check-star" htmlFor="e-12">
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                    <i className="fal fa-star"></i>
                                    <i className="fal fa-star"></i>
                                </label>
                            </div>
                        </li>
                        <li>
                            <div className="course-sidebar-list">
                                <input 
                                    data-name={`course-filter-rating`} 
                                    onChange={handleChangeRating} 
                                    className="edu-check-box" 
                                    type="radio" 
                                    id="e-28" 
                                    name="rating"
                                    value="2" />
                                <label className="edu-check-star" htmlFor="e-28">
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                    <i className="fal fa-star"></i>
                                    <i className="fal fa-star"></i>
                                    <i className="fal fa-star"></i>
                                </label>
                            </div>
                        </li>
                        <li>
                            <div className="course-sidebar-list">
                                <input 
                                    data-name={`course-filter-rating`} 
                                    onChange={handleChangeRating} 
                                    className="edu-check-box" 
                                    type="radio" 
                                    id="e-14" 
                                    name="rating"
                                    value="1" />
                                <label className="edu-check-star" htmlFor="e-14">
                                    <i className="fas fa-star"></i>
                                    <i className="fal fa-star"></i>
                                    <i className="fal fa-star"></i>
                                    <i className="fal fa-star"></i>
                                    <i className="fal fa-star"></i>
                                </label>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="course-sidebar-widget mb-20">
                <div className={`course-sidebar-info ${state.isActiveB ? "danger" : "content-hidden"}`}>
                    <h3 className="drop-btn" onClick={() => dispatch("price")}>{data.sectionData.site_courses_filter_price_title}</h3>
                    <ul>
                        <li>
                            <div className="course-sidebar-list">
                                <input 
                                    data-name={`course-filter-price`} 
                                    onChange={handleChangePrice} 
                                    className="edu-check-box" 
                                    type="radio" 
                                    id="course-filter-price-all" 
                                    name="price"
                                    value="" />
                                <label className="edu-check-label" htmlFor="course-filter-price-all">All</label>
                            </div>
                        </li>
                        <li>
                            <div className="course-sidebar-list">
                                <input 
                                    data-name={`course-filter-price`} 
                                    onChange={handleChangePrice} 
                                    className="edu-check-box" 
                                    type="radio" 
                                    id="course-filter-price-free" 
                                    name="price"
                                    value="free" />
                                <label className="edu-check-label" htmlFor="course-filter-price-free">Free</label>
                            </div>
                        </li>
                        <li>
                            <div className="course-sidebar-list">
                                <input 
                                    data-name={`course-filter-price`} 
                                    onChange={handleChangePrice} 
                                    className="edu-check-box" 
                                    type="radio" 
                                    id="course-filter-price-paid" 
                                    name="price"
                                    value="paid" />
                                <label className="edu-check-label" htmlFor="course-filter-price-paid">Paid</label>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    ): null;
};

export default CourseSidebar;