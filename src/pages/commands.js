import React from "react";

import {
  Container,
  Card,
  CardHeader,
  CardContent,
  Typography,
  Grid,
  Box,
} from "@material-ui/core";
import Layout from "@components/Layout/Layout";
import SEO from "@components/SEO";

const Command = ({ command, commandSyntax, description, example }) => {
  return (
    <Card>
      <CardHeader title={command} subheader={commandSyntax} />
      <CardContent>
        <Typography>
          {description}
          {example && (
            <>
              <br />
              <strong>Example</strong>: {example}
            </>
          )}
        </Typography>
      </CardContent>
    </Card>
  );
};

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
      "This command generates player list with the most ODA from selected tribes.",
    example: "tw!tribe topatt pl143 1 975 170",
  },
  {
    command: "tw!tribe topdef",
    commandSyntax:
      "tw!tribe topdef [server] [page] [tribe_id1] [tribe_id2] ... [tribe_idn]",
    description:
      "This command generates player list with the most ODD from selected tribes.",
    example: "tw!tribe topdef pl143 1 975 170",
  },
  {
    command: "tw!tribe topsupp",
    commandSyntax:
      "tw!tribe topsupp [server] [page] [tribe_id1] [tribe_id2] ... [tribe_idn]",
    description:
      "This command generates player list with the most ODS from selected tribes.",
    example: "tw!tribe topsupp pl143 1 975 170",
  },
  {
    command: "tw!tribe toptotal",
    commandSyntax:
      "tw!tribe toptotal [server] [page] [tribe_id1] [tribe_id2] ... [tribe_idn]",
    description:
      "This command generates player list with the most OD from selected tribes.",
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
    command: "tw!unobserve",
    commandSyntax:
      "tw!unobserve [group ID from tw!groups] [id from tw!observations]",
    description: "This command adds a tribe to the observation group.",
    example: "tw!unobserve 1 pl143 975 170",
  },
  {
    command: "tw!conqueredvillages",
    commandSyntax: "tw!conqueredvillages [group ID from tw!groups]",
    description:
      "This command changes the channel on which notifications about conquered village will show. IMPORTANT! Call this command on the channel you want to display these notifications.",
    example: "tw!conqueredvillages 1",
  },
  {
    command: "tw!lostvillages",
    commandSyntax: "tw!lostvillages [group ID from tw!groups]",
    description:
      "This command changes the channel on which notifications about lost village will show. IMPORTANT! Call this command on the channel you want to display these notifications.",
    example: "tw!lostvillages 2",
  },
  {
    command: "tw!unobserveconqueredvillages",
    commandSyntax: "tw!unobserveconqueredvillages [group ID from tw!groups]",
    description: "This command disable notifications about conquered villages.",
    example: "tw!unobserveconqueredvillages 1",
  },
  {
    command: "tw!unobservelostvillages",
    commandSyntax: "tw!unobservelostvillages [group ID from tw!groups]",
    description: "This command disable notifications about lost villages.",
    example: "tw!unobservelostvillages 1",
  },
];

const pageDescription =
  "List of commands offered by TWHelp Discord Bot with examples";

const CommandsPage = ({ location }) => {
  return (
    <Layout>
      <SEO
        title="Commands"
        location={location.pathname}
        description={pageDescription}
      />
      <Container>
        <Box mb={3} component="section">
          <Typography variant="h2" component="h1" align="center" gutterBottom>
            Commands for all guild members
          </Typography>
          <Grid container spacing="2">
            {commandsForAll.map(cmd => (
              <Grid item xs={12} sm={6}>
                <Command key={cmd.command} {...cmd} />
              </Grid>
            ))}
          </Grid>
        </Box>
        <section>
          <Typography variant="h2" component="h1" align="center" gutterBottom>
            Admin commands
          </Typography>
          <Grid container spacing="2">
            {adminCommands.map(cmd => (
              <Grid item xs={12} sm={6}>
                <Command key={cmd.command} {...cmd} />
              </Grid>
            ))}
          </Grid>
        </section>
      </Container>
    </Layout>
  );
};

export default CommandsPage;
