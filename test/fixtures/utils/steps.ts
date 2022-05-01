
export function givenJestMocksAreReset() {
  jest.resetAllMocks();
}

export function givenMock(any: any) {
  return any as jest.Mock;
}
