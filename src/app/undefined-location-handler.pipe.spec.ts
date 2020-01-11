import { UndefinedLocationHandlerPipe } from './undefined-location-handler.pipe';

describe('UndefinedLocationHandlerPipe', () => {
  it('create an instance', () => {
    const pipe = new UndefinedLocationHandlerPipe();
    expect(pipe).toBeTruthy();
  });

  it('transform should return NA if value not defined.', () => {
    const pipe = new UndefinedLocationHandlerPipe();
    expect(pipe.transform(undefined)).toEqual('NA');
  });

  it('transform should return the value passed if value found.', () => {
    const pipe = new UndefinedLocationHandlerPipe();
    expect(pipe.transform('California')).toEqual('California');
  });
});
