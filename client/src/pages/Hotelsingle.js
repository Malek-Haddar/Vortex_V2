import React, { Component, Fragment, useEffect, useState } from "react";
import Header from "../components/Header";
import Leftnav from "../components/Leftnav";
import Rightchat from "../components/Rightchat";
import Appfooter from "../components/Appfooter";
import Popupchat from "../components/Popupchat";

import { toast } from "react-toastify";
import Slider from "react-slick";

import Lightbox from "react-image-lightbox";
import "react-image-lightbox/style.css";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { chooseEvent, getGoals, reset } from "../features/goals/goalSlice";

const slideList = [
  {
    imageUrl: "p-1.jpg",
    name: "product-image ",
  },
  {
    imageUrl: "p-3.jpg",
    name: "product-image ",
  },
  {
    imageUrl: "p-4.jpg",
    name: "product-image ",
  },
];

const TabOne = [
  {
    image: "01",
    bigImage: "assets/images/hotel.png",
  },
  {
    image: "02",
    bigImage: "assets/images/hotel.png",
  },
  {
    image: "03",
    bigImage: "assets/images/hotel.png",
  },
  {
    image: "04",
    bigImage: "assets/images/hotel.png",
  },
  {
    image: "05",
    bigImage: "assets/images/hotel.png",
  },
  {
    image: "06",
    bigImage: "assets/images/hotel.png",
  },
];

