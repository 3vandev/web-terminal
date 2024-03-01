import { commands } from "./commands";

export const readCommand = (command: string) => {
    // Split the command up
    const splitCommand = (
        // Remove whitespace
        command.trim()

        // Split up into an array
        .split(" ")
    );

    // Name of the command
    const commandName: string = splitCommand[0]; // Changed index to 0

    // Remove the command name from the array of arguments
    splitCommand.shift();

    // Arguments of the command
    const commandArgs: string[] = splitCommand; // No need to use splice

    // Execution
    for (const cmd of commands) {
        if (cmd.name === commandName) {
          return cmd.callback(commandArgs);;
        }
    }

    return "bash: " + commandName + ": command not found"
};
