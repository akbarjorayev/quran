async function wait(time) {
  return new Promise((res, rej) => {
    setTimeout(() => res(), time)
  })
}

export { wait }
