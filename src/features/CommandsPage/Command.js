import React from "react";

import { Card, CardHeader, CardContent, Typography } from "@material-ui/core";

function Command({ command, commandSyntax, description, example }) {
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
}

export default Command;
