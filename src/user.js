export function isFirstVisit() {
  const visited = localStorage.getItem('visited')
  return !visited
}

export function registerVisit() {
  localStorage.setItem('visited', 1)
}
