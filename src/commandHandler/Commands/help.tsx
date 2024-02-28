import { Command } from "../Command";
import { addCommand, commands } from "../commands";

addCommand(new Command("help", 0, (args:string[]) => {
    if(args.length === 0) {
        let output = commands.map(command => <p>{command.name}: {command.help}</p>);

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
}, "displays a list of all commands and their functions"))