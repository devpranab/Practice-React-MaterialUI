import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ImageList from '@material-ui/core/ImageList';
import ImageListItem from '@material-ui/core/ImageListItem';

const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'space-around',
      overflow: 'hidden',
      backgroundColor: theme.palette.background.paper,
    },
    imageList: {
      width: 500,
      height: 450,
    },
  }));

const itemData = [
    {
        img: 'https://images.unsplash.com/photo-1497215728101-856f4ea42174?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80',
        title: 'img one'
    },
    {
        img: 'https://images.pexels.com/photos/12604653/pexels-photo-12604653.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        title: 'img two'
    },
    {
        img: 'https://images.unsplash.com/photo-1657299141998-2aba7e9bdebb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHw2fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=600&q=60',
        title: 'img three'
    },
    {
        img: 'https://images.unsplash.com/photo-1659590007776-4b4842b96da0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyMHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&q=60',
        title: 'img four'
    },
    {
        img: 'https://images.unsplash.com/photo-1659430836036-2481caf07f44?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxM3x8fGVufDB8fHx8&auto=format&fit=crop&w=600&q=60',
        title: 'img five'
    }
]
export default function BasicImageList() {
    const classes = useStyles();
  
    return (
      <div className={classes.root}>
        <ImageList rowHeight={160} className={classes.imageList} cols={3}>
          {itemData.map((item) => (
            <ImageListItem key={item.img} cols={item.cols || 1}>
              <img src={item.img} alt={item.title} loading="lazy"/>
            </ImageListItem>
          ))}
        </ImageList>
      </div>
    );
  }