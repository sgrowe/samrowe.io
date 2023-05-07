import 'csstype'

// From:
// https://github.com/frenic/csstype#what-should-i-do-when-i-get-type-errors
declare module 'csstype' {
  interface Properties {
    '--fade-in-step': number
  }
}
