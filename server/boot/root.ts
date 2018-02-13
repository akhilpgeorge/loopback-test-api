export class Root {
  constructor(app: any) {
    var router = app.loopback.Router();
    router.get("/", app.loopback.status());
    app.use(router);
  }
}
