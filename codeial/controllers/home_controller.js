module.exports.home = function (req, res) {
  console.log(req.cookies);
  res.cookie("user_id", 12);
  return res.end("<h1>Express for COdeial</h1>");
};

// module.exports.actionName = function(req,res){}
