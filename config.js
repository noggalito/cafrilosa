// # Ghost Configuration
// Setup your Ghost install for various [environments](http://support.ghost.org/config/#about-environments).

// Ghost runs in `development` mode by default. Full documentation can be found at http://support.ghost.org/config/

require('./helpers')();

var path = require('path'),
    config;

config = {
  // ### Production
  // When running Ghost in the wild, use the production environment.
  // Configure your URL and mail settings here
  production: {
    url: 'https://cafrilosa.com',
    mail: {
      transport: 'SMTP',
      options: {
        service: 'mailgun',
        auth: {
          user: process.env.MAILGUN_SMTP_LOGIN,
          pass: process.env.MAILGUN_SMTP_PASSWORD
        }
      }
    },
    database: {
      client: 'postgres',
      connection: {
        host: '127.0.0.1',
        user: process.env.DB_CAFRILOSA_USER,
        password: process.env.DB_CAFRILOSA_PASSWORD,
        database: process.env.DB_CAFRILOSA_DATABASE
      },
      debug: false
    },
    server: {
      host: '127.0.0.1',
      port: process.env.PORT
    }
  },

  staging: {
    url: 'http://cafrilosa-dev.herokuapp.com',
    mail: {
      transport: 'SMTP',
      options: {
        service: 'mailgun',
        auth: {
          user: process.env.MAILGUN_SMTP_LOGIN,
          pass: process.env.MAILGUN_SMTP_PASSWORD
        }
      }
    },
    database: {
      client: "postgres",
      connection: process.env.DATABASE_URL,
      debug: false
    },
    server: {
      host: '0.0.0.0',
      port: process.env.PORT
    },
    storage: {
      active: 'ghost-cloudinary-store'
    }
  },

  // ### Development **(default)**
  development: {
      // The url to use when providing links to the site, E.g. in RSS and email.
      // Change this to your Ghost blog's published URL.
      url: 'http://localhost:2368',

      // Example mail config
      // Visit http://support.ghost.org/mail for instructions
      // ```
       mail: {
         transport: 'SMTP',
         options: {
           service: 'mailgun',
           auth: {
             user: 'development@app9df5f3aff2604233870d17a1739cc4b4.mailgun.org',
             pass: 'iiBnl7em!OLa'
           }
         }
       },
      // ```

      // #### Database
      // Ghost supports sqlite3 (default), MySQL & PostgreSQL
      database: {
          client: 'sqlite3',
          connection: {
              filename: path.join(__dirname, '/content/data/ghost-dev.db')
          },
          debug: false
      },
      // #### Server
      // Can be host & port (default), or socket
      server: {
          // Host to be passed to node's `net.Server#listen()`
          host: '127.0.0.1',
          // Port to be passed to node's `net.Server#listen()`, for iisnode set this to `process.env.PORT`
          port: '2368'
      },
      // #### Paths
      // Specify where your content directory lives
      paths: {
          contentPath: path.join(__dirname, '/content/')
      }
  },

  // **Developers only need to edit below here**

  // ### Testing
  // Used when developing Ghost to run tests and check the health of Ghost
  // Uses a different port number
  testing: {
      url: 'http://127.0.0.1:2369',
      database: {
          client: 'sqlite3',
          connection: {
              filename: path.join(__dirname, '/content/data/ghost-test.db')
          }
      },
      server: {
          host: '127.0.0.1',
          port: '2369'
      },
      logging: false
  },

  // ### Testing MySQL
  // Used by Travis - Automated testing run through GitHub
  'testing-mysql': {
      url: 'http://127.0.0.1:2369',
      database: {
          client: 'mysql',
          connection: {
              host     : '127.0.0.1',
              user     : 'root',
              password : '',
              database : 'ghost_testing',
              charset  : 'utf8'
          }
      },
      server: {
          host: '127.0.0.1',
          port: '2369'
      },
      logging: false
  },

  // ### Testing pg
  // Used by Travis - Automated testing run through GitHub
  'testing-pg': {
      url: 'http://127.0.0.1:2369',
      database: {
          client: 'pg',
          connection: {
              host     : '127.0.0.1',
              user     : 'postgres',
              password : '',
              database : 'ghost_testing',
              charset  : 'utf8'
          }
      },
      server: {
          host: '127.0.0.1',
          port: '2369'
      },
      logging: false
  }
};

module.exports = config;
