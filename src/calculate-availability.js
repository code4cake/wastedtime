// @flow
// @format

import type { LogMessages } from './types.js'

export function calculateAvailability(meetingHours: number, workingHours: number): string {
  let percentageSpentOnMeetings = Math.round((meetingHours / workingHours) * 100)

  try {
    return logMessage(percentageSpentOnMeetings)
  } catch (err) {
    throw err
  }
}

export function logMessage(percentage: number): string {
  let logMessages: LogMessages = {
    equals0: `${percentage}% 👏. You are free... from here on is downhill.`,
    lessThan10: `🤚 You have spent ${percentage}% of your available ⏰. Schedule anything else at your own risk 💥.`,
    moreThan10: `You have spent ${percentage}% of your available ⏰. Drop some 💩. I encourage you to disappoint people.`,
    moreThan20: `🚨 Are you f*cking kidding me with this now! ${percentage}% has been used doing "who knows what" 🔫.`,
    moreThan30: `Stop, just S.T.O.P. ${percentage}% of your availability is spent. Actual time spent ${percentage}%.`,
    moreThan50: `🚨 ${percentage}% 🚨 ${percentage}% 🚨 ${percentage}% 🚨 ${percentage}% 🚨. I hope me calling this number so many times have made an impact on you. Here it is again ${percentage}%.`,
  }

  // if less than 10
  if (percentage == 0) {
    return logMessages.equals0
  }
  // if less than 10
  if (percentage < 10) {
    return logMessages.lessThan10
  }
  // if more than 10 but less than 20
  if (percentage >= 10 && percentage < 20) {
    return logMessages.moreThan10
  }
  // if more than 20 but less than 30
  if (percentage > 20 && percentage < 30) {
    return logMessages.moreThan20
  }
  // if more than 30 but less than 50
  if (percentage > 30 && percentage < 50) {
    return logMessages.moreThan30
  }
  // if more than || equal 50
  if (percentage >= 50) {
    return logMessages.moreThan50
  }
  return `Unable to run for some reason. 🤔. Open the console and help me out here.`
}
