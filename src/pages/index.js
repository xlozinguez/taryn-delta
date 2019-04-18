import React, { useState } from 'react';
import {
  Grid,
  Stepper,
  Step,
  StepLabel,
  withStyles,
  Button,
  Card,
  CardHeader,
  Avatar,
  FormControl,
  InputLabel,
  Input,
  InputAdornment,
  CardMedia,
  CardActions,
  CardActionArea,
  Collapse,
  CardContent,
  Typography,
  IconButton,
  List,
  ListItem,
  ListItemText,
  Divider,
} from '@material-ui/core';
import {
  Add,
  Remove,
  Search,
  Timer,
  Payment,
  ShowChart
} from '@material-ui/icons';
import withRoot from '../withRoot';
import Layout from "../components/layout";
import SEO from "../components/seo";
import DentalHealthImg from '../images/dental-health.svg';
import firstPlanImg from '../images/theFirst.jpeg';
import secondPlanImg from '../images/theSecond.jpeg';
import thirdPlanImg from '../images/theThird.jpeg';
import happyTooth from '../images/happy-tooth.jpg';

const styles = theme => ({
  root: {
    flexGrow: 1,
  },
  stepper: {
    marginBottom: theme.spacing.unit * 5,
  },
  button: {
    marginRight: theme.spacing.unit,
  },
  instructions: {
    marginTop: theme.spacing.unit,
    marginBottom: theme.spacing.unit,
  },
  control: {
    padding: theme.spacing.unit * 2,
  },
  zipCard: {
    width: '75%',
    margin: '0 auto',
  },
  zipParagraph: {
    textAlign: 'center',
  },
  zipCardIcon: {
    height: 140,
    backgroundSize: 'contain'
  },
  zipCardActions: {
    flexDirection: 'row-reverse'
  },
  zipFormControl: {
    display: 'block',
    margin: '0 auto',
    width: 200,
    top: 15,
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: 200,
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  actions: {
    display: 'flex',
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  avatar: {
    width: 60,
    margin: 10,
    height: 70,
    overflow: 'visible',
  },
  happyToothIcon: {
    height: 250,
    backgroundSize: 'contain'
  },
  signUpCard: {
    width: '50%',
    margin: '0 auto',
    padding: theme.spacing.unit * 5,
  },
  signUpButton: {
    margin: '20px auto 0',
    display: 'flex'
  }
});

const data = [
  {
    name: 'Enhanced',
    type: 'PPO Plus Premiere',
    img: firstPlanImg,
    single: true,
    description: 'Great for people who want the maximum coverage offered.',
    details: {
      premium: '$58.42',
      deductible: '$50',
      annualPlanMax: '$1,000',
    }
  },{
    name: 'Classic',
    type: 'PPO Plus Premiere',
    img: secondPlanImg,
    single: true,
    description: 'Great for people who anticipate needing more involved dental work.',
    details: {
      premium: '$45.14',
      deductible: '$50',
      annualPlanMax: '$1,000',
    }
  },{
    name: 'Clear',
    type: 'PPO Plus Premiere',
    img: thirdPlanImg,
    single: true,
    description: 'Great for people only needing cleanings and occasional filling.',
    details: {
      premium: '$38.00',
      deductible: '$0',
      annualPlanMax: 'None',
    }
  }
]

const IndexPage = ({ classes }) => {
  const steps = ['Zip Code Lookup', 'Pick a Plan', 'Sign Up'];
  const [activeStep, setActiveStep] = useState(0);
  const [zipCode, setZipCode] = useState('');
  const [expanded, setExpanded] = useState(false);
  const handleExpandClick = () => setExpanded(!expanded);
  const handleNext = () => setActiveStep(activeStep + 1);
  const handleBack = () => setActiveStep(activeStep - 1);
  const handleReset = () => setActiveStep(0);

  return (
    <Layout>
      <SEO title="Find a Plan" keywords={[`gatsby`, `application`, `react`]} />
      <div className={classes.root}>
          <Stepper activeStep={activeStep} className={classes.stepper}>
            {steps.map((label, index) => {
              const props = {};
              const labelProps = {};
              return (
                <Step key={label} {...props}>
                  <StepLabel {...labelProps}>{label}</StepLabel>
                </Step>
              );
            })}
          </Stepper>
          {
            activeStep === 0 && (
              <Card className={classes.zipCard}>
                <CardMedia
                  className={classes.zipCardIcon}
                  image={DentalHealthImg}
                  title="Find a Dental Plan in your area."
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2" className={classes.zipParagraph}>
                    Find a Dental Plan in your area.
                  </Typography>
                  <Typography component="p" className={classes.zipParagraph}>
                    Plan options vary by location due to state requirements.<br/>
                    Please enter your five-digit zip code to start building the plan that’s right for you.
                  </Typography>
                  <FormControl className={classes.zipFormControl}>
                    <InputLabel htmlFor="adornment-zipCode">Zip Code</InputLabel>
                    <Input
                      id="adornment-zipCode"
                      type='text'
                      value={zipCode}
                      onChange={(e) => setZipCode(e.target.value)}
                      endAdornment={
                        <InputAdornment position="end">
                          <IconButton
                            aria-label="Zip Code Lookup"
                            onClick={handleNext}
                          >
                            <Search />
                          </IconButton>
                        </InputAdornment>
                      }
                    />
                  </FormControl>
                </CardContent>
              </Card>
            )
          }
          { 
            activeStep === 1 && (
              <Grid container className={classes.root} spacing={24}>
                { 
                  data.map((plan) => (
                    <Grid item xs={4} key={plan.name}>
                      <Card className={classes.card}>
                        <CardActionArea onClick={handleNext}>
                          <CardHeader
                            avatar={
                              <Avatar 
                                aria-label="Dental Health"
                                className={classes.avatar} 
                                src={DentalHealthImg}
                              />
                            }
                            title={`${plan.name} - ${plan.type}`}
                            subheader={`${plan.details.premium} Monthly (${plan.single ? 'Single' : 'Family'})`}
                          />
                          <CardMedia
                            className={classes.media}
                            image={plan.img}
                            title={plan.name}
                          />
                          <CardContent>
                            <Typography component="p">
                              {plan.description}
                            </Typography>
                          </CardContent>
                        </CardActionArea>
                        <CardActions className={classes.actions} disableActionSpacing>
                          { 
                            !expanded &&
                            <Button size="small" color="primary" onClick={handleExpandClick}>
                              Learn More
                            </Button>
                          }
                          <IconButton
                            className={classes.expand}
                            onClick={handleExpandClick}
                            aria-expanded={expanded}
                            aria-label="Show more"
                          >
                            { expanded ? (<Remove />) : (<Add />)}
                          </IconButton>
                        </CardActions>
                        <Collapse in={expanded} timeout="auto" unmountOnExit>
                          <CardContent>
                            <List>
                              <ListItem>
                                <Avatar>
                                  <Timer />
                                </Avatar>
                                <ListItemText primary="Monthly Premium" secondary={plan.details.premium} />
                              </ListItem>
                              <Divider variant="inset" component="li" />
                              <ListItem>
                                <Avatar>
                                  <Payment />
                                </Avatar>
                                <ListItemText primary="Deductibles" secondary={plan.details.deductible} />
                              </ListItem>
                              <Divider variant="inset" component="li" />
                              <ListItem>
                                <Avatar>
                                  <ShowChart />
                                </Avatar>
                                <ListItemText primary="Annual Plan Max" secondary={plan.details.annualPlanMax} />
                              </ListItem>
                            </List>
                          </CardContent>
                        </Collapse>
                      </Card>
                    </Grid>
                  ))
                }
              </Grid>
            )
          }
          { 
            activeStep === 2 && (
              <Card className={classes.signUpCard}>
                <CardMedia
                  className={classes.happyToothIcon}
                  image={happyTooth}
                  title="Congratulation! Let's sign up!"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2" className={classes.zipParagraph}>
                    Congratulation! Let's sign you up!
                  </Typography>
                  <Button 
                    variant="outlined" 
                    color="primary" 
                    onClick={handleReset}
                    className={classes.signUpButton}
                  >
                    Sign Up!
                  </Button>
                </CardContent>
              </Card>
            )
          }
        </div>
    </Layout>
  )
}

export default withRoot(withStyles(styles)(IndexPage));
