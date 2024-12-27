import Feedback from "@/components/section/feedback";
import ReferanceSlider from "@/components/section/ReferanceSlider";
import Testimonial from "@/components/section/testimonial";
import SectionTitle from "@/components/ui/sectionTitle";
import React from "react";

const Referance = () => {
  return (
     <div className="w-full">
    <div className="mt-0 mb-20 md:mb-32">
      <ReferanceSlider />
    </div>
    <div className="-mt-32 md:-mt-48 mb-32">
      <Testimonial check={true} show={false} />
    </div>
    <Feedback/>
  </div>
  );
};

export default Referance;
