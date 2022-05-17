export const sort =(data)=> {
  return data.sort((a, b) => {
    return a.id - b.id

  }).reverse()
}