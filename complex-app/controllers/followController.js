const Follow = require("../models/Follow.js");

exports.addFollow = function (req, res) {
  let follow = new Follow(req.params.username, req.visitorId);
  follow
    .create()
    .then(() => {
      req.flash("success", `Successfully followed ${req.params.username}`);
      req.session.save(() => res.redirect(`/profile/${req.params.username}`));
    })
    .catch((errors) => {
      errors.array.forEach((error) => {
        req.flash("errors", error);
        req.session.save(() => res.redirect("/"));
      });
    });
};

exports.removeFollow = function (req, res) {
  console.log("Just starting the removal process");
  let follow = new Follow(req.params.username, req.visitorId);
  console.log(follow);
  follow
    .delete()
    .then(() => {
      req.flash("success", `Successfully stopped followed ${req.params.username}`);
      req.session.save(() => res.redirect(`/profile/${req.params.username}`));
    })
    .catch((errors) => {
      errors.forEach((error) => {
        req.flash("errors", error);
        req.session.save(() => res.redirect("/"));
      });
    });
};
