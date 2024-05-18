import { useState } from 'react';
import './Pricing.css';

const PricingTable = () => {
  const [duration, setDuration] = useState('45');
  const [course, setCourse] = useState('General English');
  const [price, setPrice] = useState(15); // Default price for General English 45 min

  // Function to handle duration selection
  const handleDurationChange = (e) => {
    setDuration(e.target.value);
    calculatePrice(e.target.value, course);
  };

  // Function to handle course selection
  const handleCourseChange = (e) => {
    setCourse(e.target.value);
    calculatePrice(duration, e.target.value);
  };

  // Function to calculate price based on duration and course
  const calculatePrice = (duration, course) => {
    switch (course) {
      case 'General English':
        setPrice(duration === '45' ? 15 : 20);
        break;
      case 'Business English':
        setPrice(duration === '45' ? 20 : 25);
        break;
      case 'Exam Preparation':
        setPrice(duration === '45' ? 25 : 30);
        break;
      default:
        setPrice('Price upon request');
    }
  };

  return (
    <div className='pricing'>
   
      <div>
        <label htmlFor="course" className='course-label'>Choose the name of the course:</label>
        <select id="course" className='select-course'value={course} onChange={handleCourseChange}>
          <option value="General English" className='options'>General English</option>
          <option value="Business English"className='options'>Business English</option>
          <option value="Exam Preparation"className='options'>Exam Preparation</option>
        </select>
      </div>

      <div>
        <label htmlFor="duration" className='duration-label'>Choose the duration of the lesson:</label>
        <select id="duration"className='select-duration' value={duration} onChange={handleDurationChange}>
          <option value="45"className='options'>45 min</option>
          <option value="60"className='options'>60 min</option>
        </select>
      </div>

      <div>
        <label htmlFor="price" className='price-label'> RATE (Euro):</label>
        <input type="text" className='price-input'id="price" value={price} readOnly />
      </div>
    </div>
  );
};

export default PricingTable;
