const User=require("../../models/user");
const factory = require("../handlerFactory");


exports.getUsers=async (req,res)=>{
    try{
        const users= await User.find({});
        
    const id=req.user.id;
        var lists = users.filter(x => {
            return x.id != id;
          });
          
          
         
         let final= [];
         let i=0;
         let j=lists.length -1 ;
          lists.forEach(x => {
              if(x.isAdmin){
                final[i]=x;
                i++;
              }else{
                  final[j]=x;
                  j--;
              }
          });

    res.status(200).json({
        status: "success",
        data: {
            final,
        },
      });
    }catch (err) {
    console.log(err);
    return res
      .status(424)
      .json({ status: "Failed", message: "Request failed" });
  }
}

exports.changeAdmin=async(req,res)=>{
    try{
        const id = req.params.id;
        const user=await User.findById(id);
        if(!user){
            res.status(404).json({ status: "Failed", message: "User not found!" });
        }
        
        var data;
        var isAdmin;
        if(user.isAdmin){
            data={isAdmin:false};
        }else{
            data={isAdmin:true};

        };
    await User.findByIdAndUpdate(id, data);
    const newUser=await User.findById(id);
    return res.status(200).json({ status: "Success", data: newUser});

      }catch (err) {
        console.log(err);
        return res
          .status(424)
          .json({ status: "Failed", message: "Request failed" });
      }
   
}

exports.deleteUser=factory.deleteOne(User);