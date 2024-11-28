import React, { useEffect, useState } from "react";
import { useAuth } from '../../AuthContext';
import { useTranslation } from "react-i18next";
import '../../i18n'
import { Link } from "react-router-dom";

const Header = () => {
    const { t, i18n } = useTranslation();
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const { user } = useAuth()
    const [username, setUsername] = useState('')
    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };
    const changelanguage = (lng) => {
        i18n.changeLanguage(lng)
    }

    const bgcolorfa = i18n.language === 'fa' ? 'bg-orange-700 text-white' : 'bg-orange-200 text-orange-700'
    const bgcoloren = i18n.language === 'en' ? 'bg-orange-700 text-white' : 'bg-orange-200 text-orange-700'

    useEffect(() => {
        if (user && user.username) {
            setUsername(user.username);
        } else {
            setUsername('Guest'); // مقدار پیش‌فرض
        }
    }, [user]);

    return (
        <header className="bg-orange-500 text-white" dir="ltr">
            {/* Container */}
            <div className="flex items-center justify-between p-4 max-w-screen-xl mx-auto">
                {/* لوگوی سایت */}
                <div className="flex items-center ">

                    <button className={`border-2 border-orange-700 ${bgcolorfa} w-6 `}
                        onClick={() => changelanguage('fa')}>fa</button>
                    <button className={`border-2 border-orange-700 ${bgcoloren} w-6`}
                        onClick={() => changelanguage('en')}>en</button>

                </div>

                {/* لینک‌ها (برای دسکتاپ) */}
                <nav className="hidden md:flex items-center space-x-6">
                    <Link
                        to="/"
                        className="text-sm hover:text-gray-200 transition duration-300"
                    >
                        {t('todos')}
                    </Link>
                    <Link
                        to="/charts"
                        className="text-sm hover:text-gray-200 transition duration-300"
                    >
                        {t('charts')}

                    </Link>
                    {/* <a
                        href="/planner"
                        className="text-sm hover:text-gray-200 transition duration-300"
                    >
                        {t('my_plan')}
                    </a> */}
                    <Link
                        to="/login"
                        className="text-sm hover:text-gray-200 transition duration-300"
                    >
                        {t('sign-oute')}
                    </Link>
                </nav>

                {/* پروفایل کاربر */}
                <div className="flex items-center space-x-3">
                    <span className="block text-sm">
                        {username}

                    </span>
                    <img
                        src="https://via.placeholder.com/40"
                        alt="Profile"
                        className="h-10 w-10 rounded-full border border-white"
                    />
                </div>

                {/* دکمه منوی موبایل */}
                <button
                    onClick={toggleMobileMenu}
                    className="block md:hidden text-white"
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M4 6h16M4 12h16m-7 6h7"
                        />
                    </svg>
                </button>
            </div>

            {/* منوی کشویی موبایل */}
            {isMobileMenuOpen && (
                <nav className="md:hidden bg-orange-300  text-white p-4">
                    <Link
                        to="/"
                        className="block py-2 hover:bg-orange-500 rounded  "
                    >
                        {t('todos')}
                    </Link>
                    <Link
                        to="/charts"
                        className="block py-2 hover:hover:bg-orange-500 rounded"
                    >
                        {t('charts')}
                    </Link>
                    {/* <a
                        href="/planner"
                        className="block py-2 hover:hover:bg-orange-500 rounded"
                    >
                        {t('my_plan')}
                    </a> */}
                    <Link
                        to="/login"
                        className="block py-2 hover:hover:bg-orange-500 rounded"
                    >
                        {t('sign-oute')}
                    </Link>
                </nav>
            )}
        </header>
    );
};

export default Header;
