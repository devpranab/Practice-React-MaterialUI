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
      <h3>Box</h3>
      <Box>Hello World</Box>
      <h3>Alignment</h3>
      <Box textAlign="left">Hello</Box>
      <Box textAlign="center">Hello</Box>
      <Box textAlign="right">Hello</Box>
      <h3>Font Weight</h3>
      <Box fontWeight="fontWeightBold">Hello</Box>
      <Box fontWeight={500}>Hello</Box>
      <h3>Font Size</h3>
      <Box fontSize={24}>Hello</Box>
      <h3>Font Style</h3>
      <Box fontStyle="italic">Hello</Box> 
      <h3>Color</h3>
      <Box color="primary.main">primary</Box>
      <Box color="secondary.main">secondary</Box>
      <Box color="error.main">error</Box>
      <Box color="warning.main">warning</Box>
      <Box color="info.main">info</Box>
      <Box color="success.main">success</Box>
      <h3>Background Color</h3>
      <Box bgcolor="primary.main">primary</Box>
      <Box bgcolor="secondary.main">secondary</Box>
      <Box bgcolor="error.main">error</Box>
      <Box bgcolor="warning.main">warning</Box>
      <Box bgcolor="info.main">info</Box>
      <Box bgcolor="success.main">success</Box>
      <hr/>
    </div>
  );
}

export default App;
