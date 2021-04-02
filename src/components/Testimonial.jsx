import React from 'react';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardContent';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  root: {
    fontSize: '15px',
    fontWeight: 500,
  },
  title: {
    fontSize: '18px',
    fontWeight: 600,
    marginBottom: '10px'
  },
  status: {
    opacity: '50%',
  },
  review: {
    opacity: '70%',
  },
});

function Testimonial(props) {
  const classes = useStyles();
  const imagePath = 'images/' + props.image;

  return (
    <Card className={classes.root}>
      <CardHeader
        className={props.style}
        avatar={
          <Avatar aria-label='avatar' src={imagePath} alt='avatar'/>
        }
        titleTypographyProps={{variant:'inherit' }}
        title={props.name}
        subheader={
          <Typography className={classes.status} variant='inherit'>
            {props.status}
          </Typography>
        }
      />
      <CardContent className={props.style}>
        <CardMedia
          className='quote'
          src={props.media ? 'images/bg-pattern-quotation.svg' : null}
          component='img'
        />
        <div className={classes.title}>{props.title}</div>
        <div className={classes.review}>{props.content}</div>
      </CardContent>
    </Card>
  );
}

export default Testimonial;
