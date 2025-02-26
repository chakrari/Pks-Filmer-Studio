import React from "react";
import { FaFacebookF, FaInstagram } from "react-icons/fa";
import PritamPhoto from "../../assets/Pks_Photos/PKs_Clean_Photos/Team/Edited_Photos/Pritam_Edited.webp";
import SamirPhoto from "../../assets/Pks_Photos/PKs_Clean_Photos/Team/Edited_Photos/Samir_Edited.webp";
import BhawaniPhoto from "../../assets/Pks_Photos/PKs_Clean_Photos/Team/Edited_Photos/Bhawani_Edited.webp";
import SubhajitPhoto from "../../assets/Pks_Photos/PKs_Clean_Photos/Team/Edited_Photos/Subhajit_Edited.webp";
import DebashishPhoto from "../../assets/Pks_Photos/PKs_Clean_Photos/Team/Edited_Photos/Debashish_Edited.webp";

const teamMembers = [
  {
    name: "Pritam Kumar Shaw",
    role: "FOUNDER & CINEMATOGRAPHER",
    description:
      "The visionary behind the lens, turning dreams into cinematic reality, capturing every love story with flair, and ensuring each moment is a masterpiece waiting to be unveiled.",
    image: PritamPhoto,
    facebook: "https://www.facebook.com/pritamkr.shaw161119" ,
    instagram: "https://www.instagram.com/pritamkr.shaw/" 
  },
  {
    name: "Samir Yadav",
    role: "CO-FOUNDER & DRONE EXPERT",
    description:
      "An aerial artist adding breathtaking perspectives, this team member makes your love story soar above the rest, capturing stunning views that showcase the beauty of your day from new heights.",
    image: SamirPhoto,
    facebook: "https://www.facebook.com/people/Samir-Yadav/pfbid0QJEGJaZc898Q8RtZUkEpJz7BGRfbAVvPCTsb4KPbVpAbmsSsLCSWB58PB18kQTfJl/" ,
    instagram: "https://www.instagram.com/rahulprince4025/" 
  },
  {
    name: "Debashish Sahani",
    role: "Lead Photographer",
    description:
      "Expert in snapping smiles and spontaneous moments, this professional ensures joy radiates in every shot, making your special day unforgettable through creative angles and perfect timing.",
    image: DebashishPhoto,
    facebook: "https://www.facebook.com/debasis.sahani.18" ,
    instagram: "https://www.instagram.com/debasish_sahani0/" 
  },
  {
    name: "Bhawani S Das",
    role: "Associate Photographer",
    description:
      "The backup hero capturing candid magic, this skilled photographer ensures no precious moment goes unnoticed, complementing the lead photographer’s work with a keen eye for detail and spontaneity.",
    image: BhawaniPhoto,
    facebook: "https://www.facebook.com/bhabanisankar.dash.73" ,
    instagram: "https://www.instagram.com/rahuldash998/" 
  },
  {
    name: "Subhajit Das",
    role: "Editor",
    description:
      "The magician transforming raw shots into stunning visuals, weaving emotions into your memories, ensuring that every image tells your unique story, enhancing colors, and creating a captivating final product.",
    image: SubhajitPhoto,
    facebook: "https://www.facebook.com/subha314" ,
    instagram: "https://www.instagram.com/photogenices_art/" 
  },
];

const TeamDetails = () => {
  return (
    <div className="flex flex-col items-center justify-center px-6 py-12 space-y-48">
      {teamMembers.map((member, index) => (
        <div
          key={index}
          className={`flex flex-col md:flex-row items-center max-w-6xl w-full  gap-10 md:gap-60 ${
            index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
          }`}
        >
          {/* Image Section */}
          <div className="flex justify-center md:w-1/2">
            <img
              src={member.image}
              alt={member.name}
              className="w-72 h-72 md:w-96 md:h-96 rounded-lg object-cover shadow-xl"
            />
          </div>

          {/* Text Section */}
          <div className="text-center md:text-center md:w-1/2">
            <h1 className="text-3xl font-bold">{member.name}</h1>
            <p className="text-lg mt-2 font-light uppercase ">{member.role}</p>
            <p className="text-lg leading-relaxed mt-4 ">{member.description}</p>
            <div className="flex justify-center md:justify-center gap-4 mt-4">
              <FaFacebookF className="text-2xl cursor-pointer transition duration-300 hover:transition-transform hover:duration-300 hover:scale-110 hover:text-blue-600" onClick={() => window.open(member.facebook, "_blank")}/>
              <FaInstagram className="text-2xl cursor-pointer transition duration-300 hover:transition-transform hover:duration-300 hover:scale-110 hover:text-[#E1306C]" onClick={() => window.open(member.instagram, "_blank")}/>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default TeamDetails;
