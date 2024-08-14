import { Benchmark } from '../dist/benchmark';
import './index.scss';

// Benchmark data for different cases
// Unit: second
// From: https://github.com/rspack-contrib/performance-compare
const BENCHMARK_DATA = {
  foo: {
    label: 'Webpack',
    metrics: [
      // { desc: 'dev', time: 5.02 },
      { desc: 'build', time: 6.52 },
    ],
  },
  bar: {
    label: 'Rspack v0.1',
    metrics: [
      // { desc: 'dev', time: 0.69 },
      { desc: 'build', time: 0.64 },
    ],
  },
  baz: {
    label: 'Rspack v1.0',
    metrics: [
      // { desc: 'dev', time: 0.41 },
      { desc: 'build', time: 0.28 },
    ],
  },
};

export const BenchmarkStory = () => (
  <div style={{ margin: 20 }}>
    <Benchmark data={BENCHMARK_DATA} />
  </div>
);

export default {
  title: 'Benchmark',
};
