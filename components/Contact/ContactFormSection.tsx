import React from 'react';

const ContactFormSection = (data) => {
    return (
        <>
            <div className="section-title mb-50">
                <h2>{data.sectionData.site_contact_title}</h2>
            </div>
            <div className="contact-form">
                <form action="#">
                    <div className="row">
                        <div className="col-xl-6">
                            <div className="contact-from-input mb-20">
                                <input type="text" placeholder="Name" />
                            </div>
                        </div>
                        <div className="col-xl-6">
                            <div className="contact-from-input mb-20">
                                <input type="text" placeholder="Phone" />
                            </div>
                        </div>
                        <div className="col-xl-6">
                            <div className="contact-from-input mb-20">
                                <input type="text" placeholder="Email" />
                            </div>
                        </div>
                        <div className="col-xl-6">
                            <div className="contact-select">
                                <select className="mb-20">
                                    <option defaultValue="Subject">Course</option>
                                    <option defaultValue="Subject">Financial Aid</option>
                                    <option defaultValue="Subject">Payment</option>
                                    <option defaultValue="Subject">Information</option>
                                </select>
                            </div>
                        </div>
                        <div className="col-xl-12">
                            <div className="contact-from-input mb-20">
                                <textarea placeholder="Message" name="message"></textarea>
                            </div>
                        </div>
                        <div className="colxl-2 ">
                            <div className="cont-btn mb-20">
                                <button type='button' className="cont-btn">{data.sectionData.site_contact_btn_text}</button>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </>
    );
};

export default ContactFormSection;