const philosophers = require('philosophers-names');
const slug = require('slug');

function serverName() {
  const name = philosophers.random();

  // Only use last names
  const lastname = name.split(' ').pop();

  return slug(lastname).toLowerCase();
}

module.exports = serverName;
