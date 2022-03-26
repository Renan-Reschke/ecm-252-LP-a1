const express = require('express')
const app = express()

//aplicando middleware
app.use(express.json())

// POST
// /lembretes/{id}/observacoes
app.post('/lembretes/:id/observacoes', (req, res) )