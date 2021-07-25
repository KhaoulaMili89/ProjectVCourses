import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';



const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
});

export default function CoursesCard({course}) {
  const classes = useStyles();
  
  return (
    <Card className={classes.root} elevation={3}>
      
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {course.Title}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
           {course.Description}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
           {course.Content}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
          By {course.owner.firstname}
          </Typography>
        </CardContent>
       
    </Card>
  );
}




