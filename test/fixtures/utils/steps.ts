
export function givenJestMocksAreReset() {
  jest.resetAllMocks();
}

export function givenMock(any: any, create = false) {
  if (create) any = jest.fn();
  return any as jest.Mock;
}
