(function () {
  'use strict'

  var Slack   = require('slack-node'),
      fs      = require('fs'),
      path    = require('path'),
      exec    = require('child_process').exec;

  var defaults = {
    hook_url: "https://hooks.slack.com/services/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",
    project_url: "http://cafrilosa.com",
    slack_channel: "#cafrilosa",
    project_name: "cafrilosa",
    repo: "http://github.com/noggalito/cafrilosa"
  };

  var webhookUri       = process.env.SLACK_HOOK_URL     || defaults["hook_url"],
      projectUri       = process.env.SLACK_PROJECT_URL  || defaults["project_url"],
      slackChannel     = process.env.SLACK_CHANNEL      || defaults["slack_channel"],
      projectName      = process.env.SLACK_PROJECT_NAME || defaults["project_name"],
      iconNotify       = process.env.SLACK_PROJECT_ICON || ":squirrel:",
      slackEnvironment = process.env.ENV                || "unknown",
      botName          = process.env.SLACK_BOT_NAME     || "Squirrel";

  var slack = new Slack();
  slack.setWebhook(webhookUri);

  var execute = function (command, callback) {
    exec(command, function(error, stdout, stderr){ callback(stdout); });
  };

  execute("git config --global user.name", function(name) {
    var deployUsername = name.replace("\n", "");

    execute("git config --global user.email", function(email) {
      var deployEmail = email.replace("\n", "");

      execute("pm2 -s deploy ecosystem.json5 " + process.env.ENV + " curr", function (sha) {
        var version = sha.replace("\n", "");

        slack.webhook({
          channel   : slackChannel,
          username  : botName,
          icon_emoji: iconNotify,
          text: "<mailto:" + deployEmail + "|" + deployUsername + "> deployed <" + defaults["repo"] + "/commit/" + version + "|" + version + "> of " +  projectName + " to <" + projectUri + "|" + slackEnvironment + ">"
        }, function (err, response) {
          console.log(response)
        });
      });
    });
  });
})();
