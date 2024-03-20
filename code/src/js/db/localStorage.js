function saveLocal(name, data) {
  localStorage.setItem(name, JSON.stringify(data))
}

function loadLocal(name) {
  return JSON.parse(localStorage.getItem(name))
}

function removeLocal(name) {
  localStorage.removeItem(name)
}

export { saveLocal, loadLocal, removeLocal }
