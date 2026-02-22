"use client";

import { Splide, SplideSlide } from "@splidejs/react-splide";
import { useTranslations } from "next-intl";
import Image from "next/image";

const ClientTestimonial = () => {
  const t = useTranslations();

  // Truncate text function
  const truncateText = (text, maxLength) => {
    if (text.length <= maxLength) return text;
    return text.substr(0, maxLength) + "...";
  };

  return (
    <Splide
      options={{
        type: "loop",
        perPage: 3,
        gap: "2rem",
        autoplay: true,
        interval: 3000,
        pauseOnHover: true,
        arrows: true,
        pagination: true,
        breakpoints: {
          1280: { perPage: 3 },
          1024: { perPage: 2 },
          640: { perPage: 1 },
        },
      }}
    >
      {t.raw("home.clientPage.clients").map((client, index) => (
        <SplideSlide key={index}>
          <div className="m-4 mb-6 h-[480px] rounded-lg bg-white p-6 shadow-lg transition-shadow duration-300 hover:shadow-xl dark:bg-slate-800">
            <div className="flex h-full flex-col">
              <div className="mb-4 relative h-20 flex-shrink-0">
                <Image
                  src={`/assets/${client.logo}`}
                  alt={client.name}
                  className="mx-auto h-full object-contain"
                  fill
                />
              </div>
              <div className="flex flex-grow flex-col justify-between">
                <div>
                  <h2 className="mb-2 text-center text-xl font-semibold text-gray-900 dark:text-gray-200 sm:text-2xl">
                    {client.name}
                  </h2>
                  <p className="text-md mb-4 text-center text-gray-700 dark:text-gray-300">
                    {truncateText(client.description, 120)}
                  </p>
                  <ul className="text-gray-700 dark:text-gray-300">
                    {client.services.map((service, idx) => (
                      <li key={idx} className="text-center text-sm">
                        • {service}
                      </li>
                    ))}
                  </ul>
                  <blockquote className="text-center text-sm italic text-gray-700 dark:text-gray-300">
                    "{truncateText(client.testimonial, 100)}"
                  </blockquote>
                </div>
              </div>
            </div>
          </div>
        </SplideSlide>
      ))}
    </Splide>
  );
};

export default ClientTestimonial;
