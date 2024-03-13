import React from "react";

function TeamMembers() {
  const teamMembers = [
    {
      id: 1,
      name: "Ashley Nord",
      image: (src = "./assets/ashNord-pic.jpeg"),
      bio: "",
      technologies: "",
      role: "",
    },
    {
      id: 2,
      name: "Aletheia Bentley",
      image: src - "../assets/Aletheia.jpg",
      bio: "",
      technologies: "",
      role: "",
    },
    {
      id: 3,
      name: "Jazmin Nova",
      image: "",
      bio: "",
      technologies: (src = "../assets/Jazz-aboutus-pic.jpeg"),
      role: "",
    },
  ];

  return (
    <div className="py-8 bg-gray-200">
      <div className="container mx-auto px-4">
        <h3 className="text-2xl font-semibold">Our Team</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {teamMembers.map((member) => (
            <div key={member.id} className="col-span-1 md:col-span-1">
              <div className="bg-white rounded-lg shadow-lg">
                <div className="p-4">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-auto"
                  />
                  <h3 className="text-xl font-semibold mt-4">{member.name}</h3>
                  <p>{member.bio}</p>
                  <p>
                    <strong>Technologies:</strong> {member.technologies}
                  </p>
                  <p>
                    <strong>Role:</strong> {member.role}
                  </p>
                </div>
                <div className="p-4 ">
                  <a
                    href={`https://github.com/${member.name}`}
                    className="hover:underline">
                    GitHub
                  </a>
                  <a
                    href={`https://www.linkedin.com/in/${member.name}`}
                    className="hover:underline ml-4">
                    LinkedIn
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default TeamMembers;
