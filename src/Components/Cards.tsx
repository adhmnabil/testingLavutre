import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Avatar, Button, CardActionArea } from '@mui/material';
import './card.css'


const Cards: React.FC<any> = (props)=> {
  return (
    <Card className='card'>
      <CardActionArea>
       <Avatar className='img'>
        {props.job.title.slice(0 , 1)}
       </Avatar>
        <CardContent>
          <Typography gutterBottom variant="h5" component="div" className='text'>
          {props.job.title}
          </Typography>
          <div className='jobs'>
          {
            props.job.category.map((item : string , key : number)=>{
              return(
                <Typography key={key} variant="body2" color="text.secondary" className='work'>
                {item}
              </Typography>
              )
            })
          }
          </div>
          <Button size="small" sx={{marginTop : "10px"}}>View</Button>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}

export default Cards