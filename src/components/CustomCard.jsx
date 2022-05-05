import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

export default function CustomCard(props) {
    const {
        component: Component,
        title,
        body,
        state,
        setState,

    } = props;
  return (
    <Card sx={{ width: 275 }}>
      <CardContent>
        <Typography sx={{ fontSize: 20 }} color="text.secondary" gutterBottom>
          {title}
        </Typography>
        <Typography variant="p" component="p">
          {body}
        </Typography>
      </CardContent>
      <CardActions>
        <Component
        state={state}
        setState={setState}
        />
      </CardActions>
    </Card>
  );
}
