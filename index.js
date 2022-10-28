const express = require("express")
const app = express()

app.get("/", (req, res) => {
  res.json({
    slackUsername: "vickjoe",
    backend: true,
    age: 30,
    bio: "My name is Vincent, I am a software developer and I love to code",
  })
})

app.listen(process.env.PORT || 3000, () => {
  console.log("Server is Up and Running")
})
