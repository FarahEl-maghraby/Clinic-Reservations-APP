const express = require('express')
const router = express.Router()
const Data = require('../model/data')

//POST DATA 

router.post('/data' , (req,res)=>{
const data = new Data(req.body)
Data.findOne({},{},{sort: {'requestID':-1}} , function(err,single){

    try{
        requestID = single.requestID +1
      
    }
    catch{
        requestID =1;
    } 

    data.requestID = requestID
  
    data.save()
    .then(() => res.status(200).send(data))
    .catch((error) => res.status(400).send(error.message)) 

}) 
})


//Clinic Data

router.post('/dataClinic' , (req,res)=>{
    const data = new Data(req.body)
    Data.findOne({},{},{sort: {'requestID':-1}} , function(err,single){
    
        try{
            requestID = single.requestID +1
          
        }
        catch{
            requestID =1;
        } 
    
        data.requestID = requestID
      
        data.save()
        .then(() => res.status(200).send(data))
        .catch((error) => res.status(400).send(error.message)) 
    
    }) 
    })



//GET ALL

router.get('/data',(req,res)=>{
    
    Data.find({})
    .then((data) =>{
        if(!data)
        res.send('Can not fetch data')
        res.send(data)
    })
    .catch((error)=>res.send(error.message))
})

//Get by status

router.get('/data/:status',(req,res)=>{
    
    Data.find({status:true})
    .then((data) =>{
        if(!data)
        res.send('Can not fetch data')
        res.send(data)
    })
    .catch((error)=>res.send(error.message))
})

//GET BY MY OWN ID
router.get('/dataClinic/:requestID',(req,res)=>{
    const id = req.params.requestID
     Data.findOne({requestID:id}, function(err,single){
        if(err){
            console.log(err);
            return
        }
     })
    .then((data) =>{
        if(!data)
        res.send('Error it might be deleted')
        res.send(data)
    })
    .catch((error) => res.send(error.message))

})

//Update data
router.patch('/data/:id', async(req,res)=>{
    try{
        const data = await Data.findOneAndUpdate(
          {requestID:req.params.id},req.body,{new:true , runValidators:true})
        if(!data)
        res.send('No data')
        res.send(data)

    }
 
    catch(e){
        res.send(e.message)
    } 
 })

 //DELETE ALL 

 router.delete('/data',(req,res)=>{
     Data.deleteMany({})
     .then((data) => {
         if(!data)
         res.send('Error')
         res.send('All your data all deleted')
     })
     .catch((err)=> res.send(err.message))
 })



router.delete('/data/:id',async (req,res)=>{
const data = await Data.findByIdAndDelete(req.params.id,req.body)
try{
    if(!data)
    
    res.send('Can\'t delete')
    res.send('Deleted')
}
catch(e)
{
    res.send(e.message)
}
 })


/**Upload image */  

module.exports = router