import React from "react";
import star from "../assets/icon-star.svg";
import colton from "../assets/image-colton.jpg";
import anne from "../assets/image-anne.jpg";
import irene from "../assets/image-irene.jpg";

export default function Social() {
  return (
    <div className="p-4 lg:px-24 lg:py-16 2xl:mx-20 2xl:mt-12 pt-16">
      <div className="grid lg:grid-col-2 lg:grid-flow-col gap-4">
        <div className="2xl:mr-20">
          <h1 className="league-spartan-bold text-center lg:text-left text-5xl lg:text-[3.5rem] leading-10 lg:leading-[3.5rem] text-[hsl(300,43%,22%)]">
            10,000+ of our  users love our products.
          </h1>
          <p className="pr-4 my-4 text-center lg:text-left text-lg league-spartan-medium text-[hsl(303,10%,53%)]">
            We only provide great products combined with excellent
             customer service. See what our satisfied customers are
            saying about our services.
          </p>
        </div>
        <div className="lg:ml-10">
          <div className="lg:flex rounded-lg">
            <div className="bg-[hsl(300,24%,96%)] p-2 justify-center lg:pl-4 lg:p-4 flex items-center rounded-l-lg">
              <img src={star} className="px-[0.25rem] py-2" alt="star" />
              <img src={star} className="px-[0.25rem] py-2" alt="star" />
              <img src={star} className="px-[0.25rem] py-2" alt="star" />
              <img src={star} className="px-[0.25rem] py-2" alt="star" />
              <img src={star} className="px-[0.25rem] py-2" alt="star" />
            </div>
            <div className="bg-[hsl(300,24%,96%)] p-2 lg:p-4 rounded-r-lg text-center lg:text-left lg:pr-20">
              <p className="league-spartan-bold my-auto text-xl text-[hsl(300,43%,22%)]">
                Rated 5 stars in Review
              </p>
            </div>
          </div>

          <div className="lg:ml-12 lg:flex rounded-lg mt-6">
            <div className="bg-[hsl(300,24%,96%)] lg:pl-4 lg:p-4 p-2 justify-center flex items-center rounded-l-lg">
              <img src={star} className="px-[0.25rem] py-2" alt="star" />
              <img src={star} className="px-[0.25rem] py-2" alt="star" />
              <img src={star} className="px-[0.25rem] py-2" alt="star" />
              <img src={star} className="px-[0.25rem] py-2" alt="star" />
              <img src={star} className="px-[0.25rem] py-2" alt="star" />
            </div>
            <div className="bg-[hsl(300,24%,96%)] lg:p-4 p-2 text-center lg:text-left rounded-r-lg lg:pr-10">
              <p className="league-spartan-bold my-auto text-xl text-[hsl(300,43%,22%)]">
                Rated 5 stars in Report Guru
              </p>
            </div>
          </div>

          <div className="lg:ml-24 lg:flex rounded-lg mt-6">
            <div className="bg-[hsl(300,24%,96%)] pl-4 lg:p-4 p-2 justify-center flex items-center rounded-l-lg">
              <img src={star} className="px-[0.25rem] py-2" alt="star" />
              <img src={star} className="px-[0.25rem] py-2" alt="star" />
              <img src={star} className="px-[0.25rem] py-2" alt="star" />
              <img src={star} className="px-[0.25rem] py-2" alt="star" />
              <img src={star} className="px-[0.25rem] py-2" alt="star" />
            </div>
            <div className="bg-[hsl(300,24%,96%)] lg:p-4 p-2 text-center lg:text-left rounded-r-lg lg:pr-16">
              <p className="league-spartan-bold my-auto text-xl text-[hsl(300,43%,22%)]">
                Rated 5 stars in BestTech
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-8 grid lg:grid-cols-3 gap-8 text-white league-spartan-regular">
        <div className="bg-[hsl(300,43%,22%)] rounded-lg p-8 shadow-2xl lg:mb-12">
          <div className="flex league-spartan-medium text-md mb-8">
            <div className="">
              <img src={colton} alt="colton" className="rounded-full w-3/5" />
            </div>
            <div className="-ml-4">
              <p>Colton Smith</p>
              <p className="text-[hsl(333,80%,67%)]">Verified Buyer</p>
            </div>
          </div>
          <p className="text-lg leading-6">
            " We needed the same printed design as the one we had ordered a week
            prior. Not only did they find the original order, but we also
            received it in time. Excellent! "
          </p>
        </div>


        <div className="bg-[hsl(300,43%,22%)] rounded-lg p-8 shadow-2xl lg:mt-4 lg:mb-8">
          <div className="flex league-spartan-medium text-md mb-8">
            <div className="">
              <img src={irene} alt="irene" className="rounded-full w-3/5" />
            </div>
            <div className="-ml-4">
              <p>Irene Roberts</p>
              <p className="text-[hsl(333,80%,67%)]">Verified Buyer</p>
            </div>
          </div>
          <p className="text-lg leading-6">
          "Customer service is always excellent and very quick turn around. Completely
    delighted with the simplicity of the purchase and the speed of delivery."
          </p>
        </div>



        <div className="bg-[hsl(300,43%,22%)] lg:mt-8 lg:mb-4 rounded-lg p-8 shadow-2xl">
          <div className="flex league-spartan-medium text-md mb-8">
            <div className="">
              <img src={anne} alt="anne" className="rounded-full w-3/5" />
            </div>
            <div className="-ml-4">
              <p>Anne Wallace </p>
              <p className="text-[hsl(333,80%,67%)]">Verified Buyer</p>
            </div>
          </div>
          <p className="text-lg leading-6">
          "Put an order with this company and can only praise them for the very high
    standard. Will definitely use them again and recommend them to everyone!"
          </p>
        </div>

      </div>
    </div>
  );
}
