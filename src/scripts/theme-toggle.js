const storageKey = 'theme-preference'

const onClick = () => {
  theme.value = theme.value === 'light' ? 'dark' : 'light'

  setPreference()
}

const getColorPreference = () => {
  if (localStorage.getItem(storageKey))
    return localStorage.getItem(storageKey) || ''
  else
    return window.matchMedia('(prefers-color-scheme: dark)').matches
      ? 'dark'
      : 'light'
}

const setPreference = () => {
  localStorage.setItem(storageKey, theme.value)
  reflectPreference()
}

const reflectPreference = () => {
  document
    .querySelector('meta[name=theme-color]')
    .setAttribute(
      'content',
      window.matchMedia('(prefers-color-scheme: dark)').matches
        ? '#1c2c4e'
        : '#fef9fb'
    )

  document.firstElementChild?.setAttribute('data-theme', theme.value)

  document
    .querySelector('#theme-toggle')
    ?.setAttribute('aria-label', theme.value)
}

const theme = {
  value: getColorPreference(),
}

reflectPreference()

window.onload = () => {
  reflectPreference()

  document.querySelector('#theme-toggle')?.addEventListener('click', onClick)
}

// sync with system changes
window
  .matchMedia('(prefers-color-scheme: dark)')
  .addEventListener('change', ({ matches: isDark }) => {
    theme.value = isDark ? 'dark' : 'light'
    setPreference()
  })
