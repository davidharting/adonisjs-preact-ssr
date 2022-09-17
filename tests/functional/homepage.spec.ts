import { test } from '@japa/runner'

test('display default welcome page', async ({ client }) => {
  const response = await client.get('/')

  response.assertStatus(200)
  response.assertTextIncludes('Hello, friend')
})

test('display welcome page with name', async ({ client }) => {
  const response = await client.get('/?name=David')

  response.assertStatus(200)
  response.assertTextIncludes('Hello, David')
})
