const { default: mongoose } = require('mongoose');

const connectdb = async () => {
  try {
    await mongoose.connect(
      'mongodb+srv://muradlesson:murad12345@cluster.exql65j.mongodb.net/?retryWrites=true&w=majority&appName=Cluster'
    );
    console.log("mongodb connect is successfully");
  } catch (error) {
    console.log(error);
  }
};

module.exports = connectdb;

