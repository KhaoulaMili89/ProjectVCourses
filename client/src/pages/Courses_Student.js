import React , {useEffect} from 'react'
import {useSelector} from 'react-redux'
import CoursesCardStudent from '../components/Courses/CoursesCardStudent'
import {useDispatch} from 'react-redux'
import {get_Course} from '../actions/courseAction'


const Courses = () => {
    const id = useSelector(state => state.authReducer.user._id)

    const dispatch = useDispatch();
    useEffect(() => {
        dispatch( get_Course() );
    },[]);

    const courses = useSelector( (state) => state.courseReducer.courses)
    return (

        <div> 
            <h1 style={{  alignText:'center'}}>All Courses</h1>
           <p style={{ display:'flex', alignContent:'center' ,flexWrap: 'wrap'}}>
         {courses && courses.map((course) => <CoursesCardStudent key = {course._id} course = {course} />)} </p>
       </div>
      
    );
};

export default Courses;