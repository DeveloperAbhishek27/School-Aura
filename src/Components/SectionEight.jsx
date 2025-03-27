import React from "react";

const SectionEight = () => {
  return (
    <>
      <div className="w-full mx-auto mt-10 bg-[#ffffff]">
        <div className="max-w-[80%] py-10 w-full mx-auto">
          <h1 className="lg:text-[30px] text-center py-4 font-bold text-[30px]">
            WHAT <span className="text-orange-500">PARENT SAYS</span>
          </h1>
          <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 pt-6 lg:grid-cols-4 gap-8 items-start">
            <div
              className="bg-white rounded-lg p-4 hover:-translate-y-1 transition-transform duration-300 cursor-pointer"
              style={{ boxShadow: "0 5px 20px rgba(0, 0, 0, 0.1)" }}
            >
              <div className="flex items-center gap-3">
                <img
                  src="./SectionSevenImg/client.png"
                  alt="Vishal Kumar"
                  className="w-12 h-12 rounded-full"
                />
                <div>
                  <h2 className="font-bold text-gray-900">Vishal Kumar</h2>
                  <p className="text-orange-600 text-sm">Delhi</p>
                </div>
              </div>
              <p className="text-gray-500 mt-3 ">
                "My daughter used to despise math, but now she can confidently
                take math tests." She's become enamoured with math, which is
                fantastic! Thank You School Aura for your tremendous support.
              </p>
            </div>

            <div
              className="bg-white rounded-lg p-4 hover:-translate-y-1 transition-transform duration-300 cursor-pointer"
              style={{ boxShadow: "0 5px 20px rgba(0, 0, 0, 0.1)" }}
            >
              <div className="flex items-center gap-3">
                <img
                  src="./SectionSevenImg/client.png"
                  alt="Ravi Kaushal"
                  className="w-12 h-12 rounded-full"
                />
                <div>
                  <h2 className="font-bold text-gray-900">Aman mishra</h2>
                  <p className="text-orange-600 text-sm">
                    Lucknow, Madhya Pradesh
                  </p>
                </div>
              </div>
              <p className="text-gray-500 mt-3">
                Great teacher with an excellent method! Wish I had learned from
                them earlier.
              </p>
            </div>
            <div
              className="bg-white rounded-lg p-4 hover:-translate-y-1 transition-transform duration-300 cursor-pointer"
              style={{ boxShadow: "0 5px 20px rgba(0, 0, 0, 0.1)" }}
            >
              <div className="flex items-center gap-3">
                <img
                  src="./SectionSevenImg/client.png"
                  alt="Ravi Kaushal"
                  className="w-12 h-12 rounded-full"
                />
                <div>
                  <h2 className="font-bold text-gray-900">Ravi Kaushal</h2>
                  <p className="text-orange-600 text-sm">
                    Indore, Madhya Pradesh
                  </p>
                </div>
              </div>
              <p className="text-gray-500 mt-3">
                Excellent teacher with a fantastic teaching method; if I had had
                this teacher in school, I believe I would have achieved my goal
                of becoming a lecturer.
              </p>
            </div>

            <div
              className="bg-white rounded-lg p-4 hover:-translate-y-1 transition-transform duration-300 cursor-pointer"
              style={{ boxShadow: "0 5px 20px rgba(0, 0, 0, 0.1)" }}
            >
              <div className="flex items-center gap-3">
                <img
                  src="./SectionSevenImg/client.png"
                  alt="Rasmi Panday"
                  className="w-12 h-12 rounded-full"
                />
                <div>
                  <h2 className="font-bold text-gray-900">Rasmi Panday</h2>
                  <p className="text-orange-600 text-sm">Delhi</p>
                </div>
              </div>
              <p className="text-gray-500 mt-3">
                I have seen my son go from hating math to absolutely loving it.
                His marks have improved so much from last year. He looks forward
                to attending math sessions taken by .... Thank you, School Aura,
                for making math so much fun for my child! :)
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SectionEight;
