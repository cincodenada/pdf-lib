import { getType, isType } from 'src/utils';

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
  it(`correctly determines the type of basic object`, () => {
    expect(getType({})).toEqual(`Object`);
  });
  it(`correctly determines the type of a constructor without a name`, () => {
    expect(getType(new (class {})())).toEqual(`class_1`);
  });
});
describe(`isType`, () => {
  it(`correctly determines the type of null`, () => {
    expect(isType(null, `null`)).toEqual(true);
  });
  it(`correctly determines the type of undefined`, () => {
    expect(isType(undefined, `undefined`)).toEqual(true);
  });
  it(`correctly determines the type of string`, () => {
    expect(isType(`example`, `string`)).toEqual(true);
  });
  it(`correctly determines the type of number`, () => {
    expect(isType(42, `number`)).toEqual(true);
  });
  it(`correctly determines the type of boolean`, () => {
    expect(isType(true, `boolean`)).toEqual(true);
  });
  it(`correctly determines the type of symbol`, () => {
    expect(isType(Symbol(`example`), `symbol`)).toEqual(true);
  });
  it(`correctly determines the type of bigint`, () => {
    expect(isType(BigInt(42), `bigint`)).toEqual(true);
  });
  it(`correctly determines the type of Date`, () => {
    expect(isType(new Date(), Date)).toEqual(true);
  });
  it(`correctly determines the type of Array`, () => {
    expect(isType(new Array(), Array)).toEqual(true);
  });
  it(`correctly determines the type of Uint8Array`, () => {
    expect(isType(new Uint8Array(0), Uint8Array)).toEqual(true);
  });
  it(`correctly determines the type of ArrayBuffer`, () => {
    expect(isType(new ArrayBuffer(0), ArrayBuffer)).toEqual(true);
  });
  it(`allows subclasses`, () => {
    expect(isType(Buffer.from("test"), ArrayBuffer)).toEqual(true);
  });
  it(`correctly determines the type of Example`, () => {
    expect(isType(function () {}, Function)).toEqual(true);
  });
});
