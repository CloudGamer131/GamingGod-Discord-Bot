import { ActivityType } from "discord.js";
import chalk from "chalk";
import { statSync } from "fs";

export const name = "ready";
export const runOnce = true;
export const run = async (client, rootPath) => {
    client.user.setActivity("Humans.", {
        type: ActivityType.Watching
    });

    /*let allSlashCommands = 0;
    const slashCommandsTotalFiles = await directorySearch(`${rootPath}/Src/Interactions/SlashCommands`);
    await slashCommandsTotalFiles.forEach(cmdFile => {
        if (statSync(cmdFile).isDirectory()) return;
        const slashCmd = require(cmdFile);
        if (!slashCmd.name || slashCmd.ignore || !slashCmd.run) return;
        else allSlashCommands++
    });*/

    console.log(chalk.bold.green("[Client] ") + chalk.bold.blue(`Logged into ${client.user.tag}`));
    if (client.messageCommands.size > 0) console.log(chalk.bold.red("[MessageCommands] ") + chalk.bold.cyanBright(`Loaded ${client.messageCommands.size} MessageCommands with ${chalk.bold.white(`${client.messageCommands_Aliases.size} Aliases`)}.`));
    if (client.events.size > 0) console.log(chalk.bold.yellowBright("[Events] ") + chalk.bold.magenta(`Loaded ${client.events.size} Events.`));
    //if (client.buttonCommands.size > 0) console.log(chalk.bold.whiteBright("[ButtonCommands] ") + chalk.bold.greenBright(`Loaded ${client.buttonCommands.size} Buttons.`));
    //if (client.selectMenus.size > 0) console.log(chalk.bold.red("[SelectMenus] ") + chalk.bold.blueBright(`Loaded ${client.selectMenus.size} SelectMenus.`));
    //if (client.modalForms.size > 0) console.log(chalk.bold.cyanBright("[ModalForms] ") + chalk.bold.yellowBright(`Loaded ${client.modalForms.size} Modals.`));
    //if (allSlashCommands > 0) console.log(chalk.bold.magenta("[SlashCommands] ") + chalk.bold.white(`Loaded ${allSlashCommands} SlashCommands.`));
};