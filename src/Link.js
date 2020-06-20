import React, {useRef} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    root: {
      
    },
    line :{
        border: '2px solid #000',
        margin: 0
    }
  }));
  
  function Link(props) {
    const classes = useStyles();
    const { label } = props;
    const linkRef = useRef(null); 

    return (
      <div className={classes.root} ref={linkRef}>
        <hr className={classes.line}/>
        <Typography>{label}</Typography>
        <hr className={classes.line}/>
      </div>
    );
  }
  
  export default Link;