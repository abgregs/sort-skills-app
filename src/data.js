  function generateVoteCount() {
    return Math.floor((Math.random() * 50) + 15);
  }

  const items = [
    {
      id: 1,
      title: 'Sass',
      description: 'Sass is the most mature, stable, and powerful professional grade CSS extension language in the world.',
      url: 'https://sass-lang.com/',
      votes: generateVoteCount(),
    },
    {
      id: 2,
      title: 'Tailwind CSS',
      description: 'A utility-first CSS framework packed with classes like flex, pt-4, text-center and rotate-90 that can be composed to build any design, directly in your markup.',
      url: 'https://tailwindcss.com/',
      votes: generateVoteCount(),
    },
    {
      id: 3,
      title: 'WordPress',
      description: 'The world\'s most popular website builder',
      url: 'https://wordpress.com/',
      votes: generateVoteCount(),
    },
    {
      id: 4,
      title: 'React.js',
      description: 'A JavaScript library for building user interfaces',
      url: 'https://reactjs.org/',
      votes: generateVoteCount(),
    },
  ];

  const data = {
    items: items
  }

  export default data;