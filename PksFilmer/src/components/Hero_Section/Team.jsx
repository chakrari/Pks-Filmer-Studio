import React from "react";
import { teams } from "../../teamsData";

const Team = () => {
  return (
    <div className="py-8 w-full">
      {/* Container for the team members */}
      <div className="flex flex-wrap gap-16 justify-center items-center">
        {teams.map((team) => (
          <div
            key={team.id}
            className="text-center w-40 flex flex-col items-center"
          >
            {/* Profile Image */}
            <img
              src={team.image}
              alt={`Profile picture of ${team.name}, ${team.role}`}
              className="rounded-full shadow-lg mb-4 w-32 h-32 object-cover border-4 border-gray-700"
            />
            {/* Team Name and Role */}
            <h2 className="text-xl font-semibold">{team.name}</h2>
            <h3 className="text-sm font-medium text-gray-500">{team.role}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Team;
