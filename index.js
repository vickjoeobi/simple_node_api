const express = require("express")
const app = express()

app.get("/", (req, res) => {
  res.json({
    slackUsername: "vickjoe",
    backend: true,
    age: 30,
    bio: "My name is Vincent, I am a software developer that believes that I can acheive anything with effort and determination. I joined the HNG9 to learn a skill as a backend developer. I am a team player and I am always ready to learn new things.",
  })
})

app.listen(process.env.PORT || 3000, () => {
  console.log("Server is Up and Running")
})
