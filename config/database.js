module.exports = ({ env }) => ({
  connection: {
    client: 'postgres',
    connection: {
      host: env('DATABASE_HOST', 'dpg-cfq3u3pgp3jo0b5gcdf0-a.oregon-postgres.render.com'),
      port: env.int('DATABASE_PORT', 5432),
      database: env('DATABASE_NAME', 'guitarla_o7e7'),
      user: env('DATABASE_USERNAME', 'root'),
      password: env('DATABASE_PASSWORD', 'k9pyu3GLZDXBjR29JhV2gI1Jp3Zro0Cs'),
      ssl: env.bool('DATABASE_SSL', true),
    },
  },
});
