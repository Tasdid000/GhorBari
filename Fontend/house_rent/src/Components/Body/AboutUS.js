import React from 'react';
import './style.css'; // Import your custom styles

const YourComponent = () => {
    return (
        <div className="responsive-container-block bigContainer" style={{ marginTop: "10%" }}>
            <div className="responsive-container-block Container">
                <div className="imgContainer">
                    <img className="blueDots" src="https://workik-widget-assets.s3.amazonaws.com/widget-assets/images/aw3.svg" alt="Blue Dots" />
                    <img className="mainImg" src="/assets/images/undraw_ordinary.svg" alt="Main Image" />
                </div>
                <div className="responsive-container-block textSide">
                    <p className="text-blk heading">
                        About Us
                    </p>
                    <p className="text-blk subHeading">
                        GhorBari is a premier real estate agency specializing in the seamless facilitation of residential and commercial property transactions. With a commitment to client satisfaction, we offer a diverse range of houses and office spaces for rent and sale, ensuring that each property meets the unique needs of our customers. Our dedicated team of experts strives to simplify the process of finding the perfect living or working space, providing unparalleled service in the realm of real estate solutions. Trust GhorBari for a personalized and efficient experience in your property journey.
                    </p>
                    <div className="responsive-cell-block wk-desk-6 wk-ipadp-6 wk-tab-12 wk-mobile-12">
                        <div className="cardImgContainer">
                            <i class="fa-solid fa-people-roof" style={{ fontSize: "25px", color: "#6053fc" }}></i>
                        </div>
                        <div className="cardText">
                            <p className="text-blk cardHeading">
                                Home Comfort
                            </p>
                            <p className="text-blk cardSubHeading">
                                Rent or buy, find your perfect home with GhorBari.
                            </p>
                        </div>
                    </div>
                    <div className="responsive-cell-block wk-desk-6 wk-ipadp-6 wk-tab-12 wk-mobile-12">
                        <div className="cardImgContainer">
                            <i class="fa-regular fa-building" style={{ fontSize: "25px", color: "#6053fc" }}></i>
                        </div>
                        <div className="cardText">
                            <p className="text-blk cardHeading">
                                Office Solutions
                            </p>
                            <p className="text-blk cardSubHeading">
                                Tailored offices for rent or sale, optimizing your workspace needs.
                            </p>
                        </div>
                    </div>
                    <div className="responsive-cell-block wk-desk-6 wk-ipadp-6 wk-tab-12 wk-mobile-12">
                        <div className="cardImgContainer">
                            <i class="fa-regular fa-handshake" style={{ fontSize: "25px", color: "#6053fc" }}></i>
                        </div>
                        <div className="cardText">
                            <p className="text-blk cardHeading">
                                Trusted Partnerships
                            </p>
                            <p className="text-blk cardSubHeading">
                                Trust, integrity, and transparency define GhorBari's lasting connections.
                            </p>
                        </div>
                    </div>
                    <div className="responsive-cell-block wk-desk-6 wk-ipadp-6 wk-tab-12 wk-mobile-12">
                        <div className="cardImgContainer">
                            <img className="cardImg" src="/assets/images/Property exellience.png" alt="Card Image" />
                        </div>
                        <div className="cardText">
                            <p className="text-blk cardHeading">
                                Property Excellence
                            </p>
                            <p className="text-blk cardSubHeading">
                                Premium properties for rent or sale, setting new standards in living.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default YourComponent;
