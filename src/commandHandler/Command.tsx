export class Command {
    name: string;
    args: number;
    callback: any; // Ran on command execution

    // What is displayed when command 'help <command>' is ran
    help: string;
    constructor(name: string, args: number, callback: any, help: string) {
        this.name = name;
        this.args = args;
        this.callback = callback;

        this.help = help;
    }
}