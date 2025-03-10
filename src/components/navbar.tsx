import { Button } from "@/components/ui/button"
import {Link} from "react-router";

export default function Navbar() {
    return (
        <header className="sticky top-0 z-50 w-full border-b bg-teal-50">
            <div className="container flex h-16 items-center justify-between">
                <Link to="/" className="flex items-center gap-2">
                    <div className="relative h-10 w-10">
                        <img src="/img.png" alt="FitFuel Logo" className="object-contain" />
                    </div>
                    <span className="text-xl font-bold text-teal-800">FITFUEL</span>
                </Link>
                <nav className="hidden md:flex items-center gap-6">
                    <Link to="/" className="text-sm font-medium text-teal-800 hover:text-teal-600">
                        HOME
                    </Link>
                    <Link to="/profile" className="text-sm font-medium text-teal-800 hover:text-teal-600">
                        PROFILE
                    </Link>
                    <Link to="/bmi" className="text-sm font-medium text-teal-800 hover:text-teal-600">
                        BMI
                    </Link>
                    <Link to="/diet" className="text-sm font-medium text-teal-800 hover:text-teal-600">
                        DIET
                    </Link>
                    <Link to="/recipes" className="text-sm font-medium text-teal-800 hover:text-teal-600">
                        RECIPES
                    </Link>
                    <Link to="/learn" className="text-sm font-medium text-teal-800 hover:text-teal-600">
                        LEARN
                    </Link>
                </nav>
                <div className="flex items-center gap-4">
                    <Button className="bg-white text-teal-800 hover:bg-teal-100">SIGN IN</Button>
                </div>
            </div>
        </header>
    )
}

