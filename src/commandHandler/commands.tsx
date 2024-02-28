import { Command } from "./Command";

export const commands:Command[] = [
    new Command("test", 2, (args:string[]) => {
        return "Testing command ran with " + args;
    }, "prints all args and their values")
]

export const addCommand = (command:Command) => { commands.push(command) }