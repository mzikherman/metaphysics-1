import newrelic from 'artsy-newrelic';
import xapp from 'artsy-xapp';
import cors from 'cors';
import debug from 'debug';
import morgan from 'morgan';
import express from 'express';
import forceSSL from 'express-force-ssl';
import graphqlHTTP from 'express-graphql';
import schema from './schema';
import loaders from './lib/loaders';
import config from './config';
const {
  PORT,
  NODE_ENV,
  GRAVITY_API_URL,
  GRAVITY_ID,
  GRAVITY_SECRET,
} = process.env;

const app = express();
const port = PORT || 3000;

app.use(newrelic);

if (NODE_ENV === 'production') {
  app.set('forceSSLOptions', { trustXFPHeader: true }).use(forceSSL);
}

xapp.on('error', (err) => {
  debug('error')(err);
  process.exit();
});

xapp.init({
  url: GRAVITY_API_URL,
  id: GRAVITY_ID,
  secret: GRAVITY_SECRET,
}, () => config.GRAVITY_XAPP_TOKEN = xapp.token);

app.get('/favicon.ico', (req, res) => {
  res
    .status(200)
    .set({ 'Content-Type': 'image/x-icon' })
    .end();
});

app.all('/graphql', (req, res) => res.redirect('/'));

app.use('/', cors(), morgan('combined'), graphqlHTTP(() => {
  loaders.clearAll();

  return {
    schema,
    graphiql: true,
  };
}));

app.listen(port, () => debug('info')(`Listening on ${port}`));
