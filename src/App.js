import './App.css';
import React,{useState} from 'react';
import Button from '@material-ui/core/Button';
import DeleteIcon from '@material-ui/icons/Delete';
import IconButton from '@material-ui/core/IconButton';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import EditIcon from '@material-ui/icons/Edit';
import FavoriteIcon from '@material-ui/icons/Favorite';
import NavigationIcon from '@material-ui/icons/Navigation';
import { CheckBox } from '@material-ui/icons';
import { FormControlLabel } from '@material-ui/core';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import Slider from '@material-ui/core/Slider';
import Switch from '@material-ui/core/Switch';
import Box from '@material-ui/core/Box';
import Avatar from '@material-ui/core/Avatar';
import Badge from '@material-ui/core/Badge';
import MailIcon from '@material-ui/icons/Mail';
import Chip from '@material-ui/core/Chip';
import Divider from '@material-ui/core/Divider';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/Inbox';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Tooltip from '@material-ui/core/Tooltip';

// for data & time
const useStyles = makeStyles((theme) => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: 200,
  },
}));


function App() {
  const classes = useStyles();
  
  // for data & time
  const [value, setValue] = React.useState('female');

  const handleChange = (event) => {
    setValue(event.target.value);
  };
  return (
    <div className="App">
     <h2>Button</h2>
     <h3>Text Button</h3>
     <Button>Click</Button>
     <Button color="secondary">Click</Button>
     <Button href="#" color="inherit">Link</Button>
     <Button disabled>Click</Button>
     <h3>Contained Button</h3>
     <Button variant="contained">Click</Button>
     <Button variant="contained" color="secondary">Click</Button>
     <Button variant="contained" href="#" color="inherit">Link</Button>
     <Button variant="contained" disabled>Click</Button>
     <h3>Outlined Button</h3>
     <Button variant="outlined">Click</Button>
     <Button variant="outlined" color="secondary">Click</Button>
     <Button variant="outlined" href="#" color="inherit">Link</Button>
     <Button variant="outlined" disabled>Click</Button>
     <h3>Button Size</h3>
     <Button variant="contained" size="small">Click</Button>
     <Button variant="contained" color="secondary" size="medium">Click</Button>
     <Button variant="contained" href="#" color="inherit" size="large">Link</Button>
     <h3>Button with Icon</h3>
     <Button variant="contained" color="secondary" startIcon={<DeleteIcon/>}>Delete</Button>
     <Button variant="contained" color="secondary" endIcon={<DeleteIcon/>}>Delete</Button>
     <h3>Icon Button</h3>
     <IconButton variant="contained" color="primary"><DeleteIcon/></IconButton>
     <h3>Custom Button</h3>
     <Button variant="contained" style={{
      backgroundColor: "green",
      color: "white"
     }}>Custom</Button>
     <h3>Button Group</h3>
     <ButtonGroup variant="contained" color="primary">
      <Button>One</Button>
      <Button>Two</Button>
      <Button>Three</Button>
     </ButtonGroup>
     <h3>Vertical Button Group</h3>
     <ButtonGroup orientation="vertical" color="primary">
      <Button>One</Button>
      <Button>Two</Button>
      <Button>Three</Button>
     </ButtonGroup>
     <h3>Floating Action Button</h3>
     <Fab color="primary"><AddIcon/></Fab>
     <Fab color="secondary"><EditIcon/></Fab>
     <Fab color="extended"><NavigationIcon/>Navigate</Fab>
     <Fab disabled><FavoriteIcon/></Fab>
     <h3>Checkbox</h3>
     <CheckBox/>
     <CheckBox checked="true" color="secondary"/>
     <CheckBox checked="true" color="primary"/>
     <CheckBox defaultChecked indeterminate/>
     <FormControlLabel control={
      <CheckBox checked="true" name="checkbox"/>
     }label="Secondary"/>
     <hr/>
    <h2>Date & Time</h2>
    <form className={classes.container} noValidate>
   <TextField
    id="date"
    label="Birthday"
    type="date"
    defaultValue="2017-05-24"
    className={classes.textField}
    InputLabelProps={{
      shrink: true,
    }}
  />
</form>
<hr/>
<FormControl component="fieldset">
      <FormLabel component="legend">Gender</FormLabel>
      <RadioGroup aria-label="gender" name="gender1" value={value} onChange={handleChange}>
        <FormControlLabel value="female" control={<Radio />} label="Female" />
        <FormControlLabel value="male" control={<Radio />} label="Male" />
        <FormControlLabel value="other" control={<Radio />} label="Other" />
        <FormControlLabel value="disabled" disabled control={<Radio />} label="(Disabled option)" />
      </RadioGroup>
    </FormControl>
    <hr/>
    <h2>Radio Button</h2>
      <Radio
        value="a"
        name="radio-button-demo"
        inputProps={{ 'aria-label': 'A' }}
      />
      <Radio
        value="b"
        name="radio-button-demo"
        inputProps={{ 'aria-label': 'B' }}
      />
      <hr/>
      <h2>Slider</h2>
      <Slider value="5" />
      <h2>Switch</h2>
      <Switch />
      <hr/>
      <h2>Box</h2>
      <Box>Hello World</Box>
      <h2>Alignment</h2>
      <Box textAlign="left">Hello</Box>
      <Box textAlign="center">Hello</Box>
      <Box textAlign="right">Hello</Box>
      <h2>Font Weight</h2>
      <Box fontWeight="fontWeightBold">Hello</Box>
      <Box fontWeight={500}>Hello</Box>
      <h2>Font Size</h2>
      <Box fontSize={24}>Hello</Box>
      <h2>Font Style</h2>
      <Box fontStyle="italic">Hello</Box> 
      <h2>Color</h2>
      <Box color="primary.main">primary</Box>
      <Box color="secondary.main">secondary</Box>
      <Box color="error.main">error</Box>
      <Box color="warning.main">warning</Box>
      <Box color="info.main">info</Box>
      <Box color="success.main">success</Box>
      <h2>Background Color</h2>
      <Box bgcolor="primary.main">primary</Box>
      <Box bgcolor="secondary.main">secondary</Box>
      <Box bgcolor="error.main">error</Box>
      <Box bgcolor="warning.main">warning</Box>
      <Box bgcolor="info.main">info</Box>
      <Box bgcolor="success.main">success</Box>
      <hr/>
      <h2>Margin</h2>
      <Box m={10}> All Side Margin</Box>
      <Box mt={10}>Margin Top</Box>
      <Box mb={10}>Margin Bottom</Box>
      <Box ml={10}>Margin Left</Box>
      <Box mr={10}>Margin Right</Box>
      <Box mx={10}>Margin Left Right</Box>
      <Box my={10}>Margin Top Bottom</Box>
      <h2>Padding</h2>
      <Box p={10}> All Side Padding</Box>
      <Box pt={10}>Padding Top</Box>
      <Box pb={10}>Padding Bottom</Box>
      <Box pl={10}>Padding Left</Box>
      <Box pr={10}>Padding Right</Box>
      <Box px={10}>Padding Left Right</Box>
      <Box py={10}>Padding Top Bottom</Box>
      <h2>Width Sizing</h2>
      <Box width={1 / 4} bgcolor="red">Width 1/4</Box>
      <Box width={500} bgcolor="yellow">Width 500px</Box>
      <Box width="50%" bgcolor="pink">Width 50%</Box>
      <Box width={1} bgcolor="green">Width 100%</Box>
      <h2>Height Sizing</h2>
      <Box height="50%" bgcolor="pink">Height 50%</Box>
      <Box height={200} bgcolor="yellow">Height 200px</Box>
      <h2>Border</h2>
      <Box border={1}>Hello 1</Box>
      <Box borderTop={1}>Hello 2</Box>
      <Box borderBottom={1}>Hello 3</Box>
      <Box borderLeft={1}>Hello 4</Box>
      <Box borderRight={1}>Hello 5</Box>
  
      <Box border={0}>Hello 1</Box>
      <Box border={1} borderTop={0}>Hello 2</Box>
      <Box border={1} borderBottom={0}>Hello 3</Box>
      <Box border={1} borderLeft={0}>Hello 4</Box>
      <Box border={1} borderRight={0}>Hello 5</Box>
      <h2>Border Color</h2>
      <Box border={1} borderColor="secondary.main">Hello</Box>
      <h2>Border Radius</h2>
      <Box border={1} borderRadius="50%" width={300} height={300}></Box>
      <Box border={1} borderRadius={16} width={300} height={300}></Box>
      <hr/>
      <h2>Avatar</h2>
      <Avatar alt="Cindy Baker" src="/static/images/avatar/3.jpg" />
      <hr/>
      <h2>Badges</h2>
      <Badge badgeContent={4} color="primary">
        <MailIcon />
      </Badge>
      <Badge badgeContent={100} color="primary" max={40}>
        <MailIcon />
      </Badge>
      <Badge anchorOrigin={{ vertical: "bottom", horizontal: "right" }} badgeContent={100} color="primary" max={50} >
        <MailIcon />
      </Badge>
      <Badge color="primary" variant="dot">
        <MailIcon />
      </Badge>
      <hr/>
      <h2>Chip</h2>
      <Chip label="Basic" />
      <Chip label="Disabled" disabled />
      <Chip avatar={<Avatar>M</Avatar>} label="Avatar Chip" />
      <Chip avatar={<Avatar src="https://cdn.pixabay.com/photo/2015/09/02/13/24/girl-919048_960_720.jpg" />} label="Avatar Chip" />
      <hr/>
      <h3>Divider</h3>
      <Divider />
      <Divider orientation="vertical" />
      <hr/>
      <h2>List</h2>
      <List component="nav" aria-label="main mailbox folders">
        <ListItem button>
          <ListItemText primary="Drafts" />
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            <InboxIcon />
          </ListItemIcon>
          <ListItemText primary="Inbox" />
        </ListItem>
      </List>
      <hr/>
      <h2>Table</h2>
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>No</TableCell>
              <TableCell align="right">Name</TableCell>
              <TableCell align="right">Roll</TableCell>
              <TableCell align="right">Class</TableCell>
              <TableCell align="right">Subject</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow>
              <TableCell component="th" scope="row">1</TableCell>
              <TableCell align="right">Sonam</TableCell>
              <TableCell align="right">101</TableCell>
              <TableCell align="right">11</TableCell>
              <TableCell align="right">Math</TableCell>
            </TableRow>
            <TableRow>
              <TableCell component="th" scope="row">2</TableCell>
              <TableCell align="right">Rahul</TableCell>
              <TableCell align="right">102</TableCell>
              <TableCell align="right">11</TableCell>
              <TableCell align="right">Math</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
      <hr/>
      <h2>Tooltip</h2>
      <Tooltip title="Delete">
        <IconButton aria-label="delete">
          <DeleteIcon />
        </IconButton>
      </Tooltip>
      <hr/>
    </div>

  );
}

export default App;
