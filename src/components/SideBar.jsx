import React from 'react'
import {categories} from '../utils/constants';
import { Stack, Box, Typography } from '@mui/material';
const SideBar = ({selectedCategory,setSelectedCategory}) => {
  return (
    <Box sx={{height: {sx: 'auto', md: '90vh'}, borderRight: '1px solid #3d3d3d', px: {sx: 0,md: 2}}}>
      <Stack direction='row' sx={{overflowY: 'auto',height: {sx: 'auto',md: '95%'}, flexDirection: {md: 'column'}}}>
        {
          categories.map((category)=>(
            <button className='category-btn' 
                    onClick={()=>setSelectedCategory(category.name)}
                    style={{background: category.name===selectedCategory && '#FC1503', color: '#fff'}} 
                    key={category.name}>
              <span style={{color: category.name===selectedCategory ? 'white' : 'red', marginRight: '15px'}}>{category.icon}</span>
              <span style={{opacity: category.name===selectedCategory ? 1:0.8}}>{category.name}</span>
            </button>
          ))
        }
      </Stack>
      <Typography className='copyright' variant='body2' sx={{mt: 1.5, color: '#fff'}}>
        Copyright 2022 JSM Media
      </Typography>
    </Box>
  )
}

export default SideBar