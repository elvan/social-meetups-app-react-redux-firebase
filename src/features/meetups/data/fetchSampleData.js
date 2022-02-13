import { delay } from '../../../utils/delay';
import { sampleData } from './sampleData';

export const fetchSampleData = () => {
  return delay(1000).then(() => {
    return Promise.resolve(sampleData);
  });
};
