module.exports = {
   script: '../app.js',
   name: 'pi-server',
   port: 4075,
   logs: process.env.JOB_NAME ? "/home/jenkins/logs/" : __dirname + "/../.logs/",
   attempts: 10,
   env: {
      NODE_ENV: "production",
      PORT: 4075,
      MONGO_DATABASE: 'pi-server'
   }
}
