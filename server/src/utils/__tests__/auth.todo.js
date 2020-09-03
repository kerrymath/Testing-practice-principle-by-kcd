import {isPasswordAllowed, userToJSON} from '../auth'

describe('isPasswordAllowed only allows some passwords', () => {
  // here's where I'll demo things for you :)
  const allowedPasswords = ['fsfdihdfg124jvkf', '900jkkhsn476.']
  const disallowedPasswords = ['', '900789087', 'fdghdfjfkdld', '98jkl']

  allowedPasswords.forEach(pwd => {
    it(`isPasswordAllowed: "${pwd}" should be allowed`, () => {
      expect(isPasswordAllowed(pwd)).toBe(true)
    })
  })

  disallowedPasswords.forEach(pwd => {
    it(`isPasswordAllowed: "${pwd}" should not be allowed`, () => {
      expect(isPasswordAllowed(pwd)).toBe(false)
    })
  })
})

test('userToJSON excludes secure properties', () => {
  // Here you'll need to create a test user object
  // pass that to the userToJSON function
  // and then assert that the test user object
  // doesn't have any of the properties it's not
  // supposed to.
  // Here's an example of a user object:
  const safeUser = {
    id: 'some-id',
    username: 'sarah',
  }

  const user = {
    ...safeUser,
    exp: new Date(),
    iat: new Date(),
    hash: 'some really long string',
    salt: 'some shorter string',
  }
  const userJson = userToJSON(user)

  expect(safeUser).toEqual(userJson)
})

//////// Elaboration & Feedback /////////
// When you've finished with the exercises:
// 1. Copy the URL below into your browser and fill out the form
// 2. remove the `.skip` from the test below
// 3. Change submitted from `false` to `true`
// 4. And you're all done!
/*
http://ws.kcd.im/?ws=Testing&e=auth%20util&em=
*/
test.skip('I submitted my elaboration and feedback', () => {
  const submitted = false // change this when you've submitted!
  expect(submitted).toBe(true)
})
////////////////////////////////
