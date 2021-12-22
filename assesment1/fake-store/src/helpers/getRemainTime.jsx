const getRemainTime = (t) => {
  const [hoursStr, minutesStr, secondsStr] = t.split(":")

  // deconstruyendo el tiempo en segundos
  const hours = Number(hoursStr) * 60 * 60 ?? 0
  const minutes = Number(minutesStr) * 60 ?? 0
  const seconds = Number(secondsStr) ?? 0

  // total de segundos
  let remainTime = hours + minutes + seconds
  remainTime -= 1 // disminuimos 1s

  const newSeconds = `0${Math.floor(remainTime % 60)}`.slice(-2)
  const newMinutes = `0${Math.floor((remainTime / 60) % 60)}`.slice(-2)
  const newHours = `0${Math.floor((remainTime / 3600) % 24)}`.slice(-2)
  return `${newHours}:${newMinutes}:${newSeconds}`
}
export default getRemainTime
