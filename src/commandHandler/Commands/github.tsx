import { Command } from "../Command";
import { addCommand, commands } from "../commands";

addCommand(new Command("github", 2, (args:string[]) => {
    return <a href="https://github.com/3vandev">3vandev: Github</a>
}, "my github account!"))