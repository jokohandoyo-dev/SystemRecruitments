import { Head, Link } from '@inertiajs/react';
import { Brain, Zap, BarChart3, Workflow } from "lucide-react";
import { useState } from "react";

export default function Welcome({ auth, laravelVersion, phpVersion }) {
    const [active, setActive] = useState("home");

    const navClass = (menu) =>
        `pb-1 transition ${
            active === menu
                ? "text-purple-600 border-b-2 border-purple-600"
                : "text-gray-600 hover:text-purple-600"
        }`;

    return (
        <>
            <Head title="Beranda" />
            <div className="bg-white-50 text-black/50 dark:bg-black dark:text-white/50">
                <div className="relative flex min-h-screen flex-col items-center justify-center selection:bg-[#FF2D20] selection:text-white">
                    <div className="relative w-full max-w-2xl px-6 lg:max-w-7xl">
                        <header className="w-full py-6 sticky top-0 z-50 bg-white shadow-sm">
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

                                            <Link
                                                href="#"
                                                className="bg-purple-600 text-white px-5 py-2 rounded-md font-semibold border border-purple-600
                                                hover:bg-transparent hover:text-purple-600 transition duration-300"
                                            >
                                                Get Started
                                            </Link>
                                        </>
                                    )}
                                </div>
                            </div>
                        </header>

                        <main className="mt-10">
                            <section id="home" className="grid md:grid-cols-2 gap-10 items-center">
                                <div className='pl-6'>
                                    <h1 className="text-4xl font-bold text-gray-900">
                                        Smart Recruitment with AI
                                    </h1>
                                    <p className="mt-4 text-gray-600">
                                        Sistem rekrutmen modern dengan AI CV Screening.
                                        Automate your hiring process and focus on what
                                        matters most human connection.
                                    </p>
                                    <div className="mt-6 flex gap-4">
                                        <button className="bg-purple-600 text-white px-5 py-2 rounded w-full sm:w-auto
                                        border border-purple-600 hover:bg-transparent hover:text-purple-600 transition duration-300">
                                        Find Jobs
                                        </button>
                                        <button className="border border-green-600 text-green-600 px-5 py-2 rounded w-full sm:w-auto
                                        hover:bg-green-600 hover:text-white transition duration-300">
                                        Post a Job
                                        </button>
                                    </div>
                                </div>

                                <div className="flex justify-end pr-6">
                                    <img src="/images/jobillustration.jpg" alt="Job Image" className="w-full h-auto max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg rounded-xl"/>
                                </div>
                            </section>

                            <section id="features" className='mt-16 bg-purple-100 py-16 w-full sm:px-6 lg:px-8'>
                                <div className='pt-5 text-2xl sm:text-3xl text-center text-black font-bold'>
                                    <h1>Powerfull Recruitment Tools</h1>
                                </div>
                                <div className='pt-1 text-sm text-center'>
                                    <p>
                                        Enterprise-grade features for modern hiring teams.
                                    </p>
                                </div>
                                <div className="max-w-6xl mx-auto px-4 mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                                    <div className="bg-white p-6 rounded-2xl shadow-md hover:shadow-lg transition">
                                        <Brain className="w-8 h-8 text-purple-600 mb-4" />
                                        <h3 className="font-bold text-lg text-black mb-2">AI CV Scoring</h3>
                                        <p className="text-sm text-black">
                                            Automated ranking based on skill relevan and experience patterns.
                                        </p>
                                    </div>
                                    <div className="bg-white p-6 rounded-2xl shadow-md hover:shadow-lg transition">
                                        <Zap className="w-8 h-8 text-green-600 mb-4" />
                                        <h3 className="font-bold text-lg text-black mb-2">Fast Screening</h3>
                                        <p className="text-sm text-black">
                                            Reduce time-to-hire by 60% with intelligent automated filtering.
                                        </p>
                                    </div>
                                    <div className="bg-white p-6 rounded-2xl shadow-md hover:shadow-lg transition">
                                        <BarChart3 className="w-8 h-8 text-purple-600 mb-4" />
                                        <h3 className="font-bold text-lg text-black mb-2">Dashboard Analytics</h3>
                                        <p className="text-sm text-black">
                                            Real-time insights into your recruitment funnel and performance.
                                        </p>
                                    </div>
                                    <div className="bg-white p-6 rounded-2xl shadow-md hover:shadow-lg transition">
                                        <Workflow className="w-8 h-8 text-green-600 mb-4" />
                                        <h3 className="font-bold text-lg text-black mb-2">End-to-End Hiring</h3>
                                        <p className="text-sm text-black">
                                            Manage the entire lifecycle from job posting to final onboarding.
                                        </p>
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
