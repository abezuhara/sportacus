import {getDistanceFromCoords} from '../../helpers/getDistanceFromCoords';
import {currentLatitude, currentLongitude} from '../../mocks/currentCoordinates';

import './index.css';

const WorkoutItem = ({id, title, tutor, imgUrl, longitude, latitude, description, instUrl, address}) => {
  return (
    <div className='workouts-item'>
      <img className='workouts-item__main-img' src={imgUrl} alt='img' />
      <div className='workouts-item__content'>
        <div className='workouts-item__main-info'>
          <div className='workouts-item__title'>{title}</div>
          <div className='workouts-item__tutor'>{tutor}</div>
        </div>
        <div className='workouts-item__distance-info'>
          <div className='workouts-item__address'>{address}</div>
          <div className='workouts-item__distance'>
            {Math.round(getDistanceFromCoords(currentLatitude, currentLongitude, latitude, longitude))}km
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorkoutItem;
