const express = require("express");
const helmet = require("helmet");
const path = require("path");
const createError = require("http-errors");

module.exports = (config) => {
  const app = express();

  /**
   * @see https://github.com/helmetjs/helmet
   * Helmet adds security features
   */
  app.use(helmet());

  app.use(compression());

  app.set("view engine", "pug");
  app.set("views", path.join(__dirname, "./views"));

  app.locals.title = config.sitename;

  app.use("/", express.static(path.join(__dirname, "../public")));
  app.get("/favicon.ico", (req, res) => res.sendStatus(204));

  app.use(async (req, res, next) => {
    try {
      const names = await speakers.getNames();
      res.locals.speakerNames = names;
      return next();
    } catch (err) {
      return next(err);
    }
  });

  app.use("/", routes({ speakers, feedback, avatars }));

  // catch 404 and forward to error handler
  app.use((req, res, next) => {
    next(createError(404));
  });

  if (app.get("env") === "development") {
    app.locals.pretty = true;
  }

  // error handler
  // eslint-disable-next-line no-unused-vars
  app.use((err, req, res, next) => {
    res.locals.message = err.message;
    const status = err.status || 500; // If no status is provided, let's assume it's a 500
    res.locals.status = status;
    res.locals.error = req.app.get("env") === "development" ? err : {};
    res.status(status);
    res.render("error");
  });

  return app;
};