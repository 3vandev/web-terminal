import { Command } from "./Command";

export const commands:Command[] = []

export const addCommand = (command:Command) => { commands.push(command) }