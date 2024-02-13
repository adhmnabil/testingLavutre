import React, { useEffect, useState } from 'react'
import Cards from './Cards'
import { getUsers } from './userServices'
import { Button, CircularProgress } from '@mui/material'
import {RequestBody , JobResponse , JobState , job} from './interfaces'
import { useDispatch, useSelector } from 'react-redux'
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { fetchJobsStart, fetchJobsSuccess } from '../Store/reducer'
import { useNavigate } from 'react-router-dom'
import { ROUTES } from '../Routing/Routes'

export default function Users() {
  const [title, setTitle] = React.useState('');
  const [fiteredData, setFilteredData] : any= useState(null)
  const select = useSelector((state : JobState)=> state.jobs)
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const handleChange = (event: SelectChangeEvent) => {
    setTitle(event.target.value as string);
    const filteredData : any = select.data?.results.jobs.filter(job => job.title.toLowerCase().includes(event.target.value.toLowerCase()));
    setFilteredData(filteredData)
  };
 
  function getAllUsers() {
    dispatch(fetchJobsStart())
    getUsers(
      '/jobs',
      (success : JobResponse )=>{
        dispatch(fetchJobsSuccess(success))
      },
      (fail)=>{
        console.log(fail)
      },
     )

  
  }

  useEffect(() => {
    getAllUsers()
  }, [])

  

  
  if(select.isLoading){
    return <div className='circluar'><CircularProgress /></div>
  }
    return (
      <>
          <Box   className='select'>
        <FormControl  fullWidth>
          <InputLabel id="demo-simple-select-label">Title</InputLabel>
          {
             !select.error&&
             <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={title}
            label="title"
            onChange={handleChange}
          >
            {
            select.data?.results.jobs.map((item : any)=>{
                return(
                  <MenuItem key={item.id} value={item.title}>{item.title}</MenuItem>
                )
              }) 
            }
              <MenuItem value={""}>default</MenuItem>
          </Select>
          }
          
        </FormControl>
      </Box>
   
      <div className='cards'>
        {
         !fiteredData   ?  
         select.data?.results.jobs.map((job,key)=>{
            return(
              <div key={key} onClick={()=>navigate(`/user/${job.uuid}`)}>
              <Cards job={job as unknown as job} />
               </div>
            )
          })
          :
          fiteredData.map((job : any,key : any)=>{
            return(
                <div key={key}>
                <Cards job={job as unknown as job} />
                 </div>
            )
          })
        }
  
        {
          select.error != null &&
          <>
          <p>SomeThing went wrong</p>
          <Button>Refresh</Button>
          </>
        }
        
      </div>
      </>
    )
  }


