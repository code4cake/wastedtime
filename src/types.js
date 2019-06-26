// @flow
// @format

// types for calculate-availability.js
export type Prompt = {
  prompt: Promise<any>,
}

export type Answers = {
  output: Array<number>,
}

export type isNumber = {
  isNumber: (value: any) => number | string,
}

export type Questions = {
  questions: Array<{}>,
}

export type Ask = {
  ask: () => string,
}

// types for calculate-availability.js
export type LogMessages = {
  [name: string]: string,
}
