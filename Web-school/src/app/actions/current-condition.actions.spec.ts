import * as CurrentConditionActions from './current-condition.actions';

describe('CurrentCondition', () => {
  it('should create an instance', () => {
    expect(new CurrentConditionActions.LoadCurrentConditions()).toBeTruthy();
  });
});
