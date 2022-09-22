import mockData from '../data/mockData';

export default function mockFetch() {
  return Promise.resolve({ json: () => Promise.resolve(mockData) });
};
