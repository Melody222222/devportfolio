import { Component } from "react"
import Navbar from "./navbar"

export default ({ children }) => (
    <div className="content">
        <Navbar />
        {children}
        <style jsx global>
            {`
            .content{
               background: rgb(0, 0 ,0);
                   height: 100%;
            }
            `}
        </style>
    </div>
)