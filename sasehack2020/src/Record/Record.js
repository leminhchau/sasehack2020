import React from 'react';
import './Record-css/bootstrap.min.css';
import './Record-css/record-style.css';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Badge from '@material-ui/core/Badge';
import MailIcon from '@material-ui/icons/Mail';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import BeachAccessIcon from '@material-ui/icons/BeachAccess';
import AssignmentOutlinedIcon from '@material-ui/icons/AssignmentOutlined';
import AccessibilityNewTwoToneIcon from '@material-ui/icons/AccessibilityNewTwoTone';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import HealingOutlinedIcon from '@material-ui/icons/HealingOutlined';
import BookmarkBorderIcon from '@material-ui/icons/BookmarkBorder';
import AnnouncementOutlinedIcon from '@material-ui/icons/AnnouncementOutlined';

const useStyles = makeStyles({
    root: {
      minWidth: 100,
    },
    bullet: {
      display: 'inline-block',
      margin: '0 2px',
      transform: 'scale(0.8)',
    },
    title: {
      fontSize: 14,
    },
    pos: {
      marginBottom: 12,
    },
    media: {
        height: 100,
        width: 50,
    },
    media1: {
        height: 0,
        paddingTop: '56.25%', 
        marginTop:'30'
    },

  });

  export default function Record() {
    const classes = useStyles();
    //const bull = <span className={classes.bullet}>•</span>;
    return (
    <section class="about full-screen d-lg-flex justify-content-center align-items-center" id="about">
    <div class="container">
        <div class="row">
            <div class="col-lg-7 col-md-12 col-12 d-flex align-items-center">
                <div class="about-text">
                    <small class="small-text">
                        <img src ="https://cdn.esquimaltmfrc.com/wp-content/uploads/2015/09/flat-faces-icons-circle-woman-9.png" className="photo" ></img>
                    </small>
                    
                    <h1 class="animated animated-text">
                        <span class="mr-2">Name</span>
                    </h1>

                    <List>
                        <ListItem>
                            <ListItemAvatar>
                            <Avatar>
                                <AccountCircleIcon />
                            </Avatar>
                            </ListItemAvatar>
                            <ListItemText primary="Gender" secondary="Female" />
                        </ListItem>
                        <ListItem>
                            <ListItemAvatar>
                            <Avatar>
                                <AccessibilityNewTwoToneIcon />
                            </Avatar>
                            </ListItemAvatar>
                            <ListItemText primary="Age" secondary="20" />
                        </ListItem>
                        <ListItem>
                            <ListItemAvatar>
                            <Avatar>
                                <BeachAccessIcon />
                            </Avatar>
                            </ListItemAvatar>
                            <ListItemText primary="Height" secondary="5'20''" />
                        </ListItem>
                        <ListItem>
                            <ListItemAvatar>
                            <Avatar>
                                <BookmarkBorderIcon />
                            </Avatar>
                            </ListItemAvatar>
                            <ListItemText primary="Weight" secondary="100 pounds" />
                        </ListItem>
                    </List>

                    <div class="custom-btn-group mt-4">
                        <a href = "https://images-na.ssl-images-amazon.com/images/I/61JU8DM6f-L._AC_UL1000_.jpg"class="btn custom-btn custom-btn-bg" onclick = "getRandom()">Scan ID</a>
                    </div>
                </div>
            </div>
            
            <div class="col-lg-5 col-md-12 col-12">
                <div class="about-image svg">
                    <Grid container spacing={3}>
                        <Grid item xs={6}>
                            <Paper className={classes.paper}>

                                <Card className={classes.root}>
                                    <CardActionArea>
                                        <CardMedia
                                        className={classes.media1}
                                        image="https://i.pinimg.com/originals/83/e8/b1/83e8b1b2df09ab94414656fcc7399474.png"
                                        title="Lab"
                                        />
                                        <CardContent>
                                            <Typography gutterBottom variant="h5" component="h4" class="mr-2">
                                                Lab Results
                                            </Typography>
                                            <Typography variant="body2" color="textSecondary" component="p">
                                                Access and view lab results
                                            </Typography>
                                        </CardContent>
                                    </CardActionArea>

                                    <CardActions disableSpacing>
                                        <Button size="small">
                                            <AssignmentOutlinedIcon className ="myreact-icons"></AssignmentOutlinedIcon>
                                        </Button>
                                    </CardActions>
                                </Card>

                            </Paper>
                        </Grid>
                        <Grid item xs={6}>
                            <Paper className={classes.paper}>
                            <Card className={classes.root}>
                                    <CardActionArea>
                                        <CardMedia
                                        className={classes.media1}
                                        image="https://cdn2.iconfinder.com/data/icons/medical-icons-110/512/medical_icon_9-512.png"
                                        title="Medication"
                                        />
                                        <CardContent>
                                            <Typography gutterBottom variant="h5" component="h4" class="mr-2">
                                                Medication
                                            </Typography>
                                            <Typography variant="body2" color="textSecondary" component="p">
                                                Request Precripstion Refills
                                            </Typography>
                                        </CardContent>
                                    </CardActionArea>

                                    <CardActions disableSpacing>
                                        <Button size="small" color="#b491c8">
                                            <HealingOutlinedIcon  className ="myreact-icons"></HealingOutlinedIcon>
                                        </Button>
                                    </CardActions>
                                </Card>
                            </Paper>
                        </Grid>

                        <Grid item xs={6}>
                            <Paper className={classes.paper}>
                            <Card className={classes.root}>
                                    <CardActionArea>
                                        <CardMedia
                                        className={classes.media1}
                                        image="https://cdn2.iconfinder.com/data/icons/unigrid-phantom-layout-vol-3/60/021_124_chat_dialog_comments_profiles_accounts_team_resumes_layout-512.png"
                                        title="Message"
                                        />
                                        <CardContent>
                                            <Typography gutterBottom variant="h5" component="h4" class="mr-2">
                                                Messages
                                            </Typography>
                                            <Typography variant="body2" color="textSecondary" component="p">
                                                Send and recieve message from staff
                                            </Typography>
                                        </CardContent>
                                    </CardActionArea>

                                    <CardActions disableSpacing>
                                        <Button size="small" >
                                            <Badge badgeContent={4} color="error">
                                            <MailIcon className ="myreact-icons"/>
                                        </Badge>
                                        </Button>
                                    </CardActions>
                                </Card>
                            </Paper>
                        </Grid>

                        <Grid item xs={6}>
                            <Paper className={classes.paper}>
                            <Card className={classes.root}>
                                    <CardActionArea>
                                        <CardMedia
                                        className={classes.media1}
                                        image="https://cdn3.iconfinder.com/data/icons/healthcare-37/64/reminder-pills-512.png"
                                        title="Reminders"
                                        />
                                        <CardContent>
                                            <Typography gutterBottom variant="h5" component="h4" class="mr-2">
                                                Reminders
                                            </Typography>
                                            <Typography variant="body2" color="textSecondary" component="p">
                                                Recieve health reminders
                                            </Typography>
                                        </CardContent>
                                    </CardActionArea>

                                    <CardActions disableSpacing>
                                        <Button size="small">
                                            <AnnouncementOutlinedIcon className ="myreact-icons">
                                            </AnnouncementOutlinedIcon>
                                        </Button>
                                    </CardActions>
                                </Card>
                            </Paper>
                        </Grid>
                    </Grid>
                </div>
            </div>
        </div>
    </div>
</section>
    ); 
}
