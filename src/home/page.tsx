import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Utensils, Calculator, BookOpen, User } from "lucide-react"
import {Link} from "react-router";

export default function Home() {
    return (
        <div className="flex flex-col min-h-screen p-12">
            <section className="relative bg-teal-50 overflow-hidden p-12">
                <div className="absolute inset-0 bg-[url('/placeholder.svg')] opacity-10"></div>
                <div className="container relative py-20 md:py-32 flex flex-col md:flex-row items-center">
                    <div className="md:w-1/2 space-y-6 text-center md:text-left">
                        <div className="inline-block p-2 bg-teal-100 rounded-lg mb-4">
                            <div className="w-12 h-12 bg-teal-800 rounded-lg flex items-center justify-center">
                                <svg viewBox="0 0 24 24" className="w-6 h-6 text-white" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M12 2L4 6V12C4 15.31 7.58 20 12 22C16.42 20 20 15.31 20 12V6L12 2Z"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    ></path>
                                    <path
                                        d="M12 11C13.1046 11 14 10.1046 14 9C14 7.89543 13.1046 7 12 7C10.8954 7 10 7.89543 10 9C10 10.1046 10.8954 11 12 11Z"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    ></path>
                                </svg>
                            </div>
                        </div>
                        <h1 className="text-4xl md:text-6xl font-bold text-teal-800">FITFUEL</h1>
                        <p className="text-xl md:text-2xl text-teal-700">PERSONALIZED MEAL PLANNING APPLICATION</p>
                        <p className="text-teal-600 max-w-md">
                            Achieve your health and nutrition goals with personalized meal plans tailored to your body and
                            preferences.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                            <Button className="bg-white text-teal-800 hover:bg-teal-100 border border-teal-200">
                                FUEL YOUR BEST SELF
                            </Button>
                            <Button className="bg-teal-800 text-white hover:bg-teal-700">START YOUR JOURNEY</Button>
                        </div>
                    </div>
                    <div className="md:w-1/2 mt-12 md:mt-0">
                        <img
                            src="/placeholder.svg?height=500&width=500"
                            alt="Person using FitFuel app"
                            width={500}
                            height={500}
                            className="object-contain"
                        />
                    </div>
                </div>
            </section>

            <section className="py-20 bg-white p-12">
                <div className="container">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-bold text-teal-800">Key Features</h2>
                        <div className="w-24 h-1 bg-teal-500 mx-auto mt-4"></div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        <Link to="/profile">
                            <Card className="h-full hover:shadow-lg transition-shadow">
                                <CardContent className="p-6 flex flex-col items-center text-center">
                                    <div className="w-12 h-12 bg-teal-100 rounded-full flex items-center justify-center mb-4">
                                        <User className="h-6 w-6 text-teal-800" />
                                    </div>
                                    <h3 className="text-lg font-semibold text-teal-800 mb-2">User Profile</h3>
                                    <p className="text-teal-600 text-sm">
                                        Store your personal details, preferences, and track your progress over time.
                                    </p>
                                </CardContent>
                            </Card>
                        </Link>

                        <Link to="/bmi">
                            <Card className="h-full hover:shadow-lg transition-shadow">
                                <CardContent className="p-6 flex flex-col items-center text-center">
                                    <div className="w-12 h-12 bg-teal-100 rounded-full flex items-center justify-center mb-4">
                                        <Calculator className="h-6 w-6 text-teal-800" />
                                    </div>
                                    <h3 className="text-lg font-semibold text-teal-800 mb-2">BMI Calculator</h3>
                                    <p className="text-teal-600 text-sm">
                                        Calculate your Body Mass Index and get insights about your health status.
                                    </p>
                                </CardContent>
                            </Card>
                        </Link>

                        <Link to="/diet">
                            <Card className="h-full hover:shadow-lg transition-shadow">
                                <CardContent className="p-6 flex flex-col items-center text-center">
                                    <div className="w-12 h-12 bg-teal-100 rounded-full flex items-center justify-center mb-4">
                                        <Utensils className="h-6 w-6 text-teal-800" />
                                    </div>
                                    <h3 className="text-lg font-semibold text-teal-800 mb-2">Diet Plans</h3>
                                    <p className="text-teal-600 text-sm">
                                        Get personalized meal plans based on your BMI, activity level, and preferences.
                                    </p>
                                </CardContent>
                            </Card>
                        </Link>

                        <Link to="/recipes">
                            <Card className="h-full hover:shadow-lg transition-shadow">
                                <CardContent className="p-6 flex flex-col items-center text-center">
                                    <div className="w-12 h-12 bg-teal-100 rounded-full flex items-center justify-center mb-4">
                                        <BookOpen className="h-6 w-6 text-teal-800" />
                                    </div>
                                    <h3 className="text-lg font-semibold text-teal-800 mb-2">Recipes & Learning</h3>
                                    <p className="text-teal-600 text-sm">
                                        Explore our database of healthy recipes and educational nutrition content.
                                    </p>
                                </CardContent>
                            </Card>
                        </Link>
                    </div>
                </div>
            </section>

            <section className="py-20 bg-teal-50 p-12">
                <div className="container">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                        <div>
                            <h2 className="text-3xl font-bold text-teal-800 mb-6">Personalized Nutrition Plans</h2>
                            <p className="text-teal-700 mb-6">
                                Our advanced algorithm creates custom meal plans that match your body type, fitness goals, and food
                                preferences. Whether you're looking to lose weight, gain muscle, or maintain a balanced diet, FitFuel
                                provides the guidance you need.
                            </p>
                            <ul className="space-y-3">
                                {[
                                    "Tailored to your BMI and health status",
                                    "Adjusts for dietary restrictions",
                                    "Balanced macronutrient distribution",
                                    "Variety of delicious recipes",
                                ].map((item, i) => (
                                    <li key={i} className="flex items-center gap-3 text-teal-700">
                                        <svg className="h-5 w-5 text-teal-500" viewBox="0 0 20 20" fill="currentColor">
                                            <path
                                                fillRule="evenodd"
                                                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                                clipRule="evenodd"
                                            />
                                        </svg>
                                        {item}
                                    </li>
                                ))}
                            </ul>
                            <Button className="mt-8 bg-teal-800 text-white hover:bg-teal-700">Get Your Plan</Button>
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                            <img
                                src="/placeholder.svg?height=250&width=250"
                                alt="Healthy meal"
                                width={250}
                                height={250}
                                className="rounded-lg object-cover w-full h-full"
                            />
                            <img
                                src="/placeholder.svg?height=250&width=250"
                                alt="Healthy meal"
                                width={250}
                                height={250}
                                className="rounded-lg object-cover w-full h-full"
                            />
                            <img
                                src="/placeholder.svg?height=250&width=250"
                                alt="Healthy meal"
                                width={250}
                                height={250}
                                className="rounded-lg object-cover w-full h-full"
                            />
                            <img
                                src="/placeholder.svg?height=250&width=250"
                                alt="Healthy meal"
                                width={250}
                                height={250}
                                className="rounded-lg object-cover w-full h-full"
                            />
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-20 bg-white p-12">
                <div className="container">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold text-teal-800">Weight Loss</h2>
                        <p className="text-teal-600 mt-2">Weight tracker to help monitor progress</p>
                    </div>
                    <div className="flex justify-center">
                        <div className="w-full max-w-3xl">
                            <img
                                src="/placeholder.svg?height=400&width=800"
                                alt="Weight loss progress chart"
                                width={800}
                                height={400}
                                className="rounded-lg shadow-lg"
                            />
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-16 bg-teal-800 text-white p-12">
                <div className="container text-center">
                    <h2 className="text-3xl font-bold mb-6">Ready to Transform Your Diet?</h2>
                    <p className="max-w-2xl mx-auto mb-8">
                        Join thousands of users who have improved their health and nutrition with FitFuel's personalized approach.
                    </p>
                    <Button className="bg-white text-teal-800 hover:bg-teal-100">START YOUR JOURNEY TODAY</Button>
                </div>
            </section>
        </div>
    )
}

