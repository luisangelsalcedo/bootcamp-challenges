const utils = {
  characterCut: (str, count) => {
    const strCut = `${str.split("").slice(0, count).join("")}...`
    return strCut
  },
}

export default utils
