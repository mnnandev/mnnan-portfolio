'use client'
import { avtar } from "@/public/assets/Data";
import Image from "next/image";
import React from "react";
import { MdMailOutline, MdPhone, MdCalendarToday, MdLocationOn } from "react-icons/md";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";

const Aside = () => {
  return (
    <aside className="sidebar">
      <div className="sidebar-info">
        <Image
          src={avtar}
          alt="Manan Mazhar"
          className="w-auto h-auto avatar-box"
          height={100}
          width={100}
        />
        <div className="info-content">
          <h1 className="name">Manan Mazhar</h1>
          <p className="title">Web Developer</p>
        </div>
        <button className="info_more-btn">
          <span>Show Contacts</span>
        </button>
      </div>

      <div className="sidebar-info_more ">
        <ul className="contacts-list ">
          <li className="contact-item ">
            <div className="icon-box">
              <MdMailOutline color="goldenrod" size={24} />
            </div>
            <div className="contact-info">
              <p className="contact-title">Email</p>
              <a href="#" className="contact-link">
              mnnanhavibhutta@gmail.com
              </a>
            </div>
          </li>
          <li className="contact-item">
            <div className="icon-box">
              <MdPhone color="goldenrod" size={24} />
            </div>
            <div className="contact-info">
              <p className="contact-title">Phone</p>
              <a href="tel:+923186812911" className="contact-link">
                +923186812911
              </a>
            </div>
          </li>
          <li className="contact-item">
            <div className="icon-box">
              <MdCalendarToday color="goldenrod"  />
            </div>
            <div className="contact-info">
              <p className="contact-title">Birthday</p>
              <time dateTime="1982-06-23">April 28, 2003</time>
            </div>
          </li>
          <li className="contact-item">
            <div className="icon-box">
              <MdLocationOn color="goldenrod"  />
            </div>
            <div className="contact-info">
              <p className="contact-title">Location</p>
              <address>Sacramento, California, USA</address>
            </div>
          </li>
        </ul>

        <ul className="social-list ">
          <li className="social-item">
            <a href="#" className="social-link">
              <FaFacebook color="gray"  />
            </a>
          </li>
          <li className="social-item">
            <a href="#" className="social-link">
              <FaTwitter color="gray"  />
            </a>
          </li>
          <li className="social-item">
            <a href="#" className="social-link">
              <FaInstagram color="gray"  />
            </a>
          </li>
        </ul>
      </div>
    </aside>
  );
};

export default Aside;
