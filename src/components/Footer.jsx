import React from "react"
import { LinkedinLogo, YoutubeLogo } from "@phosphor-icons/react"

export default function Footer() {
    return (
        <div className="bg-[#31363F] w-full mt-8 p-12 flex flex-col items-center">
            <img src="" alt="" />
            <p></p>
            <div className="m-5 flex gap-5">
                <a href="https://www.linkedin.com/in/adzhan-farhan-p/" target="_blank">
                    <LinkedinLogo size={28} color="#f6efef" />
                </a>
                <a href="https://www.youtube.com/@ylowcookies_" target="_blank">
                    <YoutubeLogo size={28} color="#f6efef" />
                </a>
            </div>
            <div>
                <p className="text-[white]">&copy; Adzhan Farhan P 2024. Hak Cipta Milik Pribadi</p>
            </div>
        </div>
    )
}