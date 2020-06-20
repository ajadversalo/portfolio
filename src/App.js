import React from 'react';
import './App.css';
import { makeStyles } from '@material-ui/core/styles';
import vancouver from './img/vancouver.png';
import Link from './Link';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    height: 'calc(100vh - 64px)',
    background: '#FFF'
  },
  content: {
    maxWidth: '1200px',
    backgroundColor: 'transparent',
    margin: '0 auto',
    height: '100%',
    paddingTop: '3rem',
    position: 'relative',
    minWidth: '375px',
    padding: '1rem'
  },
  navbar: {
    display: 'flex',
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between'
  },
  ul :{
    display: 'flex',
    flexDirection: 'row',
    listStyleType: 'none',
    width: '350px',
    justifyContent: 'space-around'
  },
  li: {
    fontWeight: '600',
    '&:hover':{
      textDecoration: 'underline',
      textDecorationStyle: 'solid',
    }
  },
  intro: {
    width: '400px',
    fontSize: '1.5rem',
    paddingTop: '8rem'
  },
  background :{
    width: '100%',
    position: 'absolute',
    bottom: 0
  },
  img :{
    width: '70%',
    float: 'right'
  },
  logo: {
    backgroundColor: '#4f6d7a'    
  },
  logoText: {
    color: '#FFF',
    padding: '2px 7px 0 7px',
    margin: 0
  }
}));

function App() {

  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div className={classes.content}>
        <div className={classes.navbar}>
          <div className={classes.logo}>
            <h1 className={classes.logoText}>AJA</h1>
          </div>
          {/*
          <ul className={classes.ul}>
            <li className={classes.li}>My Work</li>
            <li className={classes.li}>Skills</li>
            <li className={classes.li}>About</li>
            <li className={classes.li}>Contact</li>
          </ul>
          */}
        <div className={classes.ul}>
          <Link label={'Projects'}/>
          <Link label={'My Work'}/>
          <Link label={'About'}/>
          <Link label={'Contact'}/>
        </div>
        </div>
        <div className={classes.intro}>
          <h1>Hi i'm AJ.</h1>
          <h1>I'm a Full-stack developer based in Vancouver, British Columbia.</h1>
        </div>
        <div className={classes.background}>
          <img className={classes.img} src={vancouver} alt='background'/>
        </div>
      </div>  
    </div>
  );
}

export default App;
