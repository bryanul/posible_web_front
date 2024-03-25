import React from 'react';
import { Footer } from "flowbite-react";
import logo from '../foto/logoT.png'
import { BsDribbble, BsFacebook, BsGithub, BsInstagram, BsTwitter } from "react-icons/bs";

function Footerweb() {
    return (
        <Footer container style={{backgroundColor:'transparent'}}>
            <div className="w-full text-center">
                <Footer.Divider />
                <div className="w-full sm:flex sm:items-center sm:justify-between font-semibold" >
                    <Footer.Copyright href="#" by="Posible™" year={2024} />
                    <div className="mt-4 flex space-x-6 sm:mt-0 justify-center">
                        <Footer.Icon href="#" icon={BsFacebook} />
                        <Footer.Icon href="#" icon={BsInstagram}/>
                        <Footer.Icon href="#" icon={BsTwitter}/>
                    </div>
                </div>
            </div>
        </Footer>
    );
}

export default Footerweb;