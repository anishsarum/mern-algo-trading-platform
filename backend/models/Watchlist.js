const mongoose = require('mongoose');

const WatchlistSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  assets: [{
    symbol: { type: String, required: true },
    name: String,
    addedAt: { type: Date, default: Date.now }
  }]
});

module.exports = mongoose.model('Watchlist', WatchlistSchema);
