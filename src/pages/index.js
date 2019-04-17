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
  Face,
  Redeem,
  Remove,
  Search,
  Timer,
  Payment,
  ShowChart
} from '@material-ui/icons';
import Layout from "../components/layout";
import SEO from "../components/seo";
import DentalHealthImg from '../images/dental-health.svg';
import firstPlanImg from '../images/theFirst.jpeg';
import secondPlanImg from '../images/theSecond.jpeg';
import thirdPlanImg from '../images/theThird.jpeg';

const styles = theme => ({
  root: {
    flexGrow: 1,
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
});

const data = [
  {
    type: 'PPO Plan',
    name: 'Advantage Gold',
    monthly: '$43.99',
    img: firstPlanImg,
    single: true,
    description: 'Great for people who want the maximum coverage offered',
    details: {
      dentist: [
        'Choose any Dentist',
        'Save up to 35% by choosing an In-Network Dentist'
      ],
      benefits: {
        cleaningXrays: '100%',
        fillings: '70%',
        rootCanalsCrowns: '50%',
        implants: '50%',
        childBraces: '50%',
      },
      waitingPeriods: {
        cleanings: 'None',
        fillings: '6 months',
        majorWork: '12 months',
      },
      deductibles: {
        preventive: '$0 In / $50 Out',
        other: '$50',
      },
      maxBenefits: {
        firstYears: '$1,000, $1,250, $1,500',
        implantsLifetime: '$1,000',
        childBracesAnnual: '$500',
        childBracesLifetime: '$1,000',
      }
    }
  },{
    type: 'PPO Plan',
    name: 'Advantage Silver',
    monthly: '$30.22',
    img: secondPlanImg,
    single: true,
    description: 'Great for people who anticipate needing dental work beyond the occasional filling',
    details: {
      dentist: [
        'Choose any Dentist',
        'Save up to 35% by choosing an In-Network Dentist'
      ],
      benefits: {
        cleaningXrays: '80%',
        fillings: '50%',
        rootCanalsCrowns: '50%',
        implants: '50%',
        childBraces: '0%',
      },
      waitingPeriods: {
        cleanings: 'None',
        fillings: '6 months',
        majorWork: '12 months',
      },
      deductibles: {
        preventive: '$0 In / $50 Out',
        other: '$50',
      },
      maxBenefits: {
        firstYears: '$500, $750, $1,000',
        implantsLifetime: '$700'
      }
    }
  },{
    type: 'PPO Plan',
    name: 'Advantage Bronze',
    monthly: '$22.67',
    img: thirdPlanImg,
    single: true,
    description: 'Great for people who expect to need only cleanings and the occasional filling',
    details: {
      dentist: [
        'Choose any Dentist',
        'Save up to 35% by choosing an In-Network Dentist'
      ],
      benefits: {
        cleaningXrays: '100%',
        fillings: '50%',
        rootCanalsCrowns: '0%',
        implants: '0%',
        childBraces: '0%',
      },
      waitingPeriods: {
        cleanings: 'None',
        fillings: '6 months',
        majorWork: 'Not covered',
      },
      deductibles: {
        preventive: '$0 In / $50 Out',
        other: '$50',
      },
      maxBenefits: {
        firstYears: '$500, $750, $1,000'
      }
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
          <Stepper activeStep={activeStep}>
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
                        <CardHeader
                          avatar={
                            <Avatar 
                              aria-label="Dental Health"
                              className={classes.avatar} 
                              src={DentalHealthImg}
                            />
                          }
                          title={`${plan.name} - ${plan.type}`}
                          subheader={`${plan.monthly} Monthly (${plan.single ? 'Single' : 'Family'})`}
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
                                  <Face />
                                </Avatar>
                                <ListItemText primary="Dentist" secondary="More here" />
                              </ListItem>
                              <Divider variant="inset" component="li" />
                              <ListItem>
                                <Avatar>
                                  <Redeem />
                                </Avatar>
                                <ListItemText primary="Redeem" secondary="More here" />
                              </ListItem>
                              <Divider variant="inset" component="li" />
                              <ListItem>
                                <Avatar>
                                  <Timer />
                                </Avatar>
                                <ListItemText primary="Waiting Periods" secondary="More here" />
                              </ListItem>
                              <Divider variant="inset" component="li" />
                              <ListItem>
                                <Avatar>
                                  <Payment />
                                </Avatar>
                                <ListItemText primary="Deductibles" secondary="More here" />
                              </ListItem>
                              <Divider variant="inset" component="li" />
                              <ListItem>
                                <Avatar>
                                  <ShowChart />
                                </Avatar>
                                <ListItemText primary="Maximum Benefits" secondary="More here" />
                              </ListItem>
                            </List>


                            {/* <Typography variant="h5">Plan Details</Typography>
                            <Typography variant="h6">Dentist</Typography>
                            <Typography paragraph>
                              <ul>{plan.details.dentist.map((info) => (<li>{info}</li>))}</ul>
                            </Typography> */}
                          </CardContent>
                        </Collapse>
                      </Card>
                    </Grid>
                  ))
                }
              </Grid>
            )
          }
        </div>
    </Layout>
  )
}

export default withStyles(styles)(IndexPage);
