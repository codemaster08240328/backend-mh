const config = require("config")
const request = require("request")

const getInvestmentHandler = async (req, res) => {
  const {id} = req.params
  request.get(`${config.investmentsServiceUrl}/investments/${id}`, (e, r, investments) => {
    if (e) {
      console.error(e)
      res.send(500)
    } else {
      res.send(investments)
    }
  })
}

module.exports = {
  getInvestmentHandler,
}
