import { Briefcase } from "lucide-react";

interface ExperienceItem {
  role: string;
  company: string;
  duration: string;
  description: string;
}

const experiences: ExperienceItem[] = [
  {
    role: "Data Analytcs",
    company: "CodeAlpha pvt and 4Achivers institute",
    duration: "May 2026 – july2026",
    description:
      "Results-Worked on data analytics project using python,pandas,excel and data visualization and improved data cleaning, analysis and reporting skill."
  },
  {
    role: "Data entry and data cleaning Intern",
    company: "4Achivers institute dehradun",
    duration: "June 2026 – dec 2026",
    description:
      "Worked on Python libraries using pandas , numpy, seaborn matplotlib and tool used in microsoft excel.",
  },
  {
    role: "MYSQL Intern",
    company: "4Achivers institute",
    duration: "july2026 – august2026",
    description:
      "Worked on sql command create ,update, alter, insert, delete, drop, truc, order by, group by,where, select, aggre function, focus on performance and security.",
  },
];

export default function Experience() {
  return (
    <section className="w-full py-16 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-bold text-purple-700 text-center mb-12">
          Work & Internships
        </h2>

        {/* Timeline */}
        <div className="relative border-l-4 border-purple-300 pl-6 space-y-10">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="relative bg-purple-50 rounded-2xl shadow-md hover:shadow-xl transition p-6"
            >
              {/* Icon */}
              <div className="absolute -left-10 top-6 flex items-center justify-center w-10 h-10 rounded-full bg-purple-600 text-white shadow-lg">
                <Briefcase size={20} />
              </div>

              {/* Content */}
              <h3 className="text-xl font-semibold text-purple-700">
                {exp.role}
              </h3>
              <p className="text-gray-700 font-medium">{exp.company}</p>
              <span className="text-sm text-gray-500">{exp.duration}</span>
              <p className="mt-3 text-gray-600 text-sm">{exp.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
