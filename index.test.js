const source = require('./index.js');

describe("deterministicPartitionKey Function Test", () => {
  test("testing in case if event's value is null", () => {
    const event = null;
    expectedValue = "0";
    expect(source.deterministicPartitionKey(event)).toBe(expectedValue);
  })

  test("testing in case if event's value is {}", () => {
    const event = {};
    expectedValue = "c1802e6b9670927ebfddb7f67b3824642237361f07db35526c42c555ffd2dbe74156c366e1550ef8c0508a6cc796409a7194a59bba4d300a6182b483d315a862";
    expect(source.deterministicPartitionKey(event)).toBe(expectedValue);
  })

  test("testing in case if event's value is {}", () => {
    const event = {
      partitionKey: "Sample Key"
    };
    expectedValue = "Sample Key";
    expect(source.deterministicPartitionKey(event)).toBe(expectedValue);
  })

  test("testing in case if event's value is {}", () => {
    const event = {
      partitionKey: "Sample Key Sample Key Sample Key Sample Key Sample Key Sample Key Sample Key Sample Key Sample Key Sample Key Sample Key Sample Key Sample Key Sample Key Sample Key Sample Key Sample Key Sample Key Sample Key Sample Key Sample Key Sample Key Sample Key Sample Key"
    };
    expectedValue = "922cad033080646f304ba9a96da509c80026891e55b35f4989d54864bc46a18cece2e4a273dc81ae1c8eb2d6d5c600208cdcbbb4d2312d229f662bf18f2c557f";
    expect(source.deterministicPartitionKey(event)).toBe(expectedValue);
  })
})