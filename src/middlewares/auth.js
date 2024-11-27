const adminAuth = (req, res, next) => {
  console.log("User is getting authenticated");
  const token = "xyz";
  const isAuthenticated = token === "xyz";
  if (!isAuthenticated) {
    res.status(500).send("User is not authenticated");
  } else {
    next();
  }
};

const userAuth = (req, res, next) => {
  console.log("User is getting authenticated");
  const token = "xyz";
  const isAuthenticated = token === "xyz";
  if (!isAuthenticated) {
    res.status(500).send("User is not authenticated");
  } else {
    next();
  }
};

module.exports = {
  adminAuth,
  userAuth,
};
