import React from 'react';
import PropTypes from 'prop-types';

import { Card, CardHeader, CardContent, Typography } from '@material-ui/core';

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

Command.propTypes = {
  command: PropTypes.string.isRequired,
  commandSyntax: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  example: PropTypes.string.isRequired,
};

export default Command;
