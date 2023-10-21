import React from "react";
import  ReactDOM  from "react-dom/client";

const root = ReactDOM.createRoot(document.getElementById("root"));

const NavComponent = () =>{
    return(
        <div className="navbar">
            <div className="nav-items">
                <ul className="items">
                    <a key={"home"} href="#home">
                        <li>Home</li>
                    </a>

                    <a key={"about"} href="#about">
                        <li>About</li>
                    </a>

                    <a key={"contact"} href="#contact">
                        <li>Contact</li>
                    </a>
                </ul>
            </div>

            <div className="cart">
                 <i className="fa-solid fa-cart-shopping"></i>
            </div>

        </div>
    )
}

const Header = () =>{
    return(
        <div className="header">

            <img src="https://images.crunchbase.com/image/upload/c_lpad,f_auto,q_auto:eco,dpr_1/aksi8creapsgodytrmay"></img>

            <NavComponent/>

        </div>
    )
}

// ********************************************************************

const result = {
    "data":{

"restaurants": [
    {
    "info": {
    "id": "45099",
    "name": "KFC",
    "cloudinaryImageId": "56c9ab92bd79745fd152a30fa2525426",
    "locality": "Hindustan Park",
    "areaName": "Gariahat",
    "costForTwo": "₹450 for two",
    "cuisines": [
    "Burgers",
    "Biryani",
    "American",
    "Snacks",
    "Fast Food"
    ],
    "avgRating": 4.4,
    "feeDetails": {
    "restaurantId": "45099",
    "fees": [
    {
    "name": "BASE_DISTANCE",
    "fee": 3800
    },
    {
    "name": "BASE_TIME"
    },
    {
    "name": "ANCILLARY_SURGE_FEE"
    }
    ],
    "totalFee": 3800
    },
    "parentId": "547",
    "avgRatingString": "4.4",
    "totalRatingsString": "10K+",
    "promoted": true,
    "adTrackingId": "cid=8903696~p=1~eid=0000018b-51f2-7b90-74b5-46a200730149~srvts=1697886927760~45995",
    "sla": {
    "deliveryTime": 27,
    "lastMileTravel": 2.9,
    "serviceability": "SERVICEABLE",
    "slaString": "27 mins",
    "lastMileTravelString": "2.9 km",
    "iconType": "ICON_TYPE_EMPTY"
    },
    "availability": {
    "nextCloseTime": "2023-10-22 02:59:00",
    "opened": true
    },
    "badges": {},
    "isOpen": true,
    "type": "F",
    "badgesV2": {
    "entityBadges": {
    "textBased": {},
    "imageBased": {},
    "textExtendedBadges": {}
    }
    },
    "aggregatedDiscountInfoV3": {
    "header": "20% OFF",
    "subHeader": "UPTO ₹50"
    },
    "differentiatedUi": {
    "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
    "differentiatedUiMediaDetails": {
    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
    "lottie": {},
    "video": {}
    }
    },
    "reviewsSummary": {},
    "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
    "restaurantOfferPresentationInfo": {}
    },
    "analytics": {},
    "cta": {
    "link": "swiggy://menu?restaurant_id=45099",
    "text": "RESTAURANT_MENU",
    "type": "DEEPLINK"
    }
    },
    {
    "info": {
    "id": "194163",
    "name": "Burger King",
    "cloudinaryImageId": "e33e1d3ba7d6b2bb0d45e1001b731fcf",
    "locality": "Ballygunge",
    "areaName": "Ballygunge",
    "costForTwo": "₹350 for two",
    "cuisines": [
    "Burgers",
    "American"
    ],
    "avgRating": 4.1,
    "feeDetails": {
    "restaurantId": "194163",
    "fees": [
    {
    "name": "BASE_DISTANCE",
    "fee": 3500
    },
    {
    "name": "BASE_TIME"
    },
    {
    "name": "ANCILLARY_SURGE_FEE"
    }
    ],
    "totalFee": 3500
    },
    "parentId": "166",
    "avgRatingString": "4.1",
    "totalRatingsString": "10K+",
    "sla": {
    "deliveryTime": 27,
    "lastMileTravel": 2.6,
    "serviceability": "SERVICEABLE",
    "slaString": "27 mins",
    "lastMileTravelString": "2.6 km",
    "iconType": "ICON_TYPE_EMPTY"
    },
    "availability": {
    "nextCloseTime": "2023-10-22 00:00:00",
    "opened": true
    },
    "badges": {},
    "isOpen": true,
    "type": "F",
    "badgesV2": {
    "entityBadges": {
    "textBased": {},
    "imageBased": {},
    "textExtendedBadges": {}
    }
    },
    "aggregatedDiscountInfoV3": {
    "header": "60% OFF",
    "subHeader": "UPTO ₹120"
    },
    "differentiatedUi": {
    "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
    "differentiatedUiMediaDetails": {
    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
    "lottie": {},
    "video": {}
    }
    },
    "reviewsSummary": {},
    "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
    "restaurantOfferPresentationInfo": {}
    },
    "analytics": {},
    "cta": {
    "link": "swiggy://menu?restaurant_id=194163",
    "text": "RESTAURANT_MENU",
    "type": "DEEPLINK"
    }
    },
    {
    "info": {
    "id": "3010",
    "name": "Ballygunge Dhaba",
    "cloudinaryImageId": "ak4ezziyg2d3u4xtxzka",
    "locality": "Ballygunge",
    "areaName": "Ballygunge Phari",
    "costForTwo": "₹500 for two",
    "cuisines": [
    "North Indian",
    "Biryani",
    "Chinese"
    ],
    "avgRating": 4.4,
    "feeDetails": {
    "restaurantId": "3010",
    "fees": [
    {
    "name": "BASE_DISTANCE",
    "fee": 3600
    },
    {
    "name": "BASE_TIME"
    },
    {
    "name": "ANCILLARY_SURGE_FEE"
    }
    ],
    "totalFee": 3600
    },
    "parentId": "1006",
    "avgRatingString": "4.4",
    "totalRatingsString": "10K+",
    "sla": {
    "deliveryTime": 28,
    "lastMileTravel": 2.2,
    "serviceability": "SERVICEABLE",
    "slaString": "28 mins",
    "lastMileTravelString": "2.2 km",
    "iconType": "ICON_TYPE_EMPTY"
    },
    "availability": {
    "nextCloseTime": "2023-10-21 22:00:00",
    "opened": true
    },
    "badges": {},
    "isOpen": true,
    "aggregatedDiscountInfoV2": {},
    "type": "F",
    "badgesV2": {
    "entityBadges": {
    "textExtendedBadges": {},
    "textBased": {},
    "imageBased": {}
    }
    },
    "differentiatedUi": {
    "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
    "differentiatedUiMediaDetails": {
    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
    "lottie": {},
    "video": {}
    }
    },
    "reviewsSummary": {},
    "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
    "restaurantOfferPresentationInfo": {}
    },
    "analytics": {},
    "cta": {
    "link": "swiggy://menu?restaurant_id=3010",
    "text": "RESTAURANT_MENU",
    "type": "DEEPLINK"
    }
    },
    {
    "info": {
    "id": "3638",
    "name": "Gupta Brothers -Ballygunge",
    "cloudinaryImageId": "s6osrxqumlqssg6wvu65",
    "locality": "Park Road",
    "areaName": "Ballygunge",
    "costForTwo": "₹300 for two",
    "cuisines": [
    "North Indian",
    "Chinese",
    "Desserts",
    "South Indian",
    "Indian",
    "Chaat",
    "Mexican"
    ],
    "avgRating": 4.3,
    "veg": true,
    "feeDetails": {
    "restaurantId": "3638",
    "fees": [
    {
    "name": "BASE_DISTANCE",
    "fee": 3500
    },
    {
    "name": "BASE_TIME"
    },
    {
    "name": "ANCILLARY_SURGE_FEE"
    }
    ],
    "totalFee": 3500
    },
    "parentId": "358878",
    "avgRatingString": "4.3",
    "totalRatingsString": "10K+",
    "sla": {
    "deliveryTime": 29,
    "lastMileTravel": 2.6,
    "serviceability": "SERVICEABLE",
    "slaString": "29 mins",
    "lastMileTravelString": "2.6 km",
    "iconType": "ICON_TYPE_EMPTY"
    },
    "availability": {
    "nextCloseTime": "2023-10-21 22:30:00",
    "opened": true
    },
    "badges": {
    "imageBadges": [
    {
    "imageId": "v1695133679/badges/Pure_Veg111.png",
    "description": "pureveg"
    }
    ]
    },
    "isOpen": true,
    "type": "F",
    "badgesV2": {
    "entityBadges": {
    "textBased": {},
    "imageBased": {
    "badgeObject": [
    {
    "attributes": {
    "imageId": "v1695133679/badges/Pure_Veg111.png",
    "description": "pureveg"
    }
    }
    ]
    },
    "textExtendedBadges": {}
    }
    },
    "aggregatedDiscountInfoV3": {
    "header": "40% OFF",
    "subHeader": "UPTO ₹80"
    },
    "differentiatedUi": {
    "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
    "differentiatedUiMediaDetails": {
    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
    "lottie": {},
    "video": {}
    }
    },
    "reviewsSummary": {},
    "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
    "restaurantOfferPresentationInfo": {}
    },
    "analytics": {},
    "cta": {
    "link": "swiggy://menu?restaurant_id=3638",
    "text": "RESTAURANT_MENU",
    "type": "DEEPLINK"
    }
    }]
}}

// ********************************************************************

const CardComponent = () => {
    return (
        <div className="card">
            <img src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/${result?.data?.restaurants[0]?.info?.cloudinaryImageId}`}
                alt="Restaurant Image"/> 
            <h3>Shimla Biryani</h3>
            <h4>4 star</h4>
            <p>Cuisine</p>
        </div>
    )
}

const Body = () =>{
    return(


        <div className="cards">

            <CardComponent/>
            <CardComponent/>
            <CardComponent/>
            <CardComponent/>
            <CardComponent/>
            <CardComponent/>
            <CardComponent/>
            <CardComponent/>
            <CardComponent/>
            <CardComponent/>
            <CardComponent/>
            <CardComponent/>
            <CardComponent/>
            <CardComponent/>
            <CardComponent/>
            <CardComponent/>
            <CardComponent/>
            <CardComponent/>
            

        </div>
    )
}

const Footer = () =>{
    return(
        <div className="footer">Footer</div>
    )
}

const Layout = () =>{
    return (
        <>
            <Header/>
            <Body/>
            <Footer/>
        </>
    )
}

root.render(<Layout />)