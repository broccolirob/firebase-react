import nfl from './nfl.png';
import nba from './nba.png';
import mlb from './mlb.png';
import epl from './epl.png';
import nhl from './nhl.png';

export const collectIdsAndData = doc => ({ id: doc.id, ...doc.data() });
export const getChannelImg = channel => {
  let channelLogo = null;

  switch (channel.toLowerCase()) {
    case 'nfl':
      channelLogo = nfl;
      break;
    case 'nba':
      channelLogo = nba;
      break;
    case 'mlb':
      channelLogo = mlb;
      break;
    case 'epl':
      channelLogo = epl;
      break;
    case 'nhl':
      channelLogo = nhl;
      break;
    default:
      channelLogo = null;
  }

  return channelLogo;
};
