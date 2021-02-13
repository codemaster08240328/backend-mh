const Investments = require("../services/Investments")

const investments = new Investments()

const getInvestmentHandler = async (req, res) => {
  const {id} = req.params
  try {
    const data = await investments.fetchInvestmentById(id)
    res.send(data)
  } catch (e) {
    console.error(e)
    res.sendStatus(500)
  }
}

module.exports = {
  getInvestmentHandler,
}
