global.express = require('express');
global.mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');
const passport = require('passport');
const session = require('express-session');
const morgan = require('morgan');
const helmet = require('helmet');
// const pgSession = require('connect-pg-simple')(session);
// const { Pool } = require('pg');
const MongoStore = require('connect-mongo')(session);
require('dotenv').config();
const PORT = process.env.PORT;

const db = require('./config/dbConnection').dbConnection();
global.app = express();

// app.use(function(req, res, next) {
//     res.header("Access-Control-Allow-Origin", "*");
//     res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
//     next();
// });

// app.options('*', cors());

const corsOptions = {
    origin: ['http://localhost:4200'],
    optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
    credentials: true
}
app.use(cors(corsOptions));
app.use(helmet());
app.use(helmet.noCache());
// app.use(helmet.featurePolicy({
//     features: {
//         syncXhr: ["'none'"]
//     }
// }));

app.use(
    session({
        // store: new pgSession({
        //     pool: new Pool({
        //         user: process.env.DATABASE_USERNAME,
        //         host: process.env.DATABASE_HOST,
        //         database: process.env.SESSION_DATABASE_NAME,
        //         password: process.env.DATABASE_PASSWORD,
        //         port: Number(process.env.DATABASE_PORT),
        //     })
        // }),
        store: new MongoStore({
            mongooseConnection: mongoose.connection
        }),
        secret: process.env.SESSION_SECRET,
        resave: false,
        saveUninitialized: false,
        cookie: {
            httpOnly: false,
            secureProxy: app.SSL,
            secure: 'auto',
            maxAge: 1000 * 30000
        }
    })
);

// app.use(morgan('tiny'));
// app.use(morgan(':method :url :status :res[content-length] - :response-time ms'));
// app.use(morgan('combined'));
app.use(morgan(':remote-addr - :remote-user [:date[clf]] ":method :url HTTP/:http-version" :status :res[content-length] ":referrer" ":user-agent"'))

app.use(bodyParser.raw());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(passport.initialize());
app.use(passport.session());

// app.use((request, response, next) => {
//     console.info("**************" + request.url);
//     next();
// });

require('./router');
require('./middlewares/passport').initialize();

app.listen(PORT, () => {
    console.log(`App listening on port ${PORT}!`)
});