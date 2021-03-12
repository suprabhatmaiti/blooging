import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Collapse from "@material-ui/core/Collapse";
import clsx from "clsx";

import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import Card from "@material-ui/core/Card";
import ShareIcon from "@material-ui/icons/Share";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import ThumbUpIcon from "@material-ui/icons/ThumbUp";
import ChatIcon from "@material-ui/icons/Chat";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { Button, TextField } from "@material-ui/core";
import ArrowForwardIcon from "@material-ui/icons/ArrowForward";
import ArrowForward from "@material-ui/icons/ArrowForward";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    minWidth: 275,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },

  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)",
  },
  pos: {
    marginBottom: 12,
  },
  expandOpen: {
    transform: "rotate(180deg)",
  },
}));
export default function Welcome() {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);
  const [expandComment, setExpandComment] = useState(false);
  const [like, setLike] = useState();
  const [comment, setComment] = useState();
  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
  const handleExpendComment = () => {
    setExpandComment(!expandComment);
  };

  return (
    <div className={classes.root}>
      <Card className={classes.root} variant="outlined">
        <CardContent>
          <Typography
            className={classes.title}
            color="textSecondary"
            gutterBottom
          >
            Word of the Day
          </Typography>
          <Typography variant="h5" component="h2">
            good
          </Typography>
          <Typography className={classes.pos} color="textSecondary">
            adjective
          </Typography>
          <Typography variant="body2" component="p">
            well meaning and kindly.
            <br />
            {'"a benevolent smile"'}
          </Typography>
        </CardContent>
        <CardActions>
          <IconButton aria-label="like">
            <ThumbUpIcon />
          </IconButton>
          <IconButton
            aria-label="comment"
            className={expandComment}
            onClick={handleExpendComment}
          >
            <ChatIcon />
          </IconButton>

          <IconButton
            className={clsx(classes.expand, { [classes.expandOpen]: expanded })}
            onClick={handleExpandClick}
            aria-expanded={expanded}
            aria-label="show more"
          >
            <ExpandMoreIcon />
          </IconButton>
        </CardActions>

        <Collapse in={expanded} timeout="auto" unmountOnExit>
          <CardContent>
            <Typography paragraph>Method:</Typography>
            <Typography paragraph>
              Heat 1/2 cup of the broth in a pot until simmering, add saffron
              and set aside for 10 minutes.
            </Typography>
            <Typography paragraph>
              Heat oil in a (14- to 16-inch) paella pan or a large, deep skillet
              over medium-high heat. Add chicken, shrimp and chorizo, and cook,
              stirring occasionally until lightly browned, 6 to 8 minutes.
              Transfer shrimp to a large plate and set aside, leaving chicken
              and chorizo in the pan. Add pimentón, bay leaves, garlic,
              tomatoes, onion, salt and pepper, and cook, stirring often until
              thickened and fragrant, about 10 minutes. Add saffron broth and
              remaining 4 1/2 cups chicken broth; bring to a boil.
            </Typography>
            <Typography paragraph>
              Add rice and stir very gently to distribute. Top with artichokes
              and peppers, and cook without stirring, until most of the liquid
              is absorbed, 15 to 18 minutes. Reduce heat to medium-low, add
              reserved shrimp and mussels, tucking them down into the rice, and
              cook again without stirring, until mussels have opened and rice is
              just tender, 5 to 7 minutes more. (Discard any mussels that don’t
              open.)
            </Typography>
            <Typography>
              Set aside off of the heat to let rest for 10 minutes, and then
              serve.
            </Typography>
          </CardContent>
        </Collapse>
        <Collapse in={expandComment} timeout="auto" unmountOnExit>
          <CardContent>
            <TextField
              variant="outlined"
              margin="normal"
              maxWidth="50%"
              id="email"
              label="Comment"
              name="email"
              autoFocus
            ></TextField>
            <IconButton>
              <ArrowForwardIcon />
            </IconButton>
          </CardContent>
        </Collapse>
      </Card>
    </div>
  );
}
