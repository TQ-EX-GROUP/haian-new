import uuid from 'uuid/v5'
export default (val) => {
  return uuid(val || performance.now().toString(), '1b671a64-40d5-491e-99b0-da01ff1f3341')
}