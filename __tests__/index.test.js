// @format

const calculateAvailability = require('../lib/calculate-availability').calculateAvailability

test('it prints the equals0 message', () => {
  const expectedMsg = '0% 👏. You are free... from here on is downhill.'
  expect(calculateAvailability(0, 32)).toBe(expectedMsg)
})

test('it prints the lessThan10 message', () => {
  const expectedMsg = `🤚 You have spent 6% of your available ⏰. Schedule anything else at your own risk 💥.`
  expect(calculateAvailability(2, 32)).toBe(expectedMsg)
})

test('it prints the moreThan10 message', () => {
  const expectedMsg = `You have spent 16% of your available ⏰. Drop some 💩. I encourage you to disappoint people.`
  expect(calculateAvailability(5, 32)).toBe(expectedMsg)
})

test('it prints the moreThan20 message', () => {
  const expectedMsg = `🚨 Are you f*cking kidding me with this now! 25% has been used doing "who knows what" 🔫.`
  expect(calculateAvailability(8, 32)).toBe(expectedMsg)
})

test('it prints the moreThan30 message', () => {
  const expectedMsg = `Stop, just S.T.O.P. 31% of your availability is spent. Actual time spent 31%.`
  expect(calculateAvailability(10, 32)).toBe(expectedMsg)
})

test('it prints the moreThan50 message', () => {
  const expectedMsg = `🚨 63% 🚨 63% 🚨 63% 🚨 63% 🚨. I hope me calling this number so many times have made an impact on you. Here it is again 63%.`
  expect(calculateAvailability(20, 32)).toBe(expectedMsg)
})

test('prints default message if it receives something else besides a number', () => {
  const expectedMsg = `Unable to run for some reason. 🤔. Open the console and help me out here.`
  expect(calculateAvailability('a', 32)).toBe(expectedMsg)
})
