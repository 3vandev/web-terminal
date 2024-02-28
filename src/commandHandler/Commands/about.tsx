import { Command } from "../Command";
import { addCommand, commands } from "../commands";

addCommand(new Command("about", 2, (args:string[]) => {
    return (
        <div>
            <h1 align="center">
            <img src="https://readme-typing-svg.herokuapp.com/?font=Roboto+Mono&color=F7F7F7&size=35&center=true&vCenter=true&width=500&height=70&duration=4000&lines=Hi+There!+👋;+I'm+Evan!;" />
            </h1>

            <h3 align="center"> A Game Developer from The UK</h3>

            <div align="center">

            🧑‍💻 I'm Currently working on a **2D Roguelike, Gravity Wrapper**
            
            📖 I'm currently learning **React JS**

            ⏰ Programming For 4 Years

            </div>


            <hr/>

            <h1 align="center">My Skills</h1>

            <h3 align="center">Languages</h3>
            <p align="center">
            <a href="https://skillicons.dev">
                <img src="https://skillicons.dev/icons?i=cs,python,js,html,css,ts" />
            </a>
            </p>

            <h3 align="center">Frameworks</h3>

            <p align="center">
            <a href="https://skillicons.dev">
                <img src="https://skillicons.dev/icons?i=react,nodejs,vite,unity,godot" />
            </a>
            </p>

            <h3 align="center">Other Skills</h3>

            <p align="center">
            <a href="https://skillicons.dev">
                <img src="https://skillicons.dev/icons?i=git,linux,bash,github" />
            </a>
            </p>

            <div align="center"> 
            <a href="mailto: 3vandev@proton.me">
                <img src="https://img.shields.io/badge/Gmail-333333?style=for-the-badge&logo=gmail&logoColor=red" />
            </a>
            </div>

            <hr/>
        </div>
    )
}, "about me"),)