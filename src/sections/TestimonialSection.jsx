import TestimonialCard from "../components/TestimonialCard";
import Pagination from "../components/Pagination";
import { memo } from "react";

const TestimonialSection = ({ general, language, testimonials }) => {
  return (
    <section className="py-12 px-4 sm:px-6 border-b dark:border-gray-800">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold mb-6">
          🌟 {general[language].testimonials}
        </h2>
        <Pagination items={testimonials} itemsPerPage={3}>
          {(testimonial) => (
            <TestimonialCard
              key={`testimonial-${testimonial.name}`}
              description={testimonial.description[language]}
              name={testimonial.name}
              from={testimonial.from[language]}
            />
          )}
        </Pagination>
      </div>
    </section>
  );
};

export default memo(TestimonialSection);
