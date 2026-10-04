//import { Swiper, SwiperSlide } from "swiper/react";
//import { Autoplay, Pagination } from "swiper/modules";
//If you want to use Radix UI Avatar, install @radix-ui/react-avatar and use:
//import * as Avatar from "@radix-ui/react-avatar";

type Strengths = {
  title: string;
  description: string;
};
const strengths = [
  {
    title: "Data Accuracy",
    description:
      "Focused on accurate data entry, cleaning, validation, and maintaining data quality.",
  },
  {
    title: "Data Analysis",
    description:
      "Comfortable working with Python, Pandas, NumPy, SQL, Excel, and Power BI.",
  },
  {
    title: "Data Visualization",
    description:
      "Creating clear and meaningful charts and dashboards to communicate insights.",
  },
  {
    title: "Continuous Learning",
    description:
      "Always improving analytical, technical, and professional skills.",
  },
];

export default function Strengths() {
  return (
    <section className="bg-purple-50 py-16 px-6 sm:px-10">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl font-bold text-purple-700 mb-12">
          My Professional Strengths
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {strengths.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition"
            >
              <h3 className="text-xl font-bold text-purple-700 mb-4">
                {item.title}
              </h3>

              <p className="text-gray-600 leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}