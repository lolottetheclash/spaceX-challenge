import Moment from 'react-moment';

const Launch = launch => {
  return (
    <div>
      <h4>{launch.rocket.rocket_name} 🚀</h4>
      <ul>
        {launch.details ? (
          <li>
            <strong>Launch Details: </strong> {launch.details}
          </li>
        ) : (
          <li>No details 😔</li>
        )}

        <li>
          <strong>Launch date: </strong>
          <Moment format="YYYY/MM/DD hh:mm">{launch.launch_date_utc}</Moment>
        </li>
        <li>
          <strong>Success: </strong> {JSON.stringify(launch.launch_success)}
        </li>
        <li>
          <a href={launch.links.video_link}>Youtube Video</a>
        </li>
      </ul>
    </div>
  );
};

export default Launch;
