import React from 'react';
import { Card, CardActionArea, CardContent, Typography, CardMedia } from '@material-ui/core';

const Food = ({ image, description }) => {
  return (
    <Card>
      <CardActionArea>
        <CardMedia image={ `./${image}` } component="img" />
        <CardContent>
          <Typography variant="body2" color="textSecondary" component="p">
            {description}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default Food;
