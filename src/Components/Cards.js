import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';

const useStyles = makeStyles({
  root: {
    maxWidth: 220,
    height: 570,
    backgroundColor:"#e3e3d3",
    cursor:"pointer",

  }
});


const Cards = (props) => {
  const classes = useStyles();
    return (
     <div>
        <Card className={classes.root}>
     
     <CardContent>
     <div className="card-content">
         <div className="context">
         {props.children}
        </div>
     </div>
     </CardContent>
     
     </Card>
     </div>
    );
}

export default Cards;