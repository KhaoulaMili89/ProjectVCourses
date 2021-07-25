import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import DeleteIcon from '@material-ui/icons/Delete';
import { DeleteOutlined } from '@material-ui/icons';
import { CardHeader, IconButton } from '@material-ui/core';
import {useDispatch} from 'react-redux' ;
import { delete_course } from '../../actions/courseAction'


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
  const dispatch = useDispatch()
const handleDelete = (id) => {
  let conf = window.confirm("Are you sure to delete");
  if (conf) {
    dispatch(delete_course(id));
   // history.push("/admin-dashboard/users");
  }
};
  return (
    <Card className={classes.root} elevation={3}>
      <CardHeader  title = {course.Title}
      action={
        <IconButton onClick={() => {handleDelete(course._id)}}>
          <DeleteOutlined />
        </IconButton>  
        
      }
      />
        <CardContent>
        
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
        <CardActions>
        <Button size="small" color="primary">
          Modify
        </Button>
        
        
        
      </CardActions>
    </Card>
  );
}




