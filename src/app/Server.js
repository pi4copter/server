"use realm backend";
import Express from realm.server;
import config as routerConfig from realm.router;
class Server extends Express {

   configure() {
      this.port = process.env.PORT || 4075;

      this.serve("/dependencies/", "@default");
      this.serve("/build/", "@home/build");
      this.serve("/static", "@home/static/");

      this.addScripts([
         '/dependencies/lodash.min.js',
         '/dependencies/realm.js',
         '/dependencies/realm.router.js',
         '/build/frontend.js',
         '/build/universal.js'
      ]);

      this.addRoute('app.routes', 'realm.router.bridge');

      this.bindIndex(/^\/(?!api|_realm_|favicon.ico).*/, {
         application: 'app.Application',
         title: "QuadCopter Server"
      });
      this.start();
   }
}
export Server
