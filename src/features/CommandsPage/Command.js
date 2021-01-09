import React from 'react';
import PropTypes from 'prop-types';

import { Card, CardHeader, CardContent, Typography } from '@material-ui/core';

function Command({
  command,
  commandSyntax,
  description,
  example,
  exampleText = '',
}) {
  return (
    <Card style={{ height: '100%' }}>
      <CardHeader title={command} subheader={commandSyntax} />
      <CardContent style={{ height: '100%' }}>
        <Typography>
          {description}
          {example && (
            <>
              <br />
              <strong>{exampleText}</strong>: {example}
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
