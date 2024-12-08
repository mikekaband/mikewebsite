import React from "react";
import { HiOutlineExternalLink } from "react-icons/hi";
import character from "./img/CharacterProfile.png";
import '../styles/main.css';


export const Footer = () => {

    return (
        <footer>
              <div className='footer-container'>

                <div className='footer'>
                  {/* Contact Information Details */}
                  <div className='contact-information'>
                    <h1>LET'S CONNECT</h1>
                    <div className='contact-buttons'>
                      <button className='btn2'>
                        LinkedIn <span><HiOutlineExternalLink size={25} /></span>
                      </button>
                      <button className='btn2'>
                        GitHub <span><HiOutlineExternalLink size={25} /></span>
                      </button>
                    </div>

                    <div className='email-me'>
                      <p>Email Me: <span>mike.k.musas@gmail.com</span></p>
                    </div>

                  </div>

                  {/* Copyright */}
                  <div className='copyright'>
                    <img src={character} alt="Mike Logo" width={210} />
                    <p>&copy;MADE BY <span>MIKE MUSAS</span> | 2024</p>
                  </div>

                </div>

              </div>

            </footer>
    );

};

