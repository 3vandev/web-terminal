import { Command } from "./Command";

export const commands:Command[] = [
    new Command("test", 2, (args:string[]) => {
        return "Testing command ran with " + args;
    }, "prints all args and their values")
]

commands.push(new Command("help", 0, (args:string[]) => {
    if(args.length === 0) {
        let output = "";

        commands.forEach(command => {
            output += `${command.name}: ${command.help}\n`
        });

        return output
    }
    else {
        const commandSearch = args[0];

        const commandExists = () => {

            for (const cmd of commands) {
                if (cmd.name === commandSearch) {
                    return cmd.help
                }
            }
            return false;
        }

        if(commandExists() === false) {
            return `help: command ${commandSearch} not found`
        }
        else {
            return commandExists()
        }
    }
}, ""))