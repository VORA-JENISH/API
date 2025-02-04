const demo = require("../model/demo");

module.exports.demo_insert = async(req,res)=>{
    const test = await demo.create(req.body);
    res.status(200).json({
        massage:"sucsee"
    })
}
module.exports.get_data = async(req,res)=>{
    const data = await demo.find();
    res.status(200).json({
        massage:"sucess get data",
        data
    })
}
module.exports.get_update_data = async(req,res) => {
    var id = req.params.id;
    var data = await demo.findById(id);
    res.status(200).json({
        massage:"sucess get data",
        data
    })
}
module.exports.update_get_data = async (req,res) => {
    var id = req.params.id;
    var data = await demo.findByIdAndUpdate(id,req.body);
    res.status(200).json({
        massage:"sucess update data"
        })
}

module.exports.delete_data = async (req,res) => {
    var id = req.params.id;
    var data = await demo.findByIdAndDelete(id);
    res.status(200).json({
        massage:"sucess delete data"
        })
}