function Hotelsingle() {
  const [tab1, setTab1] = useState(0);
  const [isOpen, setIsOpen] = useState(false);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { goals, isLoading, isError, message } = useSelector(
    (state) => state.goals
  );
  useEffect(() => {
    if (isError) {
      console.log(message);
    }

    // if (!user) {
    //   navigate("/login");
    // }

    dispatch(getGoals());

    return () => {
      dispatch(reset());
    };
  }, [navigate, isError, message, dispatch]);

  const hotelsettings = {
    arrows: false,
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: 2,
    centerMode: false,
    variableWidth: false,
    responsive: [
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 420,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };
  return (
    <Fragment>
      <Header />
      <Leftnav />
      <Rightchat />

      <div className="main-content right-chat-active">
        <div className="middle-sidebar-bottom">
          <div className="middle-sidebar-left pe-0">
            <div className="row">
              <div className="col-xl-12 col-xxl-12 col-lg-12">
                <Slider {...hotelsettings}>
                  {slideList.map((value, index) => (
                    <div key={index} className="pe-2">
                      <img
                        src={`assets/images/${value.imageUrl}`}
                        alt="avater"
                        className="rounded-3 img-fluid"
                      />
                    </div>
                  ))}
                </Slider>
              </div>
            </div>
            <div className="row">
              <div className="col-xl-8 col-xxl-9 col-lg-8">
                <div className="card d-block mt-3 border-0 shadow-xss bg-white p-lg-5 p-4">
                  <span className="font-xsssss fw-700 ps-3 pe-3 lh-32 text-uppercase rounded-3 ls-2 bg-primary-gradiant d-inline-block text-white ">
                    Featured
                  </span>
                  <h2 className="fw-700 font-lg mt-3 mb-2">
                    House Party Graynight Mood In Siver Colony, London
                  </h2>
                  <p className="font-xsss fw-500 text-grey-500 lh-30 pe-5 mt-3 me-5">
                    ultrices justo eget, sodales orci. Aliquam egestas libero ac
                    turpis pharetra, in vehicula lacus scelerisque. Vestibulum
                    ut sem laoreet, feugiat tellus at, hendrerit arcu.
                  </p>

                  <div className="clearfix"></div>
                  <div className="star d-block w-100 text-left mt-2">
                    <img
                      src="assets/images/star.png"
                      alt="star"
                      className="w15 float-left"
                    />
                    <img
                      src="assets/images/star.png"
                      alt="star"
                      className="w15 float-left"
                    />
                    <img
                      src="assets/images/star.png"
                      alt="star"
                      className="w15 float-left"
                    />
                    <img
                      src="assets/images/star.png"
                      alt="star"
                      className="w15 float-left"
                    />
                    <img
                      src="assets/images/star-disable.png"
                      alt="star"
                      className="w15 float-left me-2"
                    />
                  </div>
                  <p className="review-link font-xssss fw-600 text-grey-500 lh-3 mb-0">
                    (456 ratings ) 2 customer review
                  </p>
                  <div className="clearfix"></div>
                  <h5 className="mt-4 mb-4 d-inline-block font-xssss fw-600 text-grey-500 me-2">
                    <i className="btn-round-sm bg-greylight ti-ruler-pencil text-grey-500 me-1"></i>{" "}
                    200 sq
                  </h5>
                  <h5 className="mt-4 mb-4 d-inline-block font-xssss fw-600 text-grey-500 me-2">
                    <i className="btn-round-sm bg-greylight ti-rss-alt text-grey-500 me-1"></i>{" "}
                    WiFi
                  </h5>
                  <h5 className="mt-4 mb-4 d-inline-block font-xssss fw-600 text-grey-500">
                    <i className="btn-round-sm bg-greylight ti-credit-card text-grey-500 me-1"></i>{" "}
                    Card
                  </h5>
                  <div className="clearfix"></div>

                  <a
                    href="/defaulthoteldetails"
                    className="btn-round-lg ms-2 d-inline-block rounded-3 bg-greylight"
                  >
                    <i className="feather-share-2 font-sm text-grey-700"></i>
                  </a>
                  <a
                    href="/defaulthoteldetails"
                    className="btn-round-lg ms-2 d-inline-block rounded-3 bg-danger"
                  >
                    <i className="feather-bookmark font-sm text-white"></i>{" "}
                  </a>
                  <a
                    className="bg-primary-gradiant border-0 text-white fw-600 text-uppercase font-xssss float-left rounded-3 d-inline-block mt-0 p-2 lh-34 text-center ls-3 w200"
                    onClick={() => {
                      dispatch(chooseEvent(goals[0]?._id));
                      toast("Enjoy The Event !");
                    }}
                  >
                    BOOK NOW
                  </a>
                </div>

                <div className="card d-block border-0 rounded-3 overflow-hidden p-4 shadow-xss mt-4 alert-success">
                  <h2 className="fw-700 font-sm mb-3 mt-1 ps-1 text-success mb-4">
                    Ameneties
                  </h2>
                  <h4 className="font-xssss fw-500 text-grey-600 mb-3 pl-35 position-relative lh-24">
                    <i className="ti-check font-xssss btn-round-xs bg-success text-white position-absolute left-0 top-5"></i>
                    Create awesome animated splash screens for any Excel project
                    such as animation with password access to a work book,
                    loading animation.
                  </h4>
                  <h4 className="font-xssss fw-500 text-grey-600 mb-3 pl-35 position-relative lh-24">
                    <i className="ti-check font-xssss btn-round-xs bg-success text-white position-absolute left-0 top-5"></i>
                    After completing this course you'll be confident to create
                    any subtle to complex animation that will turn any project a
                    professional work and surely you'll become an awesome
                    developer and designer
                  </h4>
                  <h4 className="font-xssss fw-500 text-grey-600 mb-3 pl-35 position-relative lh-24">
                    <i className="ti-check font-xssss btn-round-xs bg-success text-white position-absolute left-0 top-5"></i>
                    Create awesome animated splash screens for any Excel project
                    such as animation with password access to a work book,
                    loading animation.
                  </h4>
                  <h4 className="font-xssss fw-500 text-grey-600 mb-3 pl-35 position-relative lh-24">
                    <i className="ti-check font-xssss btn-round-xs bg-success text-white position-absolute left-0 top-5"></i>
                    After completing this course you'll be confident to create
                    any subtle to complex animation that will turn any project a
                    professional work and surely you'll become an awesome
                    developer and designer
                  </h4>
                  <h4 className="font-xssss fw-500 text-grey-600 mb-3 pl-35 position-relative lh-24">
                    <i className="ti-check font-xssss btn-round-xs bg-success text-white position-absolute left-0 top-5"></i>
                    Create awesome animated splash screens for any Excel project
                    such as animation with password access to a work book,
                    loading animation.
                  </h4>
                  <h4 className="font-xssss fw-500 text-grey-600 mb-3 pl-35 position-relative lh-24">
                    <i className="ti-check font-xssss btn-round-xs bg-success text-white position-absolute left-0 top-5"></i>
                    After completing this course you'll be confident to create
                    any subtle to complex animation that will turn any project a
                    professional work and surely you'll become an awesome
                    developer and designer
                  </h4>
                </div>

                <div className="card d-block border-0 rounded-3 overflow-hidden p-4 shadow-xss mt-4">
                  <h2 className="fw-700 font-sm mb-3 mt-1 ps-1 mb-3">
                    Description
                  </h2>
                  <p className="font-xssss fw-500 lh-28 text-grey-600 mb-0 ps-2">
                    {goals[0]?.overview}
                  </p>
                </div>

                <div className="card d-block border-0 rounded-3 overflow-hidden p-4 shadow-xss mt-4">
                  <h2 className="fw-700 font-sm mb-3 mt-1 ps-1 mb-3">
                    Gallery
                  </h2>
                  <div className="row ps-3 pe-3">
                    {TabOne.map((value, index) => (
                      <div
                        className="col-sm-4 col-xss-4 pe-1 ps-1 mb-2"
                        key={index}
                      >
                        {isOpen && (
                          <Lightbox
                            mainSrc={TabOne[tab1].bigImage}
                            onCloseRequest={() => setIsOpen({ isOpen: false })}
                            onMovePrevRequest={() =>
                              setTab1({
                                tab1:
                                  (tab1 + TabOne.length - 1) % TabOne.length,
                              })
                            }
                            onMoveNextRequest={() =>
                              setTab1({
                                tab1: (tab1 + 1) % TabOne.length,
                              })
                            }
                          />
                        )}

                        <div
                          onClick={(e) =>
                            setIsOpen({ tab1: index, isOpen: false })
                          }
                        >
                          <a href="#portfolio-details">
                            <img
                              src={`${value.bigImage}`}
                              alt="Portfolio"
                              className="w-100"
                            />
                          </a>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              <div className="col-xl-4 col-xxl-3 col-lg-4 ps-0">
                <div className="card w-100 border-0 mt-3 mb-4 p-lg-4 p-3 shadow-xss position-relative rounded-3 bg-white">
                  <div className="section full mb-4 p-4 bg-light theme-dark-bg theme-light-bg rounded-3">
                    <div className="row">
                      <div className="col-12 text-center">
                        <h2 className="display2-size lh-1 m-0 text-grey-900 fw-700">
                          4.3
                        </h2>
                      </div>
                      <div className="col-12 text-center">
                        <h4 className="font-xssss text-grey-600 fw-600 mt-2">
                          Based on 433 rating
                        </h4>
                      </div>
                    </div>
                    <div className="row mt-3">
                      <div className="col-7 pe-1 mt-0">
                        <div className="star d-inline text-left">
                          <img
                            src="assets/images/star.png"
                            alt="star"
                            className="w15"
                          />
                          <img
                            src="assets/images/star.png"
                            alt="star"
                            className="w15"
                          />
                          <img
                            src="assets/images/star.png"
                            alt="star"
                            className="w15"
                          />
                          <img
                            src="assets/images/star.png"
                            alt="star"
                            className="w15"
                          />
                          <img
                            src="assets/images/star.png"
                            alt="star"
                            className="w15"
                          />
                        </div>
                      </div>
                      <div className="col-5 ps-1 text-right">
                        <h4 className="font-xssss mt-1 fw-700 text-grey-800">
                          Support
                        </h4>
                      </div>
                    </div>
                    <div className="row mt-1">
                      <div className="col-7 pe-1 mt-0">
                        <div className="star d-inline text-left">
                          <img
                            src="assets/images/star.png"
                            alt="star"
                            className="w15"
                          />
                          <img
                            src="assets/images/star.png"
                            alt="star"
                            className="w15"
                          />
                          <img
                            src="assets/images/star.png"
                            alt="star"
                            className="w15"
                          />
                          <img
                            src="assets/images/star-disable.png"
                            alt="star"
                            className="w15"
                          />
                          <img
                            src="assets/images/star-disable.png"
                            alt="star"
                            className="w15"
                          />
                        </div>
                      </div>
                      <div className="col-5 ps-1 text-right">
                        <h4 className="font-xssss mt-1 fw-700 text-grey-800">
                          Clean
                        </h4>
                      </div>
                    </div>
                    <div className="row mt-1">
                      <div className="col-7 pe-1 mt-0">
                        <div className="star d-inline text-left">
                          <img
                            src="assets/images/star.png"
                            alt="star"
                            className="w15"
                          />
                          <img
                            src="assets/images/star.png"
                            alt="star"
                            className="w15"
                          />
                          <img
                            src="assets/images/star-disable.png"
                            alt="star"
                            className="w15"
                          />
                          <img
                            src="assets/images/star-disable.png"
                            alt="star"
                            className="w15"
                          />
                          <img
                            src="assets/images/star-disable.png"
                            alt="star"
                            className="w15"
                          />
                        </div>
                      </div>
                      <div className="col-5 ps-1 text-right">
                        <h4 className="font-xssss mt-1 fw-700 text-grey-800">
                          Speed
                        </h4>
                      </div>
                    </div>
                    <div className="row mt-1">
                      <div className="col-7 pe-1 mt-0">
                        <div className="star d-inline text-left">
                          <img
                            src="assets/images/star.png"
                            alt="star"
                            className="w15"
                          />
                          <img
                            src="assets/images/star.png"
                            alt="star"
                            className="w15"
                          />
                          <img
                            src="assets/images/star.png"
                            alt="star"
                            className="w15"
                          />
                          <img
                            src="assets/images/star.png"
                            alt="star"
                            className="w15"
                          />
                          <img
                            src="assets/images/star-disable.png"
                            alt="star"
                            className="w15"
                          />
                        </div>
                      </div>
                      <div className="col-5 ps-1 text-right">
                        <h4 className="font-xssss mt-1 fw-700 text-grey-800">
                          Quality
                        </h4>
                      </div>
                    </div>
                    <div className="row mt-1">
                      <div className="col-7 pe-1 mt-0">
                        <div className="star d-inline text-left">
                          <img
                            src="assets/images/star.png"
                            alt="star"
                            className="w15"
                          />
                          <img
                            src="assets/images/star.png"
                            alt="star"
                            className="w15"
                          />
                          <img
                            src="assets/images/star.png"
                            alt="star"
                            className="w15"
                          />
                          <img
                            src="assets/images/star.png"
                            alt="star"
                            className="w15"
                          />
                          <img
                            src="assets/images/star-disable.png"
                            alt="star"
                            className="w15"
                          />
                        </div>
                      </div>
                      <div className="col-5 ps-1 text-right">
                        <h4 className="font-xssss mt-1 fw-700 text-grey-800">
                          Delivery
                        </h4>
                      </div>
                    </div>
                  </div>

                  <div className="row">
                    <div className="col-2 text-left">
                      <figure className="avatar float-left mb-0">
                        <img
                          src="assets/images/user.png"
                          alt="avater"
                          className="float-right shadow-none w40 me-2"
                        />
                      </figure>
                    </div>
                    <div className="col-10 ps-4">
                      <div className="content">
                        <h6 className="author-name font-xssss fw-600 mb-0 text-grey-800">
                          Goria Coast
                        </h6>
                        <h6 className="d-block font-xsssss fw-500 text-grey-500 mt-2 mb-0">
                          July 26 at 8:20 PM
                        </h6>
                        <div className="star d-block w-100 text-left">
                          <img
                            src="assets/images/star.png"
                            alt="star"
                            className="w10"
                          />
                          <img
                            src="assets/images/star.png"
                            alt="star"
                            className="w10"
                          />
                          <img
                            src="assets/images/star.png"
                            alt="star"
                            className="w10"
                          />
                          <img
                            src="assets/images/star.png"
                            alt="star"
                            className="w10"
                          />
                          <img
                            src="assets/images/star-disable.png"
                            alt="star"
                            className="w10"
                          />
                        </div>
                        <p className="comment-text lh-24 fw-500 font-xssss text-grey-500 mt-2">
                          Enjoyed this a lot and well done. We are an early
                          stage digitally native vertical brand, making travel
                          bags.{" "}
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="row">
                    <div className="col-2 text-left">
                      <figure className="avatar float-left mb-0">
                        <img
                          src="assets/images/user.png"
                          alt="avater"
                          className="float-right shadow-none w40 me-2"
                        />
                      </figure>
                    </div>
                    <div className="col-10 ps-4">
                      <div className="content">
                        <h6 className="author-name font-xssss fw-600 mb-0 text-grey-800">
                          Goria Coast
                        </h6>
                        <h6 className="d-block font-xsssss fw-500 text-grey-500 mt-2 mb-0">
                          July 26 at 8:20 PM
                        </h6>
                        <div className="star d-block w-100 text-left">
                          <img
                            src="assets/images/star.png"
                            alt="star"
                            className="w10"
                          />
                          <img
                            src="assets/images/star.png"
                            alt="star"
                            className="w10"
                          />
                          <img
                            src="assets/images/star.png"
                            alt="star"
                            className="w10"
                          />
                          <img
                            src="assets/images/star.png"
                            alt="star"
                            className="w10"
                          />
                          <img
                            src="assets/images/star-disable.png"
                            alt="star"
                            className="w10"
                          />
                        </div>
                        <p className="comment-text lh-24 fw-500 font-xssss text-grey-500 mt-2">
                          Enjoyed this a lot and well done. We are an early
                          stage digitally native vertical brand, making travel
                          bags.{" "}
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="row">
                    <div className="col-2 text-left">
                      <figure className="avatar float-left mb-0">
                        <img
                          src="assets/images/user.png"
                          alt="avater"
                          className="float-right shadow-none w40 me-2"
                        />
                      </figure>
                    </div>
                    <div className="col-10 ps-4">
                      <div className="content">
                        <h6 className="author-name font-xssss fw-600 mb-0 text-grey-800">
                          Goria Coast
                        </h6>
                        <h6 className="d-block font-xsssss fw-500 text-grey-500 mt-2 mb-0">
                          July 26 at 8:20 PM
                        </h6>
                        <div className="star d-block w-100 text-left">
                          <img
                            src="assets/images/star.png"
                            alt="star"
                            className="w10"
                          />
                          <img
                            src="assets/images/star.png"
                            alt="star"
                            className="w10"
                          />
                          <img
                            src="assets/images/star.png"
                            alt="star"
                            className="w10"
                          />
                          <img
                            src="assets/images/star.png"
                            alt="star"
                            className="w10"
                          />
                          <img
                            src="assets/images/star-disable.png"
                            alt="star"
                            className="w10"
                          />
                        </div>
                        <p className="comment-text lh-24 fw-500 font-xssss text-grey-500 mt-2">
                          Enjoyed this a lot and well done. We are an early
                          stage digitally native vertical brand, making travel
                          bags.{" "}
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="row">
                    <div className="col-2 text-left">
                      <figure className="avatar float-left mb-0">
                        <img
                          src="assets/images/user.png"
                          alt="avater"
                          className="float-right shadow-none w40 me-2"
                        />
                      </figure>
                    </div>
                    <div className="col-10 ps-4">
                      <div className="content">
                        <h6 className="author-name font-xssss fw-600 mb-0 text-grey-800">
                          Goria Coast
                        </h6>
                        <h6 className="d-block font-xsssss fw-500 text-grey-500 mt-2 mb-0">
                          July 26 at 8:20 PM
                        </h6>
                        <div className="star d-block w-100 text-left">
                          <img
                            src="assets/images/star.png"
                            alt="star"
                            className="w10"
                          />
                          <img
                            src="assets/images/star.png"
                            alt="star"
                            className="w10"
                          />
                          <img
                            src="assets/images/star.png"
                            alt="star"
                            className="w10"
                          />
                          <img
                            src="assets/images/star.png"
                            alt="star"
                            className="w10"
                          />
                          <img
                            src="assets/images/star-disable.png"
                            alt="star"
                            className="w10"
                          />
                        </div>
                        <p className="comment-text lh-24 fw-500 font-xssss text-grey-500 mt-2">
                          Enjoyed this a lot and well done. We are an early
                          stage digitally native vertical brand, making travel
                          bags.{" "}
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="row">
                    <a
                      href="/defaulthoteldetails"
                      className="d-block p-2 lh-32 text-center bg-greylight fw-600 font-xssss text-grey-900 rounded-3"
                    >
                      Add a Review
                    </a>
                  </div>
                </div>

                <div className="card w-100 border-0 mt-4 mb-4 p-4 shadow-xss position-relative rounded-3 bg-white">
                  <h2 className="fw-700 font-sm mb-4 mt-1 ps-1 mb-3">
                    Ask a Question
                  </h2>
                  <form action="#">
                    <div className="row">
                      <div className="col-md-12">
                        <div className="form-group mb-3">
                          <input
                            type="text"
                            className="form-control style2-input bg-color-none text-grey-700"
                            placeholder="Name"
                          />
                        </div>
                      </div>
                      <div className="col-md-12">
                        <div className="form-group mb-3">
                          <input
                            type="text"
                            className="form-control style2-input bg-color-none text-grey-700"
                            placeholder="Email"
                          />
                        </div>
                      </div>

                      <div className="col-12">
                        <div className="form-group mb-3 md-mb-2">
                          <textarea
                            className="w-100 h125 style2-textarea p-3 form-control"
                            placeholder="Message"
                          ></textarea>
                        </div>
                        <a
                          href="/defaulthoteldetails"
                          className="bg-primary-gradiant border-0 text-white fw-600 text-uppercase font-xssss float-left rounded-3 d-block mt-0 w-100 p-2 lh-34 text-center ls-3 "
                        >
                          Contact US
                        </a>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Popupchat />
      <Appfooter />
    </Fragment>
  );
}

export default Hotelsingle;
