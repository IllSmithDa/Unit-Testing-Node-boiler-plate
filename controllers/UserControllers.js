
const testRoute = (req, res) => {
  res.status(200).json({ message: "success"});
  return;
}

module.exports = {
  testRoute,

};