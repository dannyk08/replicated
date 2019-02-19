// https://stackoverflow.com/questions/14573223/set-cookie-and-get-cookie-with-javascript
export function setCookie({
  name = '',
  value = ''
}) {
  document.cookie = `${name}=${value};path=/`
}

export function getCookie(name = '') {
  if (!document.cookie.length) return null
  return document.cookie
    .split(';')
    .reduce((p, c) => {
      const [key, value] = c.split('=').map(c => c.trim())
      return [...p, { [key]: (value && value.length) ? value : '' }]
    }, [])
    .find(c => c && !!c[name]) || null
}

