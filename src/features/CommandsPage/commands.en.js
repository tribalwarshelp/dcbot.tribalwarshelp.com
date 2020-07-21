const commandsForAll = [
  {
    command: "tw!help",
    commandSyntax: "tw!help",
    description: "This command shows you all available commands.",
    example: "tw!help",
  },
  {
    command: "tw!tribe topatt",
    commandSyntax:
      "tw!tribe topatt [server] [page] [tribe_id1] [tribe_id2] ... [tribe_idn]",
    description:
      "This command generates player list from selected tribes ordered by ODA.",
    example: "tw!tribe topatt pl143 1 975 170",
  },
  {
    command: "tw!tribe topdef",
    commandSyntax:
      "tw!tribe topdef [server] [page] [tribe_id1] [tribe_id2] ... [tribe_idn]",
    description:
      "This command generates player list from selected tribes ordered by ODD.",
    example: "tw!tribe topdef pl143 1 975 170",
  },
  {
    command: "tw!tribe topsupp",
    commandSyntax:
      "tw!tribe topsupp [server] [page] [tribe_id1] [tribe_id2] ... [tribe_idn]",
    description:
      "This command generates player list from selected tribes ordered by ODS.",
    example: "tw!tribe topsupp pl143 1 975 170",
  },
  {
    command: "tw!tribe toptotal",
    commandSyntax:
      "tw!tribe toptotal [server] [page] [tribe_id1] [tribe_id2] ... [tribe_idn]",
    description:
      "This command generates player list from selected tribes ordered by OD.",
    example: "tw!tribe toptotal pl143 1 975 170",
  },
  {
    command: "tw!tribe toppoints",
    commandSyntax:
      "tw!tribe toppoints [server] [page] [tribe_id1] [tribe_id2] ... [tribe_idn]",
    description:
      "This command generates player list from selected tribes ordered by points.",
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
      "This command shows you a list of groups created by this guild.",
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
    description: "This command shows a list of observed tribes by this group.",
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
    command: " tw!changelanguage",
    commandSyntax: " tw!changelanguage [en | pl]",
    description: "This command changes bot language.",
    example: "tw!changelanguage en",
  },
  {
    command: " tw!showselfconquers",
    commandSyntax: " tw!showselfconquers [group ID from tw!groups]",
    description:
      "This command enables/disables notifications about self-conquers between tribes in one group.",
    example: "tw!showselfconquers 1",
  },
];

export default {
  commandsForAll,
  adminCommands,
};
