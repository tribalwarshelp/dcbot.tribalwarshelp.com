const commandsForEveryone = [
  {
    command: "tw!help",
    commandSyntax: "tw!help",
    description: "This command shows you all available commands.",
    example: "tw!help",
  },
  {
    command: "tw!tribe topoda",
    commandSyntax:
      "tw!tribe topoda [server] [page] [tribe_id1] [tribe_id2] ... [tribe_idn]",
    description:
      "This command generates a player list from selected tribes ordered by ODA.",
    example: "tw!tribe topoda pl143 1 975 170",
  },
  {
    command: "tw!tribe topodd",
    commandSyntax:
      "tw!tribe topodd [server] [page] [tribe_id1] [tribe_id2] ... [tribe_idn]",
    description:
      "This command generates a player list from selected tribes ordered by ODD.",
    example: "tw!tribe topodd pl143 1 975 170",
  },
  {
    command: "tw!tribe topods",
    commandSyntax:
      "tw!tribe topods [server] [page] [tribe_id1] [tribe_id2] ... [tribe_idn]",
    description:
      "This command generates a player list from selected tribes ordered by ODS.",
    example: "tw!tribe topods pl143 1 975 170",
  },
  {
    command: "tw!tribe topod",
    commandSyntax:
      "tw!tribe topod [server] [page] [tribe_id1] [tribe_id2] ... [tribe_idn]",
    description:
      "This command generates a player list from selected tribes ordered by OD.",
    example: "tw!tribe topod pl143 1 975 170",
  },
  {
    command: "tw!tribe toppoints",
    commandSyntax:
      "tw!tribe toppoints [server] [page] [tribe_id1] [tribe_id2] ... [tribe_idn]",
    description:
      "This command generates a player list from selected tribes ordered by points.",
    example: "tw!tribe toppoints pl143 1 975 170",
  },
];

const adminCommands = [
  {
    command: "tw!addgroup",
    commandSyntax: "tw!addgroup",
    description: "This command adds a new observation group.",
    example: "tw!addgroup",
  },
  {
    command: "tw!groups",
    commandSyntax: "tw!addgroup",
    description:
      "This command shows you a list of groups created by this server.",
    example: "tw!addgroup",
  },
  {
    command: "tw!deletegroup",
    commandSyntax: "tw!deletegroup [group ID from tw!groups]",
    description: "This command deletes an observation group.",
    example: "tw!deletegroup 1",
  },
  {
    command: "tw!observe",
    commandSyntax: "tw!observe [group ID from tw!groups] [server] [tribe id]",
    description: "This command adds a tribe to the observation group.",
    example: "tw!observe 1 pl143 975 170",
  },
  {
    command: "tw!observations",
    commandSyntax: "tw!observations [group ID from tw!groups]",
    description:
      "This command shows a list of monitored tribes added to this group.",
    example: "tw!observations 1",
  },
  {
    command: "tw!deleteobservation",
    commandSyntax:
      "tw!deleteobservation [group ID from tw!groups] [id from tw!observations]",
    description: "This command removes a tribe from the observation group.",
    example: "tw!deleteobservation 1 pl143 975 170",
  },
  {
    command: "tw!conqueredvillages",
    commandSyntax: "tw!conqueredvillages [group ID from tw!groups]",
    description:
      "This command changes the channel on which notifications about conquered village will show. IMPORTANT! Run this command on the channel you want to display these notifications.",
    example: "tw!conqueredvillages 1",
  },
  {
    command: "tw!lostvillages",
    commandSyntax: "tw!lostvillages [group ID from tw!groups]",
    description:
      "This command changes the channel on which notifications about lost village will show. IMPORTANT! Run this command on the channel you want to display these notifications.",
    example: "tw!lostvillages 2",
  },
  {
    command: "tw!disableconqueredvillages",
    commandSyntax: "tw!disableconqueredvillages [group ID from tw!groups]",
    description: "This command disable notifications about conquered villages.",
    example: "tw!disableconqueredvillages 1",
  },
  {
    command: "tw!disablelostvillages",
    commandSyntax: "tw!disablelostvillages [group ID from tw!groups]",
    description: "This command disable notifications about lost villages.",
    example: "tw!disablelostvillages 1",
  },
  {
    command: " tw!showennobledbarbs",
    commandSyntax: " tw!showennobledbarbs [group ID from tw!groups]",
    description:
      "This command enables/disables notifications about ennobling barbarian villages.",
    example: "tw!showennobledbarbs 1",
  },
  {
    command: " tw!showinternals",
    commandSyntax: " tw!showinternals [group ID from tw!groups]",
    description:
      "This command enables/disables notifications about in-group/in-tribe conquering.",
    example: "tw!showinternals 1",
  },
  {
    command: " tw!changelanguage",
    commandSyntax: " tw!changelanguage [en | nl | pl]",
    description: "This command changes bot language.",
    example: "tw!changelanguage en",
  },
  {
    command: " tw!coordstranslation",
    commandSyntax: " tw!coordstranslation [server]",
    description: "This command enables coords translation feature.",
    example: "tw!coordstranslation pl153",
  },
  {
    command: " tw!disablecoordstranslation",
    commandSyntax: " tw!disablecoordstranslation",
    description: "This command disables coords translation feature.",
    example: "tw!disablecoordstranslation",
  },
];

export default {
  commandsForEveryone,
  adminCommands,
};
