import React from "react";
import {Button} from "@nextui-org/react";
import cameraIcon from '@/public/images/googlemaps.png';

const Contact = () => {
  return (
    <section className="text-gray-600 body-font pt-16 relative max-w-6xl mx-auto">
      <div className="container px-5 py-24 mx-auto flex sm:flex-nowrap flex-wrap">
        <div className="lg:w-2/3 md:w-1/2 bg-gray-300 rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative">
          <iframe
            width="100%"
            height="100%"
            className="absolute inset-0"
            title="map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3012.046300662688!2d27.548750575993118!3d40.98046697135441!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14b4f5b2c91d7701%3A0x73830d2160c3e8a!2zxLBNQVRFSyBZQVBJIE3DnEhFTkTEsFNMxLBL!5e0!3m2!1str!2str!4v1703731064188!5m2!1str!2str"
          ></iframe>
          <div className="bg-white relative flex flex-wrap py-6 rounded shadow-md mt-48">
            <div className="lg:w-1/3 px-6">
              <h2 className="title-font text-center font-semibold text-gray-900 tracking-widest text-xs">
                ADRES
              </h2>
              <p className="mt-1">
                Hürriyet Mh. Kazım Koyuncu Sk. No:1/2 Süleymanpaşa/Tekirdağ
              </p>
            </div>
            <div className="lg:w-1/3 mx-auto px-6">
              <h2 className="title-font text-center font-semibold text-gray-900 tracking-widest text-xs">
                NAVİGASYON
              </h2>
              <ul className="block">
                <li>
                    <Button variant="bordered" endContent={<img className="w-5 h-5" src="/images/googlemaps.png" alt="icon" />} className="flex w-full p-1 m-1 rounded-xl text-black hover:bg-primary/50" href="#">Google Maps</Button>
                </li>

                <li>
                    <Button variant="bordered" endContent={<img className="w-5 h-5" src="/images/applemaps.png" alt="icon" />} className="flex w-full  p-1 m-1 rounded-xl text-black hover:bg-primary/75" href="#">Apple Maps</Button>
                </li>
              </ul>
            </div>
            <div className="lg:w-1/3 mx-auto px-6 mt-4 lg:mt-0 text-center">
              <h2 className="title-font text-center font-semibold text-gray-900 tracking-widest text-xs">
                EMAIL
              </h2>
              <a href="mailto:info@imatekyapi.com" className="text-indigo-500 leading-relaxed">
                info@imatekyapi.com
              </a>
              <h2 className="title-font text-center font-semibold text-gray-900 tracking-widest text-xs mt-4">
                TELEFON
              </h2>
              <a href="tel:+905415605959" className="leading-relaxed mx-auto">0 541 560 59 59</a>
            </div>
          </div>
        </div>
        <div className="lg:w-1/3 md:w-1/2 flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0 rounded-lg p-5  bg-white/10 backdrop-blur-xl">
        <form>
              <div className="flex flex-wrap -mx-3 mb-4">
                <div className="w-full px-3">
                  <label
                    className="block text-gray-300 text-sm font-medium mb-1"
                    htmlFor="full-name"
                  >
                    İsminiz: <span className="text-red-600">*</span>
                  </label>
                  <input
                    id="full-name"
                    type="text"
                    className="form-input w-full text-gray-300"
                    placeholder="Ad Soyad"
                    required
                  />
                </div>
              </div>
              <div className="flex flex-wrap -mx-3 mb-4">
                <div className="w-full px-3">
                  <label
                    className="block text-gray-300 text-sm font-medium mb-1"
                    htmlFor="company-name"
                  >
                    Şirket: <span className="text-red-600">*</span>
                  </label>
                  <input
                    id="company-name"
                    type="text"
                    className="form-input w-full text-gray-300"
                    placeholder="Şirketinizin Adı"
                    required
                  />
                </div>
              </div>
              <div className="flex flex-wrap -mx-3 mb-4">
                <div className="w-full px-3">
                  <label
                    className="block text-gray-300 text-sm font-medium mb-1"
                    htmlFor="email"
                  >
                    Email Adresi <span className="text-red-600">*</span>
                  </label>
                  <input
                    id="email"
                    type="email"
                    className="form-input w-full text-gray-300"
                    placeholder="ornek@mail.com"
                    required
                  />
                </div>
              </div>
              <div className="flex flex-wrap -mx-3 mb-4">
                <div className="w-full px-3">
                  <label
                    className="block text-gray-300 text-sm font-medium mb-1"
                    htmlFor="password"
                  >
                    Mesajınız <span className="text-red-600">*</span>
                  </label>
                  <input
                    id="password"
                    type="textarea"
                    className="form-input w-full text-gray-300"
                    placeholder="Sağ alt köşeden genişletebilirsiniz."
                    required
                  />
                </div>
              </div>
              <div className="flex flex-wrap -mx-3 mt-6">
                <div className="w-full px-3">
                  <Button
                    type="submit"
                    className="btn text-white bg-purple-600 hover:bg-purple-700 w-full"
                  >
                    Gönder
                  </Button>
                </div>
              </div>
            </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
