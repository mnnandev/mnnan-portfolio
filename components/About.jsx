'use client'

import { avatar1, icondesgin, iconphoto, iconquote, mobIcon, webIcon } from '@/public/assets/Data';
import Image from 'next/image';
import React, { useState } from 'react';
import { FaClosedCaptioning, FaTimes } from 'react-icons/fa';

const About = () => {
    const [showModel,setShowModel] = useState(false)
    console.log(showModel)
  return (
    <>
      <article className="about active ">
        <header className=''>
          <h2 className="h2 article-title mt20">About me</h2>
        </header>
        <section className="about-text">
          <p>
            I'm a Creative Director and UI/UX Designer from Sydney, Australia, working
            in web development and print media. I enjoy turning complex problems into
            simple, beautiful, and intuitive designs.
          </p>
          <p>
            My job is to build your website so that it is functional and user-friendly
            but at the same time attractive. I add a personal touch to your
            product to make it eye-catching and easy to use, aiming to
            convey your message and identity creatively.
          </p>
        </section>

        <section className="service">
          <h3 className="h3 service-title">What I'm doing</h3>
          <ul className="service-list">
            <li className="service-item">
              <div className="service-icon-box">
                <Image
                  src={icondesgin}
                  alt="design icon"
                  width={40}
                  height={40}
                />
              </div>
              <div className="service-content-box">
                <h4 className="h4 service-item-title">Web design</h4>
                <p className="service-item-text">
                  The most modern and high-quality design made at a professional level.
                </p>
              </div>
            </li>
            <li className="service-item">
              <div className="service-icon-box">
                <Image
                  src={webIcon}
                  alt="Web development icon"
                  width={40}
                  height={40}
                />
              </div>
              <div className="service-content-box">
                <h4 className="h4 service-item-title">Web development</h4>
                <p className="service-item-text">
                  High-quality development of sites at the professional level.
                </p>
              </div>
            </li>
            <li className="service-item">
              <div className="service-icon-box">
                <Image
                  src={mobIcon}
                  alt="mobile app icon"
                  width={40}
                  height={40}
                />
              </div>
              <div className="service-content-box">
                <h4 className="h4 service-item-title">Mobile apps</h4>
                <p className="service-item-text">
                  Professional development of applications for iOS and Android.
                </p>
              </div>
            </li>
            <li className="service-item">
              <div className="service-icon-box">
                <Image
                  src={iconphoto}
                  alt="camera icon"
                  width={40}
                  height={40}
                />
              </div>
              <div className="service-content-box">
                <h4 className="h4 service-item-title">Photography</h4>
                <p className="service-item-text">
                  I make high-quality photos of any category at a professional level.
                </p>
              </div>
            </li>
          </ul>
        </section>

        <section className="testimonials">
          <h3 className="h3 testimonials-title">Testimonials</h3>
          <ul className="testimonials-list has-scrollbar" onClick={()=>setShowModel(true)}>
            <li className="testimonials-item">
              <div className="content-card">
                <Image
                  src={avatar1}
                  className="testimonials-avatar-box"
                  alt="Daniel lewis"
                  width={60}
                  height={60}
                />
                <h4 className="h4 testimonials-item-title">Daniel lewis</h4>
                <div className="testimonials-text">
                  <p>
                    Richard was hired to create a corporate identity. We were very
                    pleased with the work done. She has a lot of experience and is
                    very concerned about the needs of the client.
                  </p>
                </div>
              </div>
            </li>
          </ul>
        </section>
 
        <div className={`modal-container ${showModel ? 'active':''}`}>
        <div className="overlay" />
        <section className="testimonials-modal">
          <button className="modal-close-btn" onClick={()=> setShowModel(false)}>
             <FaTimes color='goldenrod'/>
          </button>
          <div className="modal-Image-wrapper">
              <Image
                src={avatar1}
                alt="Daniel lewis"
                className='modal-Image-wrapper'
                width={80}
                height={80}
              />
            <Image src={iconquote} alt="quote icon" width={24} height={24} />
          </div>
          <div className="modal-content">
            <h4 className="h3 modal-title">Daniel lewis</h4>
            <time dateTime="2021-06-14">14 June, 2021</time>
            <div>
              <p>
                Richard was hired to create a corporate identity. We were very
                pleased with the work done. She has a lot of experience and is very
                concerned about the needs of the client.
              </p>
            </div>
          </div>
        </section>
        </div>
 
      
      </article>
    </>
  );
};

export default About;
