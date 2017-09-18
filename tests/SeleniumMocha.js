var assert = require('assert'),
    test = require('selenium-webdriver/testing'),
    webdriver = require('selenium-webdriver'),
    username = process.env.SAUCE_USERNAME,
    accessKey = process.env.SAUCE_ACCESS_KEY;

test.describe('Google Search', function() {
    test.it('should work', function() {
        // var driver = new webdriver.Builder().
        // withCapabilities(webdriver.Capabilities.chrome()).
        // build();
        console.log(process.env.USER);
        var driver = new webdriver.Builder().
        withCapabilities({
            'browserName': 'chrome',
            'platform': 'Linux',
            'version': '43.0',
            'username': username,
            'accessKey': accessKey,
            'name': ' Sample selenium test'
        }).
        usingServer("http://" + username + ":" + accessKey +
            "@ondemand.saucelabs.com:80/wd/hub").
        build();
        driver.get('http://www.google.com');
        var searchBox = driver.findElement(webdriver.By.name('q'));
        searchBox.sendKeys('simple programmer');
        searchBox.getAttribute('value').then(function(value) {
            assert.equal(value, 'simple programmer');
        });
        driver.quit();
    });
});
