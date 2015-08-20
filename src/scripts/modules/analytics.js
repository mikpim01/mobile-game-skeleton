'use strict';

if (!MODULE) { var MODULE = {}; }

MODULE.Analytics = (function() {
  var Analytics = function(identifier) {
    this.identifier = identifier;

    window.mixpanel.init(this.identifier, {
      persistence: 'localStorage'
    });
  };

  Analytics.prototype.track = function(event, data) {
    data = data || {};

    data.vendor = app.device.vendor;
    data.cordova = app.device.cordova;

    window.mixpanel.track(event, data);

    console.log("ANALYTIC", event, data);
  };

  return Analytics;
}());