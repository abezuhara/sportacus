import workoutsList from './workoutsListMock';
import WorkoutItem from '../WorkoutItem';
import DistanceSlider from '../DistanceSlider';

import './index.css';

const WorkoutsList = () => {
  return (
    <div className='workouts-list'>
      <div className='workout-list-wrapper'>
        {workoutsList.map((item) => (
          <WorkoutItem key={item.id} {...item} />
        ))}
      </div>
      <DistanceSlider />
    </div>
  );
};

export default WorkoutsList;
