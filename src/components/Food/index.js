import React, { useState} from 'react';
import { CardActionArea, CardContent, Typography, CardMedia } from '@material-ui/core';
import Card from './styles';

const Food = ({ image, description }) => {
  const [raised, setRaised] = useState(false);
  return (
    <Card.Styled raised={raised} onMouseOut={() => setRaised(false)} onMouseOver={() => setRaised(true)}>
      <CardActionArea>
        <CardMedia image={`./${image}`} component="img" />
        <CardContent>
          <Typography variant="body2" color="textSecondary" component="p">
            {description}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card.Styled>
  );
};

export default Food;
