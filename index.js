const ahoy = require('ssb-ahoy')
const StartMenus = require('./menu')

const plugins = [
  'ssb-master',
  'ssb-unix-socket',
  'ssb-no-auth',
  'ssb-onion',
  'ssb-lan',
  'ssb-logging',

  'ssb-conn',
  'ssb-replicate',
  'ssb-friends',

  'ssb-blobs',
  'ssb-ws',

  'ssb-about',
  'ssb-backlinks',
  'ssb-chess-db',
  'ssb-ebt',
  'ssb-friend-pub',
  'ssb-meme',
  'ssb-private',
  'ssb-query',
  'ssb-search',
  'ssb-suggest',
  'ssb-tangle',
  'ssb-unread',

  'ssb-invite',

  'ssb-device-address', // for peer-invites
  'ssb-identities', // for peer invites
  'ssb-peer-invites'
]

ahoy({
  title: 'Patchbay',
  plugins,
  // appDir: '../patchbay', // only used when ssb-ahoy is symlinked in!
  appPath: './ui.js',
  onReady: (state) => {
    StartMenus(state)
  }
})
