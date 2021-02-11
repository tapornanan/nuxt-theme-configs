export default (hostname) => {
  switch (hostname) {
    case 'localhost':
      console.log('activate theme Sun')
      return 'Sun'
    case 'other':
      console.log('activate theme Moon')
      return 'Moon'
  }
}
