import { useSelector, useDispatch } from 'react-redux';
import { addCourse } from './courseSlice';
import './App.css';

function App() {
  const courses = useSelector(
    (state) => state.courses
  );

  const dispatch = useDispatch();

  const handleAdd = () => {
    dispatch(
      addCourse({
        id: 3,
        title: 'Redux Toolkit'
      })
    );
  };

  return (
    <div>
      <h1>Course Management</h1>

      <h2>Total Courses: {courses.length}</h2>

      <button onClick={handleAdd}>
        Add Course
      </button>

      {courses.map((course) => (
        <p key={course.id}>
          {course.title}
        </p>
      ))}
    </div>
  );
}

export default App;
