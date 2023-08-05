import React from "react";
import Link from "next/link";
import { BsGithub, BsLinkedin, BsTwitter } from "react-icons/bs";

const Contact = () => {
  return (
    <div className="flex justify-center items-center" id="contact">
      <div className=" grid sm:flex justify-between items-start text-center gap-6">
        <div>
          <address className="text-sm">
            <a href="mailto:soluwawumiju@covenanttechs.com" className=" ">
              ejike.developer@gmail.com
            </a>

            <br />
            <a href="tel: +234-8032178453" className=" ">
              +234-8130719451
            </a>
            <br />
          </address>
        </div>
        <div>
          <h3 className="font-semibold heading">Address</h3>
          <address className="text-sm">
            16 Odelola Street, Kilo
            <br />
            Surulere, Lagos
          </address>
        </div>
        <div className="mb-8">
          <h3 className="font-semibold heading">Follow us on our socials</h3>
          <div className="flex justify-evenly ">
            <Link href="https://github.com/EjikeOdoh">
              <BsGithub size={30} />
            </Link>
            <Link href="https://www.linkedin.com/in/ejike-jude-odoh/">
              <BsLinkedin size={30} />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
