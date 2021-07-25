import React,{useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {Modal,Button,Icon} from '@material-ui/core';
import {useDispatch,useSelector} from 'react-redux';
import { add_course } from '../../actions/courseAction';

function rand() {
  return Math.round(Math.random() * 20) - 10;
}

function getModalStyle() {
  const top = 50 + rand();
  const left = 50 + rand();

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

const useStyles = makeStyles((theme) => ({
  paper: {
    position: 'absolute',
    width: 400,
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

export default function SimpleModal() {
  const classes = useStyles();
  // getModalStyle is not a pure function, we roll the style only on the first render
  const [modalStyle] = React.useState(getModalStyle);
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const dispatch = useDispatch()
  const [input, setInput] = useState(
    {
      Title:'',
      Description:'',
      Content:'',
    }
  )
  const id = useSelector(state => state.authReducer.user._id)
  const handleChange = (e) => {
    setInput({...input,[e.target.name]:e.target.value});
  }
  
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(add_course(input,id));
    handleClose();
  }
  
  return (
    <div>
      <button type="button" onClick={handleOpen} variant="contained"
        color="primary"
        className={classes.button}
        endIcon={<Icon>Add</Icon>}>
        Add Course
      </button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        
    <div style={modalStyle} className={classes.paper}>
     
          <input type='text' placeholder='Title' name='Title' onChange={handleChange}/><br/>
          <input type='text' placeholder='Description' name='Description' onChange={handleChange}/><br/>
          <input type='text' placeholder='Content' name='Content' onChange={handleChange}/><br/>
          <Button type='submit' onClick={handleSubmit} variant="contained" color="secondary">Add</Button>
    </div>
    </Modal>
    </div>
  );
}
 