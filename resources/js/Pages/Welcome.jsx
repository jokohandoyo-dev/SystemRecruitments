import { Head, Link } from '@inertiajs/react';
import { Brain, Zap, BarChart3, Workflow, MapPin, Banknote, ChevronLeft, ChevronRight, UserRound, BriefcaseBusiness, Earth, Link2 } from "lucide-react";
import { useState, useRef } from "react";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";

export default function Welcome({ auth, laravelVersion, phpVersion }) {
    const [active, setActive] = useState("home");
    const [mobileOpen, setMobileOpen] = useState(false);
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
                            className="w-full py-4 sticky top-0 z-50 bg-white shadow-sm"
                        >
                            <div className="mx-auto flex max-w-7xl items-center justify-between px-4 md:px-6">

                                {/* LOGO */}
                                <div className="text-xl font-bold text-black">
                                    SRMS
                                </div>

                                {/* DESKTOP MENU */}
                                <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-gray-600">
                                    <a href="#home" onClick={() => setActive("home")} className={navClass("home")}>HOME</a>
                                    <a href="#jobs" onClick={() => setActive("jobs")} className={navClass("jobs")}>JOBS</a>
                                    <a href="#features" onClick={() => setActive("features")} className={navClass("features")}>FEATURES</a>
                                    <a href="#about" onClick={() => setActive("about")} className={navClass("about")}>ABOUT</a>
                                </nav>

                                {/* RIGHT SIDE */}
                                <div className="hidden md:flex items-center gap-4">
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
                                                    className="bg-purple-500 text-white px-4 py-2 rounded-md font-semibold border border-purple-500
                                                    hover:bg-transparent hover:text-purple-500 transition duration-300"
                                                >
                                                    Get Started
                                                </Link>
                                            </motion.div>
                                        </>
                                    )}
                                </div>

                                {/* HAMBURGER BUTTON */}
                                <button
                                    onClick={() => setMobileOpen(!mobileOpen)}
                                    className="md:hidden p-2 rounded-md border"
                                >
                                    {mobileOpen ? <X size={20} /> : <Menu size={20} />}
                                </button>
                            </div>

                            {/* MOBILE MENU */}
                            {mobileOpen && (
                                <motion.div
                                    initial={{ opacity: 0, y: -20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    className="md:hidden bg-white border-t px-4 py-4 space-y-4"
                                >
                                    <a href="#home" onClick={() => { setActive("home"); setMobileOpen(false); }} className="block">HOME</a>
                                    <a href="#jobs" onClick={() => { setActive("jobs"); setMobileOpen(false); }} className="block">JOBS</a>
                                    <a href="#features" onClick={() => { setActive("features"); setMobileOpen(false); }} className="block">FEATURES</a>
                                    <a href="#about" onClick={() => { setActive("about"); setMobileOpen(false); }} className="block">ABOUT</a>

                                    <div className="border-t pt-4 flex flex-col gap-3">
                                        {auth.user ? (
                                            <Link href={route('dashboard')} className="text-sm">
                                                Dashboard
                                            </Link>
                                        ) : (
                                            <>
                                                <Link href={route('login')} className="text-sm">
                                                    Login
                                                </Link>
                                                <Link
                                                    href="#"
                                                    className="bg-purple-500 text-white px-3 py-1.5 rounded text-sm text-center w-fit"
                                                >
                                                    Get Started
                                                </Link>
                                            </>
                                        )}
                                    </div>
                                </motion.div>
                            )}
                        </motion.header>

                        <main className="mt-10">
                            <section id="home" className="grid md:grid-cols-2 gap-10 items-center py-12">
                                <div className='pl-6 text-center md:text-left'>
                                    <motion.div
                                    initial={{ opacity: 0, y: 40 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.6 }}
                                     >
                                        <h1 className="text-3xl sm:text-4xl font-bold text-gray-900">
                                            Smart Recruitment with AI
                                        </h1>
                                        <p className="mt-4 text-gray-600">
                                            Sistem rekrutmen modern dengan AI CV Screening.
                                            Automate your hiring process and focus on what
                                            matters most human connection.
                                        </p>
                                        <div className="mt-6 flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
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

                                <div className="flex justify-center md:justify-end">
                                    <img src="/images/jobillustration.jpg" alt="Job Image" className="w-full h-auto max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg rounded-xl"/>
                                </div>
                            </section>

                            <section id="features" className='bg-purple-200 py-12 sm:py-16 px-4 sm:px-6 lg:px-8'>
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

                            <section id='jobs' className='bg-purple-100 py-12 sm:py-20 px-4 sm:px-6 lg:px-8'>
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

                            <section className='bg-purple-100 w-full py-12'>
                                <div className='text-center'>
                                    <h1 className='text-3xl sm:text-4xl font-bold text-black'>
                                        The Journey to Succes
                                    </h1>
                                </div>
                                <div className='mt-12 max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-8'>
                                    <div className='bg-white p-6 rounded-2xl shadow-sm border-l-4 border-purple-500'>
                                        <div className='flex items-center gap-3 mb-6'>
                                            <UserRound className='text-purple-600'></UserRound>
                                            <h2 className='text-2xl text-black font-bold'>
                                                For Candidates
                                            </h2>
                                        </div>
                                        <div className='space-y-5'>
                                            <div className='flex items-start gap-3'>
                                                <div className='w-7 h-7 bg-purple-500 text-white rounded-full flex items-center justify-center text-xs font-bold'>
                                                    1
                                                </div>
                                                <div>
                                                    <p className='font-medium text-black'>Upload CV</p>
                                                    <p className='text-sm'>
                                                        Our AI parses your experience instantly.
                                                    </p>
                                                </div>
                                            </div>
                                            <div className='flex items-start gap-3'>
                                                <div className='w-7 h-7 bg-purple-500 text-white rounded-full flex items-center justify-center text-xs font-bold'>
                                                    2
                                                </div>
                                                <div>
                                                    <p className='font-medium text-black'>Apply</p>
                                                    <p className='text-sm'>
                                                        One-click applications to matching roles.
                                                    </p>
                                                </div>
                                            </div>
                                            <div className='flex items-start gap-3'>
                                                <div className='w-7 h-7 bg-purple-500 text-white rounded-full flex items-center justify-center text-xs font-bold'>
                                                    3
                                                </div>
                                                <div>
                                                    <p className='font-medium text-black'>Interview</p>
                                                    <p className='text-sm'>
                                                        Direct connection with hiring managers.
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='bg-white p-6 rounded-2xl shadow-sm border-l-4 border-green-500'>
                                        <div className='flex items-center gap-3 mb-6'>
                                            <BriefcaseBusiness className='text-green-600'></BriefcaseBusiness>
                                            <h2 className='text-2xl text-black font-bold'>For HR Teams</h2>
                                        </div>
                                        <div className='space-y-5'>
                                            <div className='flex items-start gap-3'>
                                                <div className='w-7 h-7 bg-green-500 text-white rounded-full flex items-center justify-center text-xs font-bold'>
                                                    1
                                                </div>
                                                <div>
                                                    <p className='font-medium text-black'>Post Job</p>
                                                    <p className='text-sm'>
                                                        Define roles and AI screening criteria.
                                                    </p>
                                                </div>
                                            </div>
                                            <div className='flex items-start gap-3'>
                                                <div className='w-7 h-7 bg-green-500 text-white rounded-full flex items-center justify-center text-xs font-bold'>
                                                    2
                                                </div>
                                                <div>
                                                    <p className='font-medium text-black'>Review</p>
                                                    <p className='text-sm'>
                                                        AI scores and prioritizes top talent.
                                                    </p>
                                                </div>
                                            </div>
                                            <div className='flex items-start gap-3'>
                                                <div className='w-7 h-7 bg-green-500 text-white rounded-full flex items-center justify-center text-xs font-bold'>
                                                    3
                                                </div>
                                                <div>
                                                    <p className='font-medium text-black'>Hire</p>
                                                    <p className='text-sm'>
                                                        Seamless offer and onboarding workflow.
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </section>

                            <section id='about' className='scroll-mt-24 bg-purple-200 py-16 w-full'>
                                <div className='max-w-6xl mx-auto px-6'>
                                    <div className='grid grid-cols-1 md:grid-cols-3 gap-8 text-center'>
                                        <div className='px-6 py-6 border-r border-purple-300 last:border-none hover:-translate-y-1 hover:shadow-md transition duration-300'>
                                            <h3 className='text-lg font-semibold text-black mb-2'>
                                                Candidate
                                            </h3>
                                            <p>"Get matched with jobs that truly value your expertise through intelligent parsing."</p>
                                        </div>
                                        <div className='px-6 py-6 border-r border-purple-300 last:border-none hover:-translate-y-1 hover:shadow-md transition duration-300'>
                                            <h3 className='text-lg font-semibold text-black mb-2'>
                                                Recruiter
                                            </h3>
                                            <p>"Stop reading irrelevant CVs. Focus on interviewing top-scored talent immediately."</p>
                                        </div>
                                        <div className='px-6 py-6 border-r border-purple-300 last:border-none hover:-translate-y-1 hover:shadow-md transition duration-300'>
                                            <h3 className='text-lg font-semibold text-black mb-2'>
                                                Manager
                                            </h3>
                                            <p>"Build high-performing teams with data-driven hiring decisions and oversight."</p>
                                        </div>
                                    </div>
                                </div>
                            </section>

                            <section className='bg-white py-16 w-full'>
                                <div className='max-w-6xl mx-auto px-6'>
                                    <div className='bg-gradient-to-r from-[#0f172a] to-[#1e293b] 
                                                    rounded-3xl p-8 md:p-12 text-white shadow-lg relative overflow-hidden'>
                                        <div className='max-w-lg'>
                                            <h2 className='text-2xl md:text-3xl font-bold mb-3'>
                                                Visual Intelligence Showcase
                                            </h2>
                                            <p className='text-gray-300 text-sm mb-6'>
                                                Experience our AI CV Scoring in action. We don’t just search for
                                                keywords, we understand professional growth and skill proficiency.
                                            </p>
                                            <div className='space-y-4'>
                                                <div className='bg-white/10 backdrop-blur-md rounded-xl p-4 flex items-center justify-between'>
                                                    <div className='flex items-center gap-3'>
                                                        <div className='w-10 h-10 bg-purple-500 rounded-full flex items-center justify-center text-sm font-bold'>
                                                            JD
                                                        </div>
                                                        <div>
                                                            <p className='text-sm font-semibold'>Jone Doe</p>
                                                            <p className='text-xs text-gray-300'>Senior UX Designer</p>
                                                        </div>
                                                    </div>
                                                    <div className='flex items-center gap-2'>
                                                        <span className='text-green-400 font-bold'>98</span>
                                                        <div className='w-20 h-2 bg-white/20 rounded-full'>
                                                            <div className='w-[90%] h-2 bg-green-400 rounded-full'></div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className='bg-white/10 backdrop-blur-md rounded-xl p-4 flex items-center justify-between'>
                                                    <div className='flex items-center gap-3'>
                                                        <div className='w-10 h-10 bg-gray-500 rounded-full flex items-center justify-center text-sm font-bold'>
                                                            MS
                                                        </div>
                                                        <div>
                                                            <p className='text-sm font-semibold'>Mark Smith</p>
                                                            <p className='text-xs text-gray-300'>Junior Product Designer</p>
                                                        </div>
                                                    </div>
                                                    <div className='flex items-center gap-2'>
                                                        <span className='text-yellow-400 font-bold'>74</span>
                                                        <div className='w-20 h-2 bg-white/20 rounded-full'>
                                                            <div className='w-[70%] h-2 bg-yellow-400 rounded-full'></div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </section>

                            <section className='bg-white py-16 w-full'>
                                <div className='flex justify-center'>
                                    <h1 className='text-black font-bold text-2xl sm:text-3xl'>Mulai rekrutmen lebih cepat sekarang</h1>
                                </div>
                                <div className='flex justify-center pt-5'>
                                    <p className='text-sm text-gray-600'>Join hundreds of companies scaling their engineering and product teams with SRMS AI</p>
                                </div>
                                <div className='pt-10 flex justify-center gap-4'>
                                    <motion.button 
                                        whileHover={{ scale: 1.05 }}
                                        whileTap={{ scale: 0.95 }}
                                        className="bg-purple-500 text-white px-5 py-2 rounded w-full sm:w-auto
                                        border border-purple-500 hover:bg-transparent hover:text-purple-500 transition duration-300">
                                    Get Started
                                    </motion.button>
                                    <motion.button 
                                        whileHover={{ scale: 1.05 }}
                                        whileTap={{ scale: 0.95 }}
                                        className="border border-black text-black px-5 py-2 rounded w-full sm:w-auto
                                        hover:bg-black hover:text-white transition duration-300">
                                    Post a Job
                                    </motion.button>
                                </div>
                            </section>
                        </main>

                        <footer className="bg-gray-50 border-t py-10 sm:py-12 w-full">
                            <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
                                <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8'>
                                    <div className='text-center sm:text-left'>
                                        <h2 className='text-lg text-black font-semibold mb-2'>SRMS AI</h2>
                                        <p className='text-sm text-gray-500'>2026 Smart Recruitment Management System</p>
                                        <p className='text-sm text-gray-400 mt-1'>Joko Handoyo Iman Putro</p>
                                    </div>
                                    <div className='flex justify-center sm:justify-start lg:justify-center gap-10 sm:gap-12 text-center sm:text-left'>
                                        <div>
                                            <h3 className="text-sm font-semibold text-black mb-3">
                                                Company
                                            </h3>
                                            <ul className="space-y-2 text-sm text-gray-500">
                                                <li className="hover:text-purple-600 cursor-pointer">About</li>
                                                <li className="hover:text-purple-600 cursor-pointer">Contact Us</li>
                                            </ul>
                                        </div>

                                        <div>
                                            <h3 className="text-sm font-semibold text-black mb-3">
                                                Legal
                                            </h3>
                                            <ul className="space-y-2 text-sm text-gray-500">
                                                <li className="hover:text-purple-600 cursor-pointer">Privacy Policy</li>
                                                <li className="hover:text-purple-600 cursor-pointer">Terms of Service</li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="flex justify-center lg:justify-end gap-3">
                                        <button className="w-10 h-10 flex items-center justify-center rounded-full border hover:bg-gray-100 transition">
                                            <Earth></Earth>
                                        </button>
                                        <button className="w-10 h-10 flex items-center justify-center rounded-full border hover:bg-gray-100 transition">
                                            <Link2></Link2>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </footer>
                    </div>
                </div>
            </div>
        </>
    );
}
