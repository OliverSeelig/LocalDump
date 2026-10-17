import { useState } from "react"
import "./HomePageHeader.css"

import { TbSunFilled } from "react-icons/tb";
import { HiMoon } from "react-icons/hi2";
export default function HomePageHeader() {
    const [theme, setTheme] = useState(false)

    return <header className="header-container">
        <h1 className="title">Local Dump</h1>

        <div className="box-options">
            <button
                type="button"
                className={`button-theme ${theme ? "dark" : "light"}`}
                onClick={() => setTheme((prev) => !prev)}
                aria-label={theme ? "Light theme" : "Dark theme"}
                aria-pressed={theme}
            >
                {theme ? (
                    <TbSunFilled className="button-theme-icon" />
                ) : (
                    <HiMoon className="button-theme-dark-icon" />
                )}
            </button>
        </div>
    </header>
}