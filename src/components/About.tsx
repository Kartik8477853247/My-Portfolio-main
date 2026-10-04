import { motion } from "framer-motion";
import { Briefcase, Code } from "lucide-react";

export default function About() {
  return (
    <section className="min-h-screen bg-white text-gray-900 flex flex-col items-center py-16 px-4 sm:px-6 lg:px-8">
      {/* Heading */}
      <motion.div
        initial={{ opacity: 0, y: -15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center mb-12"
      >
        <h1 className="text-4xl sm:text-5xl font-bold bg-gradient-to-r from-purple-600 to-pink-500 bg-clip-text text-transparent">
          About Me
        </h1>

        <p className="mt-4 text-gray-500 text-base sm:text-lg max-w-2xl mx-auto">
         Turning data into meaningful insights with accuracy, creativity,
         and continuous learning.
         </p>
      </motion.div>

      {/* Main Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl w-full">
        
        {/* Left Card */}
        <motion.div
          initial={{ opacity: 0, x: -25 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          whileHover={{ y: -5 }}
          className="
            relative
            overflow-hidden
            rounded-[32px]
            shadow-2xl
            p-8
            flex
            flex-col
            items-center
            justify-center
            text-center
            bg-gradient-to-br
            from-purple-300
            via-violet-400
            to-pink-500
          "
        >
          {/* Decorative Circles */}
          <div className="absolute -top-16 -right-16 w-48 h-48 bg-white/10 rounded-full"></div>
          <div className="absolute -bottom-12 -left-12 w-40 h-40 bg-white/10 rounded-full"></div>

          {/* Profile Image */}
          <div className="relative">
            <div className="absolute inset-0 bg-white/20 blur-xl rounded-full scale-110"></div>

            <motion.img
              whileHover={{ scale: 1.05, rotate: 2 }}
              transition={{ duration: 0.3 }}
              src="/images/profile_pic.png"
              alt="Kartik Dhiman"
              className="
                relative
                w-40
                h-40
                rounded-full
                object-cover
                border-4
                border-white/40
                shadow-2xl
              "
            />
          </div>

          {/* Name */}
          <h2 className="mt-6 text-4xl sm:text-5xl font-bold text-white">
            KARTIK DHIMAN
          </h2>

          {/* Roles */}
          <div className="flex flex-col sm:flex-row gap-2 sm:gap-4 mt-3 text-white text-sm sm:text-base font-medium">
            <span className="flex items-center gap-1">
              <Briefcase size={18} className="text-purple-600" /> DATA ANALYTCS
            </span>
            <span className="hidden sm:block text-purple-400">|</span>
            <span className="flex items-center gap-1">
              <Code size={18} className="text-purple-600" /> DATA ENTRY OPERATOR
            </span>
          </div>
        </motion.div>

        {/* Right Card */}
        <motion.div
          initial={{ opacity: 0, x: 25 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          className="bg-white border border-purple-100 rounded-3xl shadow-xl p-8"
        >
          <div className="space-y-5">
           <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
  Hi, I'm Kartik Dhiman, a Data Analyst and Data Entry Operator
  passionate about working with data, maintaining accurate records,
  and creating meaningful insights.
</p>

<p className="text-gray-700 text-sm sm:text-base leading-relaxed">
I have experience working with data entry, data management,
data cleaning, Excel spreadsheets, and organizing information
in a clear and accurate way.
</p>

<p className="text-gray-700 text-sm sm:text-base leading-relaxed">
  I enjoy analyzing data, finding useful information, and
  transforming raw data into simple and understandable results.
  I always focus on accuracy, consistency, and attention to detail.
</p>

<p className="text-gray-700 text-sm sm:text-base leading-relaxed italic">
  Always learning. Always improving. Let's work with data and
  turn information into meaningful results. ✨
</p>          </div>
        </motion.div>

      </div>
    </section>
  );
}
