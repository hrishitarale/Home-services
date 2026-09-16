require("dotenv").config();

const app = require("./src/app");
const connectDB = require("./src/config/db");

const PORT = process.env.PORT || 5000;

connectDB().then(() => {
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
});


// hrishikeshtarale_db_user iqZsP3qtmVc26I1R
// connection string: mongodb+srv://<db_username>:iqZsP3qtmVc26I1R@homeserve.xgif0c3.mongodb.net/