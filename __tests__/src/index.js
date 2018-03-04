import ChimeePlayer from 'index';
import { $ } from 'chimee-helper';

$('<div id="wrapper"/>').appendTo(document.body);
test('config empty', () => {
  expect(() => new ChimeePlayer()).toThrowError('You must pass an Object as config when you new ChimeePlayer');
  expect(() => new ChimeePlayer({})).toThrowError('You must pass in an legal object');
});

test('construction', () => {
  const src = 'http://t.t/t.mp4';
  const player = new ChimeePlayer({
    src,
    isLive: false,
    box: 'native',
    wrapper: '#wrapper',
    autoplay: true,
    controls: true,
    preset: {},
  });
  expect(player.src).toBe(src);
});
