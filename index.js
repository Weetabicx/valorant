// Setup env variables
require("dotenv").config()

// Require the necessary discord.js classes
const { Client, Events, GatewayIntentBits } = require("discord.js")

// Create a new client instance
const client = new Client(
    {intents: [GatewayIntentBits.Guilds]}
)

// When the client is read, rune this code (only once)
// The distinction between `client: Client<boolean>` and `readyClient: Client<True>` is important for TypeScript devs.
// It makes some properties non-nullable
client.once(Events.ClientReady, readyClient => {
    console.log("Ready!")
})

// Log in to Discord with your client's token
client.login(process.env.TOKEN)