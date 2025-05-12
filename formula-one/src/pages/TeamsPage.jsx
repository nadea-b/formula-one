import TeamCard from '../components/teams/TeamCard';
import { fetchTeams } from '../services/dataService';
import { useState, useEffect } from 'react';


const TeamList = () => {
  const [teams, setTeams] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadTeams = async () => {
      setLoading(true);
      try {
        const data = await fetchTeams();
        
        console.log('Fetched teams:', data); // <-- Add this

        setTeams(data);
        setError(null);
      } catch (err) {
        setError('Failed to load teams data. Please try again.');
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    loadTeams();
  }, []);

  if (loading) return <div>Loading teams...</div>;
  if (error) return <div>{error}</div>;

  return (
    <div className="container mx-auto px-4 py-6">
      <h2 className="text-2xl font-formula">F1 Teams</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {teams.map((team) => (
          <TeamCard key={team.id} team={team} />
        ))}
      </div>
    </div>
  );
};

export default TeamList;
