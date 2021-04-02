import React from 'react';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import Testimonial from './Testimonial';
import Footer from './Footer';

const useStyles = makeStyles({
  violetTheme: {
    backgroundColor: 'hsl(263, 55%, 52%)',
    color: 'hsl(0, 0%, 100%)',
  },
  grayTheme: {
    backgroundColor: 'hsl(217, 19%, 35%)',
    color: 'hsl(0, 0%, 100%)',
  },
  whiteTheme: {
    backgroundColor: 'hsl(0, 0%, 100%)',
    color: 'hsl(217, 19%, 35%)',
  },
  blackTheme: {
    backgroundColor: 'hsl(219, 29%, 14%)',
    color: 'hsl(0, 0%, 100%)',
  },
});

function App() {
  const classes = useStyles();
  return (
    <div>
      <Grid container spacing={3}>
        <Grid container item spacing={3} xs={0} md={9}>
          <Grid item xs={12} md={8}>
            <Testimonial
              image='image-daniel.jpg'
              name='Daniel Clifford'
              status='Verified Graduate'
              title='I received a job offer mid-course, and the subjects I learned were current, if not more so,
                in the company I joined. I honestly feel I got every penny’s worth.'
              content='“ I was an EMT for many years before I joined the bootcamp. I’ve been looking to make a
                transition and have heard some people who had an amazing experience here. I signed up
                for the free intro course and found it incredibly fun! I enrolled shortly thereafter.
                The next 12 weeks was the best - and most grueling - time of my life. Since completing
                the course, I’ve successfully switched careers, working as a Software Engineer at a VR startup. ”'
              style={classes.violetTheme}
              media='true'
            />
          </Grid>
          <Grid item xs={12} md={4}>
            <Testimonial
              image='image-jonathan.jpg'
              name='Jonathan Walters'
              status='Verified Graduate'
              title='The team was very supportive and kept me motivated'
              content='“ I started as a total newbie with virtually no coding skills. I now work as a mobile engineer
                for a big company. This was one of the best investments I’ve made in myself. ”'
              style={classes.grayTheme}
            />
          </Grid>
          <Grid item xs={12} md={4}>
            <Testimonial
              image='image-jeanette.jpg'
              name='Jeanette Harmon'
              status='Verified Graduate'
              title='An overall wonderful and rewarding experience'
              content='“ Thank you for the wonderful experience! I now have a job I really enjoy, and make a good living
                while doing something I love. ”'
              style={classes.whiteTheme}
            />
          </Grid>
          <Grid item xs={12} md={8}>
            <Testimonial
              image='image-patrick.jpg'
              name='Patrick Abrams'
              status='Verified Graduate'
              title='Awesome teaching support from TAs who did the bootcamp themselves. Getting guidance from them and
                learning from their experiences was easy.'
              content='“ The staff seem genuinely concerned about my progress which I find really refreshing. The program
                gave me the confidence necessary to be able to go out in the world and present myself as a capable
                junior developer. The standard is above the rest. You will get the personal attention you need from
                an incredible community of smart and amazing people. ”'
              style={classes.blackTheme}
            />
          </Grid>
        </Grid>
        <Grid item xs={12} md={3}>
          <Testimonial
            image='image-kira.jpg'
            name='Kira Whittle'
            status='Verified Graduate'
            title='Such a life-changing experience. Highly recommended!'
            content='“ Before joining the bootcamp, I’ve never written a line of code. I needed some structure from
              professionals who can help me learn programming step by step. I was encouraged to enroll by a former
              student of theirs who can only say wonderful things about the program. The entire curriculum and staff
              did not disappoint. They were very hands-on and I never had to wait long for assistance. The agile team
              project, in particular, was outstanding. It took my learning to the next level in a way that no tutorial
              could ever have. In fact, I’ve often referred to it during interviews as an example of my developent
              experience. It certainly helped me land a job as a full-stack developer after receiving multiple offers.
              100% recommend! ”'
            style={classes.whiteTheme}
          />
        </Grid>
      </Grid>
      <Footer />
    </div>
  );
}

export default App;
