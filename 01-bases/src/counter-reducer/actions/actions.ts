export type CounterAction =
  | { type: 'INCREASEBY'; payload: { value: number } }
  | { type: 'RESET' };

// export const doReset = (): CounterAction => {
//   return {
//     type: 'RESET',
//   };
// };

export const doReset = (): CounterAction => ({
  type: 'RESET',
});

export const doIncreaseBy = (value: number): CounterAction => ({
  type: 'INCREASEBY',
  payload: { value: value },
});
