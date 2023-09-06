import React from "react"
import  ReactDOM  from "react-dom/client"


const Header=()=>{
    return(
        <div className="header">
            <div className="logo-container">
                <img className="logo" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRM0xWvvlyF3nR_xwbwb0eNN7jI31D4W95bdA&usqp=CAU"/>

            </div>

            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Contact Us</li>
                    <li>Cart</li>

                </ul>

            </div>

        </div>
    )
}

const RestaurantCard=(props)=>{
    console.log(props)
   const {resInfo}=props
   console.log(resInfo)
   const {avgRating,
          areaName,
          cloudinaryImageId,
          costForTwo,
          cuisines,
          isOpen,
          name

         }=resInfo

  return(  
            <div className="res-card">
                <img src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/"+cloudinaryImageId}/>
               <div className="res-card-header">
                    <h3>{name}</h3>  
                    <h5>{avgRating}⭐</h5>

               </div>
                <h4>{costForTwo}</h4>
                <h5>{cuisines.join(", ")}</h5>
        
            </div>
    )
}


const resObj=[
   
        {
          "info": {
            "id": "281469",
            "name": "Lavonne",
            "cloudinaryImageId": "emlehbuwgsmryxhwzhvq",
            "locality": "St. Marks Road",
            "areaName": "St. Marks Road",
            "costForTwo": "₹750 for two",
            "cuisines": [
              "Bakery",
              "Desserts"
            ],
            "avgRating": 4.6,
            "feeDetails": {
              "restaurantId": "281469",
              "fees": [
                {
                  "name": "BASE_DISTANCE",
                  "fee": 4500
                },
                {
                  "name": "ANCILLARY_SURGE_FEE",
                  "fee": 2000
                },
                {
                  "name": "BASE_TIME"
                }
              ],
              "totalFee": 6500
            },
            "parentId": "10530",
            "avgRatingString": "4.6",
            "totalRatingsString": "1K+",
            "sla": {
              "deliveryTime": 33,
              "lastMileTravel": 0.6,
              "serviceability": "SERVICEABLE",
              "slaString": "33 mins",
              "lastMileTravelString": "0.6 km",
              "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
              "nextCloseTime": "2023-09-05 22:40:00",
              "opened": true
            },
            "badges": {
              "imageBadges": [
                {
                  "imageId": "newg.png",
                  "description": "Gourmet"
                }
              ],
              "textExtendedBadges": [
                {
                  "iconId": "guiltfree/GF_Logo_android_3x",
                  "shortDescription": "options available",
                  "fontColor": "#7E808C"
                }
              ]
            },
            "isOpen": true,
            "aggregatedDiscountInfoV2": {
              
            },
            "type": "F",
            "badgesV2": {
              "entityBadges": {
                "imageBased": {
                  "badgeObject": [
                    {
                      "attributes": {
                        "description": "Gourmet",
                        "imageId": "newg.png"
                      }
                    }
                  ]
                },
                "textBased": {
                  
                },
                "textExtendedBadges": {
                  "badgeObject": [
                    {
                      "attributes": {
                        "description": "",
                        "fontColor": "#7E808C",
                        "iconId": "guiltfree/GF_Logo_android_3x",
                        "shortDescription": "options available"
                      }
                    }
                  ]
                }
              }
            },
            "differentiatedUi": {
              "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
              "differentiatedUiMediaDetails": {
                "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                "lottie": {
                  
                },
                "video": {
                  
                }
              }
            },
            "reviewsSummary": {
              
            },
            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            "restaurantOfferPresentationInfo": {
              
            }
          },
          "analytics": {
            
          },
          "cta": {
            "link": "https://www.swiggy.com/restaurants/lavonne-st-marks-road-bangalore-281469",
            "type": "WEBLINK"
          }
        },
        {
          "info": {
            "id": "347868",
            "name": "KFC",
            "cloudinaryImageId": "56c9ab92bd79745fd152a30fa2525426",
            "locality": "Cunnigham road",
            "areaName": "Vasanth Nagar",
            "costForTwo": "₹400 for two",
            "cuisines": [
              "Burgers",
              "Biryani",
              "American",
              "Snacks",
              "Fast Food"
            ],
            "avgRating": 3.8,
            "feeDetails": {
              "restaurantId": "347868",
              "fees": [
                {
                  "name": "BASE_DISTANCE",
                  "fee": 6000
                },
                {
                  "name": "ANCILLARY_SURGE_FEE",
                  "fee": 2000
                },
                {
                  "name": "BASE_TIME"
                }
              ],
              "totalFee": 8000
            },
            "parentId": "547",
            "avgRatingString": "3.8",
            "totalRatingsString": "1K+",
            "sla": {
              "deliveryTime": 35,
              "lastMileTravel": 3,
              "serviceability": "SERVICEABLE",
              "slaString": "35 mins",
              "lastMileTravelString": "3.0 km",
              "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
              "nextCloseTime": "2023-09-06 03:00:00",
              "opened": true
            },
            "badges": {
              
            },
            "isOpen": true,
            "aggregatedDiscountInfoV2": {
              
            },
            "type": "F",
            "badgesV2": {
              "entityBadges": {
                "imageBased": {
                  
                },
                "textBased": {
                  
                },
                "textExtendedBadges": {
                  
                }
              }
            },
            "differentiatedUi": {
              "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
              "differentiatedUiMediaDetails": {
                "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                "lottie": {
                  
                },
                "video": {
                  
                }
              }
            },
            "reviewsSummary": {
              
            },
            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            "restaurantOfferPresentationInfo": {
              
            }
          },
          "analytics": {
            
          },
          "cta": {
            "link": "https://www.swiggy.com/restaurants/kfc-cunnigham-road-vasanth-nagar-bangalore-347868",
            "type": "WEBLINK"
          }
        },
        {
          "info": {
            "id": "10575",
            "name": "Pizza Hut",
            "cloudinaryImageId": "2b4f62d606d1b2bfba9ba9e5386fabb7",
            "locality": "Shanti Nagar",
            "areaName": "Shanti Nagar",
            "costForTwo": "₹600 for two",
            "cuisines": [
              "Pizzas"
            ],
            "avgRating": 4,
            "feeDetails": {
              "restaurantId": "10575",
              "fees": [
                {
                  "name": "BASE_DISTANCE",
                  "fee": 3000
                },
                {
                  "name": "ANCILLARY_SURGE_FEE",
                  "fee": 2000
                },
                {
                  "name": "BASE_TIME"
                }
              ],
              "totalFee": 5000
            },
            "parentId": "721",
            "avgRatingString": "4.0",
            "totalRatingsString": "5K+",
            "sla": {
              "deliveryTime": 33,
              "lastMileTravel": 2.1,
              "serviceability": "SERVICEABLE",
              "slaString": "33 mins",
              "lastMileTravelString": "2.1 km",
              "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
              "nextCloseTime": "2023-09-06 01:00:00",
              "opened": true
            },
            "badges": {
              
            },
            "isOpen": true,
            "aggregatedDiscountInfoV2": {
              
            },
            "type": "F",
            "badgesV2": {
              "entityBadges": {
                "imageBased": {
                  
                },
                "textBased": {
                  
                },
                "textExtendedBadges": {
                  
                }
              }
            },
            "differentiatedUi": {
              "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
              "differentiatedUiMediaDetails": {
                "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                "lottie": {
                  
                },
                "video": {
                  
                }
              }
            },
            "reviewsSummary": {
              
            },
            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            "restaurantOfferPresentationInfo": {
              
            }
          },
          "analytics": {
            
          },
          "cta": {
            "link": "https://www.swiggy.com/restaurants/pizza-hut-shanti-nagar-bangalore-10575",
            "type": "WEBLINK"
          }
        },
        {
          "info": {
            "id": "43836",
            "name": "McDonald's",
            "cloudinaryImageId": "ee5f8e06b300efc07c9fe3f4df40dfc4",
            "locality": "MG Road",
            "areaName": "Ashok Nagar",
            "costForTwo": "₹400 for two",
            "cuisines": [
              "Burgers",
              "Beverages",
              "Cafe",
              "Desserts"
            ],
            "avgRating": 4.2,
            "feeDetails": {
              "restaurantId": "43836",
              "fees": [
                {
                  "name": "BASE_DISTANCE",
                  "fee": 3000
                },
                {
                  "name": "ANCILLARY_SURGE_FEE",
                  "fee": 2000
                },
                {
                  "name": "BASE_TIME"
                }
              ],
              "totalFee": 5000
            },
            "parentId": "630",
            "avgRatingString": "4.2",
            "totalRatingsString": "10K+",
            "sla": {
              "deliveryTime": 42,
              "lastMileTravel": 1.4,
              "serviceability": "SERVICEABLE",
              "slaString": "42 mins",
              "lastMileTravelString": "1.4 km",
              "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
              "nextCloseTime": "2023-09-06 02:45:00",
              "opened": true
            },
            "badges": {
              
            },
            "isOpen": true,
            "type": "F",
            "badgesV2": {
              "entityBadges": {
                "imageBased": {
                  
                },
                "textBased": {
                  
                },
                "textExtendedBadges": {
                  
                }
              }
            },
            "aggregatedDiscountInfoV3": {
              "header": "10% OFF",
              "subHeader": "ABOVE ₹999",
              "discountTag": "FLAT DEAL"
            },
            "differentiatedUi": {
              "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
              "differentiatedUiMediaDetails": {
                "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                "lottie": {
                  
                },
                "video": {
                  
                }
              }
            },
            "reviewsSummary": {
              
            },
            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            "restaurantOfferPresentationInfo": {
              
            }
          },
          "analytics": {
            
          },
          "cta": {
            "link": "https://www.swiggy.com/restaurants/mcdonalds-mg-road-ashok-nagar-bangalore-43836",
            "type": "WEBLINK"
          }
        },
        {
          "info": {
            "id": "23847",
            "name": "Domino's Pizza",
            "cloudinaryImageId": "fjqcvqfgqlw6h0atques",
            "locality": "Rest House Road",
            "areaName": "Brigade Road",
            "costForTwo": "₹400 for two",
            "cuisines": [
              "Pizzas",
              "Italian",
              "Pastas",
              "Desserts"
            ],
            "avgRating": 4.3,
            "feeDetails": {
              "restaurantId": "23847",
              "fees": [
                {
                  "name": "BASE_DISTANCE",
                  "fee": 3000
                },
                {
                  "name": "BASE_TIME"
                },
                {
                  "name": "ANCILLARY_SURGE_FEE"
                }
              ],
              "totalFee": 3000
            },
            "parentId": "2456",
            "avgRatingString": "4.3",
            "totalRatingsString": "5K+",
            "sla": {
              "deliveryTime": 25,
              "serviceability": "SERVICEABLE",
              "slaString": "25 mins",
              "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
              "nextCloseTime": "2023-09-05 22:59:00",
              "opened": true
            },
            "badges": {
              
            },
            "isOpen": true,
            "type": "F",
            "badgesV2": {
              "entityBadges": {
                "imageBased": {
                  
                },
                "textBased": {
                  
                },
                "textExtendedBadges": {
                  
                }
              }
            },
            "aggregatedDiscountInfoV3": {
              "header": "₹150 OFF",
              "subHeader": "ABOVE ₹999",
              "discountTag": "FLAT DEAL"
            },
            "differentiatedUi": {
              "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
              "differentiatedUiMediaDetails": {
                "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                "lottie": {
                  
                },
                "video": {
                  
                }
              }
            },
            "reviewsSummary": {
              
            },
            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            "restaurantOfferPresentationInfo": {
              
            }
          },
          "analytics": {
            
          },
          "cta": {
            "link": "https://www.swiggy.com/restaurants/dominos-pizza-rest-house-road-brigade-road-bangalore-23847",
            "type": "WEBLINK"
          }
        },
        {
          "info": {
            "id": "3369",
            "name": "Truffles",
            "cloudinaryImageId": "cd832b6167eb9f88aeb1ccdebf38d942",
            "locality": "St. Marks Road",
            "areaName": "St. Marks Road",
            "costForTwo": "₹450 for two",
            "cuisines": [
              "American",
              "Desserts",
              "Continental",
              "Italian"
            ],
            "avgRating": 4.5,
            "feeDetails": {
              "restaurantId": "3369",
              "fees": [
                {
                  "name": "ANCILLARY_SURGE_FEE",
                  "fee": 2000
                },
                {
                  "name": "BASE_DISTANCE",
                  "fee": 3000
                },
                {
                  "name": "BASE_TIME"
                }
              ],
              "totalFee": 5000
            },
            "parentId": "218065",
            "avgRatingString": "4.5",
            "totalRatingsString": "10K+",
            "sla": {
              "deliveryTime": 32,
              "lastMileTravel": 0.8,
              "serviceability": "SERVICEABLE",
              "slaString": "32 mins",
              "lastMileTravelString": "0.8 km",
              "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
              "nextCloseTime": "2023-09-05 23:30:00",
              "opened": true
            },
            "badges": {
              
            },
            "isOpen": true,
            "aggregatedDiscountInfoV2": {
              
            },
            "type": "F",
            "badgesV2": {
              "entityBadges": {
                "imageBased": {
                  
                },
                "textBased": {
                  
                },
                "textExtendedBadges": {
                  
                }
              }
            },
            "differentiatedUi": {
              "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
              "differentiatedUiMediaDetails": {
                "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                "lottie": {
                  
                },
                "video": {
                  
                }
              }
            },
            "reviewsSummary": {
              
            },
            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            "restaurantOfferPresentationInfo": {
              
            }
          },
          "analytics": {
            
          },
          "cta": {
            "link": "https://www.swiggy.com/restaurants/truffles-st-marks-road-bangalore-3369",
            "type": "WEBLINK"
          }
        },
        {
          "info": {
            "id": "25282",
            "name": "Baskin Robbins - Ice Cream Desserts",
            "cloudinaryImageId": "85ccae4e3576f9330af102c46ca85395",
            "locality": "Millars Road",
            "areaName": "Vasanth Nagar",
            "costForTwo": "₹263 for two",
            "cuisines": [
              "Desserts"
            ],
            "avgRating": 4.6,
            "veg": true,
            "feeDetails": {
              "restaurantId": "25282",
              "fees": [
                {
                  "name": "BASE_DISTANCE",
                  "fee": 6000
                },
                {
                  "name": "ANCILLARY_SURGE_FEE",
                  "fee": 2000
                },
                {
                  "name": "BASE_TIME"
                }
              ],
              "totalFee": 8000
            },
            "parentId": "5588",
            "avgRatingString": "4.6",
            "totalRatingsString": "1K+",
            "sla": {
              "deliveryTime": 30,
              "lastMileTravel": 3,
              "serviceability": "SERVICEABLE",
              "slaString": "30 mins",
              "lastMileTravelString": "3.0 km",
              "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
              "nextCloseTime": "2023-09-06 00:00:00",
              "opened": true
            },
            "badges": {
              
            },
            "isOpen": true,
            "type": "F",
            "badgesV2": {
              "entityBadges": {
                "imageBased": {
                  
                },
                "textBased": {
                  
                },
                "textExtendedBadges": {
                  
                }
              }
            },
            "aggregatedDiscountInfoV3": {
              "header": "10% OFF",
              "subHeader": "ABOVE ₹1000",
              "discountTag": "FLAT DEAL"
            },
            "differentiatedUi": {
              "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
              "differentiatedUiMediaDetails": {
                "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                "lottie": {
                  
                },
                "video": {
                  
                }
              }
            },
            "reviewsSummary": {
              
            },
            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            "restaurantOfferPresentationInfo": {
              
            }
          },
          "analytics": {
            
          },
          "cta": {
            "link": "https://www.swiggy.com/restaurants/baskin-robbins-ice-cream-desserts-millars-road-vasanth-nagar-bangalore-25282",
            "type": "WEBLINK"
          }
        },
]


const Body=()=>{

  
    return(
        <div className="body">
            <div className="search">Search</div>
            <div className="res-container">
                
            {resObj.map(data => (
                    <RestaurantCard key={data.info.id} resInfo={data.info} />
                ))}
               
            </div>
        </div>
    )
}

const AppLayout=()=>(
    <div className="app">
        <Header/>
        <Body/>

    </div>
)


const root= ReactDOM.createRoot(document.getElementById('root'));
// root.render(heading) --> we render React element  Like this
root.render(<AppLayout/>) // We render React component like this