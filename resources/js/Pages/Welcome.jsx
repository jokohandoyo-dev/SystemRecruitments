import { Head, Link } from '@inertiajs/react';
import { Brain, Zap, BarChart3, Workflow, MapPin, Banknote, ChevronLeft, ChevronRight, UserRound, BriefcaseBusiness } from "lucide-react";
import { useState, useRef } from "react";
import { motion } from "framer-motion";

export default function Welcome({ auth, laravelVersion, phpVersion }) {
    const [active, setActive] = useState("home");
    const scrollRef = useRef(null);

    const navClass = (menu) =>
        `pb-1 transition ${
            active === menu
                ? "text-purple-600 border-b-2 border-purple-600"
                : "text-gray-600 hover:text-purple-600"
        }`;

    const container = {
        hidden: {},
        show: {
            transition: {
                staggerChildren: 0.2
            }
        }
    };

    const item = {
        hidden: { opacity: 0, y: 30 },
        show: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.5 }
        }
    };

    const features = [
        {
            icon: Brain,
            color: "purple",
            title: "AI CV Scoring",
            desc: "Automated ranking based on skill relevance and experience patterns."
        },
        {
            icon: Zap,
            color: "green",
            title: "Fast Screening",
            desc: "Reduce time-to-hire by 60% with intelligent automated filtering."
        },
        {
            icon: BarChart3,
            color: "purple",
            title: "Dashboard Analytics",
            desc: "Real-time insights into your recruitment funnel and performance."
        },
        {
            icon: Workflow,
            color: "green",
            title: "End-to-End Hiring",
            desc: "Manage the entire lifecycle from job posting to final onboarding."
        }
    ];

    const colorClasses = {
        purple: {
            bg: "bg-purple-100",
            text: "text-purple-600"
        },
        green: {
            bg: "bg-green-100",
            text: "text-green-600"
        }
    };

    const scroll = (direction) => {
        if (scrollRef.current) {
            scrollRef.current.scrollBy({
                left: direction === "left" ? -320 : 320,
                behavior: "smooth"
            });
        }
    };

    return (
        <>
            <Head title="Beranda" />
            <div className="bg-white-50 text-black/50 dark:bg-black dark:text-white/50">
                <div className="relative flex min-h-screen flex-col items-center justify-center selection:bg-[#FF2D20] selection:text-white">
                    <div className="relative w-full max-w-2xl px-6 lg:max-w-7xl">
                        <motion.header 
                            initial={{ y: -80 }}
                            animate={{ y: 0 }}
                            transition={{ duration: 0.5 }}
                            className="w-full py-6 sticky top-0 z-50 bg-white shadow-sm">
                            <div className="mx-auto flex max-w-7xl items-center justify-between px-6">
                                <div className="flex items-center gap-10">
                                    <div className="text-xl font-bold text-black">
                                        SRMS
                                    </div>

                                    <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-gray-600">
                                        <a href="#home" onClick={() => setActive("home")} className={navClass("home")}>
                                            HOME
                                        </a>
                                        <a href="#jobs" onClick={() => setActive("jobs")} className={navClass("jobs")}>
                                            JOBS
                                        </a>
                                        <a href="#features" onClick={() => setActive("features")} className={navClass("features")}>
                                            FEATURES
                                        </a>
                                        <a href="#about" onClick={() => setActive("about")} className={navClass("about")}>
                                            ABOUT
                                        </a>
                                    </nav>
                                </div>

                                <div className="flex items-center gap-4">
                                    {auth.user ? (
                                        <Link
                                            href={route('dashboard')}
                                            className="text-sm font-medium text-gray-700 hover:text-purple-600"
                                        >
                                            Dashboard
                                        </Link>
                                    ) : (
                                        <>
                                            <Link
                                                href={route('login')}
                                                className="text-sm font-medium text-gray-700 hover:text-purple-600"
                                            >
                                                Login
                                            </Link>

                                            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                                                <Link
                                                    href="#"
                                                    className="bg-purple-500 text-white px-5 py-2 rounded-md font-semibold border border-purple-500
                                                    hover:bg-transparent hover:text-purple-500 transition duration-300"
                                                >
                                                    Get Started
                                                </Link>
                                            </motion.div>
                                        </>
                                    )}
                                </div>
                            </div>
                        </motion.header>

                        <main className="mt-10">
                            <section id="home" className="scroll-mt-24 grid md:grid-cols-2 gap-10 items-center">
                                <div className='pl-6'>
                                    <motion.div
                                    initial={{ opacity: 0, y: 40 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.6 }}
                                     >
                                        <h1 className="text-4xl font-bold text-gray-900">
                                            Smart Recruitment with AI
                                        </h1>
                                        <p className="mt-4 text-gray-600">
                                            Sistem rekrutmen modern dengan AI CV Screening.
                                            Automate your hiring process and focus on what
                                            matters most human connection.
                                        </p>
                                        <div className="mt-6 flex gap-4">
                                            <motion.button 
                                            whileHover={{ scale: 1.05 }}
                                            whileTap={{ scale: 0.95 }}
                                            className="bg-purple-500 text-white px-5 py-2 rounded w-full sm:w-auto
                                            border border-purple-500 hover:bg-transparent hover:text-purple-500 transition duration-300">
                                            Find Jobs
                                            </motion.button>
                                            <motion.button 
                                            whileHover={{ scale: 1.05 }}
                                            whileTap={{ scale: 0.95 }}
                                            className="border border-green-600 text-green-600 px-5 py-2 rounded w-full sm:w-auto
                                            hover:bg-green-600 hover:text-white transition duration-300">
                                            Post a Job
                                            </motion.button>
                                        </div>
                                    </motion.div>
                                </div>

                                <div className="flex justify-end pr-6">
                                    <img src="/images/jobillustration.jpg" alt="Job Image" className="w-full h-auto max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg rounded-xl"/>
                                </div>
                            </section>

                            <section id="features" className='scroll-mt-24 mt-16 bg-purple-200 py-16 w-full sm:px-6 lg:px-8'>
                                <div className='pt-5 text-2xl sm:text-3xl text-center text-black font-bold'>
                                    <h1>Powerfull Recruitment Tools</h1>
                                </div>
                                <div className='pt-1 text-sm text-center'>
                                    <p>
                                        Enterprise-grade features for modern hiring teams.
                                    </p>
                                </div>
                                <motion.div
                                    variants={container}
                                    initial="hidden"
                                    whileInView="show"
                                    viewport={{ once: true }}
                                    className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
                                >
                                    {features.map((itemData, index) => {
                                        const Icon = itemData.icon;
                                        const color = colorClasses[itemData.color];

                                        return (
                                            <motion.div
                                                key={index}
                                                variants={item}
                                                className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition transform hover:-translate-y-2"
                                            >
                                                <div className={`w-14 h-14 ${color.bg} rounded-lg flex items-center justify-center mb-4`}>
                                                    <Icon className={`w-6 h-6 ${color.text}`} />
                                                </div>

                                                <h3 className="font-bold text-lg text-black mb-2">
                                                    {itemData.title}
                                                </h3>

                                                <p className="text-sm text-gray-600">
                                                    {itemData.desc}
                                                </p>
                                            </motion.div>
                                        );
                                    })}
                                </motion.div>
                            </section>

                            <section id='jobs' className='scroll-mt-24 bg-purple-100 py-20 w-full'>
                                <div className='text-center'>
                                    <h1 className='text-3xl sm:text-4xl font-bold text-black'>
                                        Featured Job Openings
                                    </h1>
                                    <p className='text-sm text-gray-600 mt-2'>
                                        Discover your next career move with AI-powered matching.
                                    </p>
                                </div>
                                <div className="relative max-w-6xl mx-auto mt-12">
                                    <div className="absolute left-0 top-0 h-full w-16 bg-gradient-to-r from-purple-100 to-transparent z-10 pointer-events-none" />
                                    <div className="absolute right-0 top-0 h-full w-16 bg-gradient-to-l from-purple-100 to-transparent z-10 pointer-events-none" />
                                    <motion.button
                                        whileTap={{ scale: 0.9 }}
                                        onClick={() => scroll("left")}
                                        className="absolute left-[-20px] top-1/2 -translate-y-1/2 z-20 
                                                p-3 bg-white rounded-full shadow-md hover:scale-110 transition"
                                    >
                                        <ChevronLeft />
                                    </motion.button>
                                    <motion.button
                                        whileTap={{ scale: 0.9 }}
                                        onClick={() => scroll("right")}
                                        className="absolute right-[-20px] top-1/2 -translate-y-1/2 z-20 
                                                p-3 bg-white rounded-full shadow-md hover:scale-110 transition"
                                    >
                                        <ChevronRight />
                                    </motion.button>
                                    <div
                                        ref={scrollRef}
                                        className="flex gap-6 overflow-x-auto scroll-smooth no-scrollbar px-16 py-4"
                                    >
                                        {[
                                            {
                                                title: "Senior Software Engineer",
                                                company: "TechPulse Dynamics",
                                                location: "Jakarta, Indonesia (Remote)",
                                                salary: "IDR 25M - 40M / mo"
                                            },
                                            {
                                                title: "Product Designer",
                                                company: "Creative Flow Studio",
                                                location: "Singapore",
                                                salary: "SGD 5K - 8K / mo"
                                            },
                                            {
                                                title: "Data Scientist",
                                                company: "InnovaData Systems",
                                                location: "Remote",
                                                salary: "IDR 30M - 50M / mo"
                                            },
                                            {
                                                title: "UI/UX Designer",
                                                company: "NextGen Labs",
                                                location: "Jakarta",
                                                salary: "IDR 10M - 18M / mo"
                                            }
                                        ].map((job, index) => (
                                            <div
                                                key={index}
                                                className="min-w-[300px] max-w-[300px] bg-white p-6 rounded-2xl shadow-md 
                                                        hover:shadow-xl transition transform hover:-translate-y-2"
                                            >
                                                <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                                                    <BarChart3 className="w-5 h-5 text-purple-600" />
                                                </div>
                                                <h3 className="font-bold text-lg text-black">
                                                    {job.title}
                                                </h3>
                                                <p className="text-sm text-gray-500 mt-1">
                                                    {job.company}
                                                </p>
                                                <div className="text-sm text-gray-600 mt-3 space-y-2">
                                                    <div className="flex items-center gap-2">
                                                        <MapPin className="w-4 h-4" />
                                                        {job.location}
                                                    </div>
                                                    <div className="flex items-center gap-2">
                                                        <Banknote className="w-4 h-4" />
                                                        {job.salary}
                                                    </div>
                                                </div>
                                                <button className="mt-5 w-full bg-gradient-to-r 
                                                                from-purple-500 to-purple-600 
                                                                text-white py-2 rounded-lg 
                                                                font-medium hover:opacity-90 transition">
                                                    Apply Now
                                                </button>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                                <div className='flex justify-center mt-12'>
                                    <motion.button
                                        whileHover={{ scale: 1.05 }}
                                        whileTap={{ scale: 0.95 }}
                                        className='border border-black text-black px-6 py-2 rounded-md transition'
                                    >
                                        View All Jobs
                                    </motion.button>
                                </div>

                            </section>

                            <section className='bg-purple-100 w-full'>
                                <div className='text-center'>
                                    <h1 className='text-3xl sm:text-4xl font-bold text-black'>
                                        The Journey to Succes
                                    </h1>
                                </div>
                                <div className='mt-10 p-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6'>
                                    <div className='flex items-start gap-4 bg-white p-5 rounded-xl shadow-sm hover:shadow-md transition border-l-4 border-purple-500'>
                                        <div>
                                            <UserRound className='text-purple-600'></UserRound>
                                            <h2 className='text-2xl text-black font-bold'>
                                                For Candidates
                                            </h2>
                                        </div>
                                    </div>
                                    <div className='flex items-start gap-4 bg-white p-5 rounded-xl shadow-sm hover:shadow-md transition border-l-4 border-green-500'>
                                        <div className=''>
                                            <BriefcaseBusiness className='text-green-600'></BriefcaseBusiness>
                                        </div>
                                        <h2 className='text-black'>For HR Teams</h2>
                                    </div>
                                </div>
                            </section>
                        </main>

                        <footer className="py-16 text-center text-sm text-black dark:text-white/70">
                            Laravel v{laravelVersion} (PHP v{phpVersion})
                        </footer>
                    </div>
                </div>
            </div>
        </>
    );
}
