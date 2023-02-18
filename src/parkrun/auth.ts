export const fetchAccessToken = async () => {
  // Based on this code:
  // https://github.com/Prouser123/parkrun.js/blob/685137962bd6b6a75ba0ff41beb5818529aa6bad/src/auth.ts

  // hardcoded API auth constants from:
  // https://github.com/Prouser123/parkrun.js/blob/685137962bd6b6a75ba0ff41beb5818529aa6bad/src/constants.ts
  // https://github.com/Prouser123/parkrun.js/blob/685137962bd6b6a75ba0ff41beb5818529aa6bad/src/classes/Net.ts
  const options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
      'X-Powered-By': 'parkrun.js/1.3.1 (https://parkrun.js.org/)',
      'User-Agent': 'parkrun/1.2.7 CFNetwork/1121.2.2 Darwin/19.3.0',
      Authorization:
        'Basic bmV0ZHJlYW1zLWlwaG9uZS1zMDE6Z2ZLYkRENk5Ka1lvRm1raXNSKGlWRm9wUUNLV3piUWVRZ1pBWlpLSw==',
    },
    body: new URLSearchParams({
      username: import.meta.env.PARKRUN_USERNAME,
      password: import.meta.env.PARKRUN_PASSWORD,
      scope: 'app',
      grant_type: 'password',
    }),
  } as const

  const resp = await fetch('https://api.parkrun.com/user_auth.php', options)

  if (!resp.ok) throw new Error(`Parkrun API error: ${await resp.text()}`)

  const data = await resp.json()

  // Make TS happy 🙃
  const token =
    typeof data === 'object' &&
    data &&
    'access_token' in data &&
    data.access_token

  if (typeof token !== 'string')
    throw new Error(
      `Failed to read parkrun access token: ${JSON.stringify(data)}`
    )

  return token
}
