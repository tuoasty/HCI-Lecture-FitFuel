import {Link} from "react-router";

export default function Footer() {
    return (
        <footer className="bg-teal-800 text-white py-12 p-12">
            <div className="container grid grid-cols-1 md:grid-cols-4 gap-8">
                <div className="space-y-4">
                    <h3 className="text-lg font-bold">FITFUEL</h3>
                    <p className="text-sm text-teal-100">
                        Personalized meal planning application to help you achieve your health and nutrition goals.
                    </p>
                </div>
                <div>
                    <h4 className="font-medium mb-4">Quick Links</h4>
                    <ul className="space-y-2 text-sm text-teal-100">
                        <li>
                            <Link to="/" className="hover:text-white">
                                Home
                            </Link>
                        </li>
                        <li>
                            <Link to="/profile" className="hover:text-white">
                                Profile
                            </Link>
                        </li>
                        <li>
                            <Link to="/bmi" className="hover:text-white">
                                BMI Calculator
                            </Link>
                        </li>
                        <li>
                            <Link to="/diet" className="hover:text-white">
                                Diet Plans
                            </Link>
                        </li>
                    </ul>
                </div>
                <div>
                    <h4 className="font-medium mb-4">Resources</h4>
                    <ul className="space-y-2 text-sm text-teal-100">
                        <li>
                            <Link to="/recipes" className="hover:text-white">
                                Recipes
                            </Link>
                        </li>
                        <li>
                            <Link to="/learn" className="hover:text-white">
                                Nutrition Articles
                            </Link>
                        </li>
                        <li>
                            <Link to="/faq" className="hover:text-white">
                                FAQs
                            </Link>
                        </li>
                    </ul>
                </div>
                <div>
                    <h4 className="font-medium mb-4">Contact</h4>
                    <ul className="space-y-2 text-sm text-teal-100">
                        <li>Email: info@fitfuel.com</li>
                        <li>Phone: (123) 456-7890</li>
                        <li>
                            <div className="flex gap-4 mt-4">
                                <Link to="#" className="hover:text-white">
                                    <span className="sr-only">Twitter</span>
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="24"
                                        height="24"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        className="h-5 w-5"
                                    >
                                        <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
                                    </svg>
                                </Link>
                                <Link to="#" className="hover:text-white">
                                    <span className="sr-only">Instagram</span>
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="24"
                                        height="24"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        className="h-5 w-5"
                                    >
                                        <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                                        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                                        <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line>
                                    </svg>
                                </Link>
                                <Link to="#" className="hover:text-white">
                                    <span className="sr-only">Facebook</span>
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="24"
                                        height="24"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        className="h-5 w-5"
                                    >
                                        <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                                    </svg>
                                </Link>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="container mt-8 pt-8 border-t border-teal-700">
                <p className="text-sm text-teal-100 text-center">© {new Date().getFullYear()} FitFuel. All rights reserved.</p>
            </div>
        </footer>
    )
}

