import { getType } from 'src/utils';

describe(`getType`, () => {
  it(`correctly determines the type of null`, () => {
    expect(getType(null)).toEqual(`null`);
  });
  it(`correctly determines the type of undefined`, () => {
    expect(getType(undefined)).toEqual(`undefined`);
  });
  it(`correctly determines the type of string`, () => {
    expect(getType(`example`)).toEqual(`string`);
  });
  it(`correctly determines the type of NaN`, () => {
    expect(getType(NaN)).toEqual(`NaN`);
  });
  it(`correctly determines the type of number`, () => {
    expect(getType(42)).toEqual(`number`);
  });
  it(`correctly determines the type of boolean`, () => {
    expect(getType(true)).toEqual(`boolean`);
  });
  it(`correctly determines the type of symbol`, () => {
    expect(getType(Symbol(`example`))).toEqual(`symbol`);
  });
  it(`correctly determines the type of bigint`, () => {
    expect(getType(BigInt(42))).toEqual(`bigint`);
  });
  it(`correctly determines the type of ArrayBuffer`, () => {
    expect(getType(new ArrayBuffer(0))).toEqual(`ArrayBuffer`);
  });
  it(`correctly determines the type of Uint8Array`, () => {
    expect(getType(new Uint8Array(0))).toEqual(`Uint8Array`);
  });
  it(`correctly determines the type of Example`, () => {
    expect(getType({ name: `Example` })).toEqual(`Example`);
  });
  it(`correctly determines the type of a constructor without a name`, () => {
    expect(getType(new class {})).toEqual(`class {}`);
  });
});
