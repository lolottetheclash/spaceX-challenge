import { useQuery } from '@apollo/client';
import GET_LAUNCHES from '../queries/getLaunches';
import Launch from './Launch';

const Launches = () => {
  const { loading, error, data } = useQuery(GET_LAUNCHES);
  if (loading) return <p> Loading launches data ...</p>;
  if (error) return <p> Error while loading launches: {error}</p>;
  console.log(data);

  return (
    <div>
      <h3 className="launches-title">- Launches List from SpaceX -</h3>
      {data.launches.map(launch => (
        <Launch key={launch.launch_date_utc} {...launch} />
      ))}
    </div>
  );
};

export default Launches;
