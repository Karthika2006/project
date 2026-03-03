
import { clerkClient } from '@clerk/express'
//import { clerkClient } from "@clerk/clerk-sdk-node";

// update role to educator

export const updateRoleToEducator = async (req,res)=>{
    try{
        const  {userId}  = req.auth()
        
        await clerkClient.users.updateUserMetadata(userId,{
            publicMetadata:{
                role : 'educator',
            }
        })
        res.json({ success: true, message:'you can publish a course now'})
    }
    catch(error){
        res.json({success:false, message:error.message})
    }
}

