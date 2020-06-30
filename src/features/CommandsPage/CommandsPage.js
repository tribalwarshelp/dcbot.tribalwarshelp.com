import React from "react";
import translations from "./translations";
import commands from "./commands";

import { Container, Typography, Grid, Box } from "@material-ui/core";
import Layout from "@components/Layout/Layout";
import SEO from "@components/SEO";
import Command from "./Command";

const CommandsPage = ({ location, pageContext }) => {
  const t = translations[pageContext.langKey];
  const c = commands[pageContext.langKey];

  return (
    <Layout lang={pageContext.langKey}>
      <SEO
        title={t.title}
        location={location.pathname}
        description={t.description}
        lang={pageContext.langKey}
      />
      <Container>
        <Box mb={3} component="section">
          <Typography variant="h2" component="h1" align="center" gutterBottom>
            {t.commandsForAllSection.title}
          </Typography>
          <Grid container spacing={2}>
            {c.commandsForAll.map(cmd => (
              <Grid key={cmd.command} item xs={12} sm={6}>
                <Command {...cmd} />
              </Grid>
            ))}
          </Grid>
        </Box>
        <section>
          <Typography variant="h2" component="h1" align="center" gutterBottom>
            {t.adminCommandsSection.title}
          </Typography>
          <Grid container spacing={2}>
            {c.adminCommands.map(cmd => (
              <Grid key={cmd.command} item xs={12} sm={6}>
                <Command {...cmd} />
              </Grid>
            ))}
          </Grid>
        </section>
      </Container>
    </Layout>
  );
};

export default CommandsPage;
