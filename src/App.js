import './App.css';
import CourseCard from './components/Courses/CourseCard';
import Sidebar from './components/Sidebar/Sidebar';
import CourseTab from './components/Courses/CourseTab';
import ProfileMenu from './components/Profile/ProfileMenu';
import Notification from './components/Notification/Notification';
import SerachBar from './components/Search/SearchBar';
import LearningChart from './components/Charts/LearningChart';
import CourseProgress from './components/Courses/CourseProgress';
import MyCourse from './components/Courses/MyCourse';
import Main from './components/Layout/Main'
import Content from './components/Content/Content';





function App() {
  return (
    <div className="App">
      {/* npm install --save chart.js */}
    {/* <Sidebar /> */}

    {/* <CourseCard name="Learn Figma" icon="" author="Christopher Morgan" duration="6h 30min" rating="4,6" handleClick /> */}
    {/* <Card height="50px"><h1>Hello John</h1></Card> */}


    {/* <CourseTab /> */}
    {/* <ProfileMenu />
    <Notification count='1' /> */}

    {/* <SerachBar /> */}

    {/* <LearningChart /> */}

 

  {/* <CourseProgress value="83" />

  <MyCourse  name="Learn Figma" icon="" author="Christopher Morgan" progress="83" /> */}


<Main>
<Sidebar />
<Content />
</Main>

    </div>
  );
}

export default App;
