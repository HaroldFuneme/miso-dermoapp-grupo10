import { CustomTitlePipe } from './custom-title.pipe';

describe('CustomTitlePipe', () => {
  it('create an instance', () => {
    const pipe = new CustomTitlePipe();
    expect(pipe.transform('titulo de pag')).toBe('Titulo de pag');
  });
});
