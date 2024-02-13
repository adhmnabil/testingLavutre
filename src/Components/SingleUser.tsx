import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchJobsStart, fetchJobsSuccess } from '../Store/reducer'
import { getUsers } from './userServices'
import {RequestBody , JobResponse , JobState , job} from './interfaces'
import { useNavigate, useParams } from 'react-router-dom'
import { Button, CircularProgress } from '@mui/material'
import Users from './Users'

export default function User() {
    const [user, setUser] : any = useState(undefined)
    const dispatch = useDispatch()
    const select = useSelector((state : JobState)=> state.jobs)
    const navigate = useNavigate()
    const params = useParams()
    function getAllUsers() {
        dispatch(fetchJobsStart())
        getUsers(
          '/jobs',
          (success : JobResponse )=>{
            dispatch(fetchJobsSuccess(success))
            const foundObject : any = success.results.jobs.find(obj => obj.uuid === params.id);
            console.log(foundObject)
            setUser(foundObject)
          },
          (fail)=>{
            console.log(fail)
          },
         )
    
      
      }

      useEffect(() => {
        getAllUsers()
      }, [])
  return (
    <>
    <div className='single'>
        {
            user != undefined ? 
            <>
            <div>
            <label>Title :</label><label> {user.title}</label>
            </div>
            <div>
            <label>description :</label><label> {user.description != null ? user.description : "no description"}</label>
            </div>
            <div>
            <label>location :</label><label> {user.location.city != null ? user.location.city : "N/A"}</label>
            </div>
            <div>
            <label>sponsorship :</label><label> {user.sponsorship  ? "Yes" : "No"}</label>
            </div>
            <div>
            <label>Willing To Relocat :</label><label> {user.willing_to_relocat  ? "Yes" : "No"}</label>
            </div>
            <div>
            <label>willing to travel :</label><label> {user.willing_to_travel  ? "Yes" : "No"}</label>
            </div>
            <div>
            <label>languages :</label> {user.languages.length != 0 ? 
            user.languages.map((lang : any)=>{
                return(
                <label>
                    {lang}
                </label>
                )
            })
            : "N/A"}
            </div>
        
            </>
            : 
            <div className='circluar'>
                <h2>Not found</h2>
            </div>
        }
        <Button onClick={()=>navigate(-1)}>Back</Button>
    </div>
    <h1 className='circluar'>Related work :</h1>
    <Users/> 
    
    </>
  )

}
