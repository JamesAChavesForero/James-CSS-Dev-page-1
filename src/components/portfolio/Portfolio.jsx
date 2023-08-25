import React from 'react';
import project1Image from '../../assets/project1.jpg';
import project2Image from '../../assets/project2.jpg';
import project3Image from '../../assets/project3.jpg';
import project4Image from '../../assets/project4.jpg';
import project5Image from '../../assets/project5.png';
import project6Image from '../../assets/project6.png';


const Portfolio = () => {
  const projects = [
    {
      title: 'Rick & Morty App',
      description: 'This is a "Rick-n-Morty Favorite Chartacter finder / List maker" made in React.js',
      link: 'https://github.com/JamesChavesRepos/RickNMortyReactSearch',
      image: project1Image
    },
    {
      title: 'Project 2',
      description: 'This is a "Rick-n-Morty Favorite Chartacter finder / List maker" made in React.js',
      link: 'https://github.com/yourusername/project2',
      image: project2Image
    },
    {
      title: 'Project 3',
      description: 'A description of your first project.',
      link: 'https://github.com/yourusername/project1',
      image: project3Image
    },
    {
      title: 'Project 4',
      description: 'A description of your second project.',
      link: 'https://github.com/yourusername/project2',
      image: project4Image
    },
    {
      title: 'Project 5',
      description: 'A description of your second project.',
      link: 'https://github.com/yourusername/project2',
      image: project5Image
    },
    {
      title: 'Project 6',
      description: 'A description of your second project.',
      link: 'https://github.com/yourusername/project2',
      image: project6Image
    },
  ];

  return (
    <section className="hover:bg-gray-400 bg-[#ffffff34] text-gray-800 font-sans z-[10]">
      <section id="portfolio "className="text-white ">
        <h2 className="text-5xl font-bold z-[1] animate-bounce">Projects</h2>
        <ul className="!z-[2] flex flex-col sm:flex-row align-middle justify-between p-10 ">
          {projects.map((project, index) => (
            <li key={index} className="bg-[#1f1f38] p-3 rounded-lg shadow-md transition-transform hover:transform hover:-translate-y-2 hover:shadow-lg z-[2] !m-2 ">
              <h3 className="text-xl font-semibold text-navy-700 ">{project.title}</h3>
              <p className="">{project.description}</p>
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="block text-navy-700 mt-2 hover:underline"
              >
                View on GitHub
              </a>
              <img
                src={project.image}
                alt={project.title}
                className="w-full max-w-md mx-auto mt-4 rounded-md border-slate-200"
              />
            </li>
          ))}
        </ul>
      </section>
      <footer className="text-center py-4 text-gray-500">
        Here are some recent projects I've worked on
      </footer>
    </section>
  );
};

export default Portfolio;
