const getData =(model)=> async (req,res)=>{
    try{
        const section = await model.find().populate({path:"author_id",select:{_id:0,first_name:1,last_name:1}}).populate({path:"section_id",select:{Section_Catrogory:1,_id:0}}).lean().exec();

        return res.status(200).send({view:section});
    }
    catch (err)
    {
       return res.status(500).send({message:err.message});
    }
}

const post = (model) =>async (req,res)=>
{
    try{
        const item = await model.create(req.body)

        return res.status(201).send({added:item})
    }
    catch (err)
    {
        return res.status(500).send({message:err.message})
    }
}


const update =(model)=> async (req,res)=>{
    try{
        const section = await model.findByIdAndUpdate(req.params.id,req.body).lean().exec();

        return res.status(200).send({updated:section});
    }
    catch (err)
    {
       return res.status(500).send({message:err.message});
    }
}


const deleteSection =(model) =>async (req,res)=>{
    try{
        const item =await model.findByIdAndDelete(req.params.id).lean().exec();

        return res.status(200).send({deleted:item})
    }
    catch (err)
    {
        res.status(500).send({message:err.message})
    }
}





const bookupdate =(model)=> async (req,res)=>{
    try{
        const section = await model.findById(req.params.id,req.body).populate({path:"author_id",select:{_id:0,first_name:1,last_name:1}}).populate({path:"section_id",select:{Section_Catrogory:1,_id:0}}).lean().exec();

        if(section.checkout !=null)
        {
            return res.status(200).send({Book_status_update:section,BookStatus:"Not available for Issuing from Library"});
        }
        else{
            return res.status(200).send({Book_status_update:section,BookStatus:"Available for Issuing from Library"});
        }
        
        // return res.status(200).send({Book_status_update:section});
    }
    catch (err)
    {
       return res.status(500).send({message:err.message});
    }
}

const authorupdate =(model)=> async (req,res)=>{
    try{
        const section = await model.findById(req.params.id,req.body).populate({path:"book_id",select:{_id:0}}).lean().exec();

        return res.status(200).send({auhtor_updated:section});
    }
    catch (err)
    {
       return res.status(500).send({message:err.message});
    }
} 

module.exports ={getData,post,deleteSection,update,bookupdate,authorupdate}