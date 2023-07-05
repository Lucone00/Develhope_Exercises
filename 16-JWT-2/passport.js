const dotenv = require("dotenv");
dotenv.config();
const pgPromise = require("pg-promise");
const passport = require("passport");
const passportJWT = require("passport-jwt");
const db = pgPromise()("psql://postgres:postgres@localhost:5432/postgres");

const { SECRET } = process.env;

passport.use(
  new passportJWT.Strategy(
    {
      secretOrKey: SECRET,
      jwtFromRequest: passportJWT.ExtractJwt.fromAuthHeaderAsBearerToken(),
    },
    async (payload, done) => {
      const user = db.one(`SELECT * FROM users Where id=$1`, payload.id);
      console.log(user);

      try {
        return user ? done(null, user) : done(new Error("User not found!"));
      } catch (error) {
        done(error);
      }
    }
  )
);