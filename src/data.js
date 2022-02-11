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
      icon: 'DiSass',
      iconLibrary: 'di',
    },
    {
      id: 2,
      title: 'Tailwind CSS',
      description: 'A utility-first CSS framework packed with classes like flex, pt-4, text-center and rotate-90 that can be composed to build any design, directly in your markup.',
      url: 'https://tailwindcss.com/',
      votes: generateVoteCount(),
      icon: 'SiTailwindcss',
      iconLibrary: 'si',
    },
    {
      id: 3,
      title: 'WordPress',
      description: 'The world\'s most popular website builder.',
      url: 'https://wordpress.com/',
      votes: generateVoteCount(),
      icon: 'DiWordpress',
      iconLibrary: 'di',
    },
    {
      id: 4,
      title: 'React.js',
      description: 'A JavaScript library for building user interfaces.',
      url: 'https://reactjs.org/',
      votes: generateVoteCount(),
      icon: 'DiReact',
      iconLibrary: 'di',
    },
    {
      id: 5,
      title: 'Laravel',
      description: 'Laravel is a web application framework with expressive, elegant syntax.',
      url: 'https://laravel.com/',
      votes: generateVoteCount(),
      icon: 'DiLaravel',
      iconLibrary: 'di',
    },
    {
      id: 6,
      title: 'Vue.js',
      description: 'An approachable, performant and versatile framework for building web user interfaces.',
      url: 'https://vuejs.org/',
      votes: generateVoteCount(),
      icon: 'SiVuedotjs',
      iconLibrary: 'si',
    },
    {
      id: 7,
      title: 'webpack',
      description: 'A static module bundler for modern JavaScript applications.',
      url: 'https://webpack.js.org/',
      votes: generateVoteCount(),
      icon: 'SiWebpack',
      iconLibrary: 'si',
    },
    {
      id: 8,
      title: 'Github',
      description: 'A code hosting platform for version control and collaboration.',
      url: 'https://github.com/',
      votes: generateVoteCount(),
      icon: 'SiGithub',
      iconLibrary: 'si',
    },
    {
      id: 9,
      title: 'Shopify',
      description: 'One platform with all the ecommerce and point of sale features you need to start, run, and grow your business.',
      url: 'https://www.shopify.com/',
      votes: generateVoteCount(),
      icon: 'SiShopify',
      iconLibrary: 'si',
    },
  ];

  const data = {
    items: items
  }

  export default data;