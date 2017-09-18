var assert = require('assert'),
    test = require('selenium-webdriver/testing'),
    webdriver = require('selenium-webdriver'),
    username = process.env.SAUCE_USERNAME,
    accessKey = process.env.SAUCE_ACCESS_KE,
    driver;

driver = new webdriver.Builder().
withCapabilities({
    'browserName': 'chrome',
    'platform': 'Linux',
    'version': '43.0',
    'username': username,
    'accessKey': accessKey,
     'name': ' Selenium sample test'
}).
usingServer("http://" + username + ":" + accessKey +
    "@ondemand.saucelabs.com:80/wd/hub").
build();

driver.get("http://saucelabs.com/test/guinea-pig");

driver.getTitle().then(function (title) {
    console.log("title is: " + title);
});

driver.quit();
