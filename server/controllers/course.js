const Course = require('../models/courseSchema')
exports.add_Course = async (req,res) => 
{
try {
    const {Title,Description,Content} = req.body;
    const newCourse=new Course({Title,Description,Content,owner:req.userId})
    
const course=await newCourse.save()
res.status(200).json(course)
} catch (error) {
    res.status(500).json({message:`something wrong:${error}`})
 
}
}
exports.get_Course=async (req,res)=>
{
    try {
        const courses = await Course.find({}).populate('owner', '-password -__v').select('-__v');
        res.status(200).json(courses)
    } catch (error) {
        res.status(500).json({message:`no Courses:${error}`})
    }
    
}
 exports.delete_Course = async (req,res)=>
{
    try {
        const courses = await Course.findByIdAndDelete({_id: req.params.id});
        /*res.status(200).json(courses)*/
        res.json({ msg: "courses was deleted" });
    } catch (error) {
        res.status(500).json({message:`no Course deleted:${error}`})
    }
    
}