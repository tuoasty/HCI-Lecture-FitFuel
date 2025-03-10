import {StrictMode} from 'react'
import {createRoot} from 'react-dom/client'
import './index.css'
import {BrowserRouter, Route, Routes} from "react-router";
import Footer from "@/components/footer.tsx";
import Navbar from "@/components/navbar.tsx";
import Home from "@/home/page.tsx";
import BMIPage from "@/bmi/page.tsx";
import DietPage from "@/diet/page.tsx";
import LearnPage from "@/learn/page.tsx";
import ProfilePage from "@/profile/page.tsx";
import RecipesPage from "@/recipes/page.tsx";

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <BrowserRouter>
            <div className="flex min-h-screen flex-col">
                <Navbar/>
                <Routes>
                    <Route path={"/"} element={<Home/>}/>
                    <Route path={"/bmi"} element={<BMIPage/>}/>
                    <Route path={"/diet"} element={<DietPage/>}/>
                    <Route path={"/learn"} element={<LearnPage/>}/>
                    <Route path={"/profile"} element={<ProfilePage/>}/>
                    <Route path={"/recipes"} element={<RecipesPage/>}/>
                </Routes>
                <Footer/>
            </div>
        </BrowserRouter>
    </StrictMode>,
)
