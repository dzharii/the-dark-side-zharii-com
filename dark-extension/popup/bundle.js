"use strict";
var Force;
(function (Force) {
    function findAll(cssSelector) {
        return Array.from(document.querySelectorAll(cssSelector));
    }
    Force.findAll = findAll;
    function findOne(cssSelector) {
        var nodes = findAll(cssSelector);
        if (nodes.length === 0) {
            throw new Error("findOne element with cssSelector=" + cssSelector + " was not found");
        }
        return nodes[0];
    }
    Force.findOne = findOne;
    function createElement(tagName, text, attrs) {
        var el = document.createElement(tagName);
        if (typeof text === 'string') {
            el.textContent = text;
        }
        if (typeof attrs === 'object' && attrs !== null) {
            for (var _i = 0, _a = Object.entries(attrs); _i < _a.length; _i++) {
                var _b = _a[_i], key = _b[0], val = _b[1];
                el[key] = val;
            }
        }
        return el;
    }
})(Force || (Force = {}));
/// <reference path="lib.ts" />
var AppGalacticTime;
(function (AppGalacticTime) {
    function formatTime(dt, timeZone) {
        return dt.toLocaleString('en-GB', { timeZone: timeZone })
            .replace(/(\d\d)\/(\d\d)\/(\d\d\d\d), (\d\d):(\d\d):(\d\d)/, '$3-$2-$1 $4:$5');
    }
    var appGalacticTime = Force.findOne('#appGalacticTime');
    var cssPfx = 'galacticTime';
    var galacticTime = [
        {
            id: cssPfx + 'SeattleCoruscant',
            displayName: 'Coruscant',
            tz: 'America/Los_Angeles',
        },
        {
            id: cssPfx + 'UtcTimeHoth',
            displayName: 'Hoth',
            tz: 'UTC',
        },
        {
            id: cssPfx + 'KyivKamino',
            displayName: 'Kamino',
            tz: 'Europe/Kiev',
        },
    ];
    appGalacticTime.innerHTML = ("\n        <style>\n            " + cssPfx + "MainTable {\n                width: 100%;\n                border-collapse: collapse;\n                border: 1px solid orange;\n            }\n            " + cssPfx + "MainTable tr:nth-child(even){\n                color: #f2f2f2;\n            }\n        </style>\n        <h2>Galactic Time</h2>\n        <table class=\"" + cssPfx + "MainTable\">\n                " + galacticTime.map(function (item) { return "<tr><td>" + item.displayName + "</td><td id=\"" + item.id + "\">" + formatTime(new Date(), item.tz) + "</td></tr>"; }) + "\n        </table>\n    ").trim();
    var updateGalacticTime = function () {
        var now = new Date();
        galacticTime.forEach(function (item) {
            var el = Force.findOne('#' + item.id);
            var newTime = formatTime(now, item.tz);
            if (el.textContent !== newTime) {
                el.textContent = newTime;
            }
        });
    };
    setInterval(updateGalacticTime);
})(AppGalacticTime || (AppGalacticTime = {}));
/// <reference path="lib.ts" />
var AppLinks;
(function (AppLinks) {
    var links = [
        { href: 'https://the-dark-side.zharii.com/', text: 'True Dark Side' }
    ];
    console.log('Hello');
    var appLinks = Force.findOne('#appLinks');
    appLinks.innerHTML = "\n    <h2>Links</h2>\n    <ul>\n        " + links.map(function (item) { return "<a href=\"" + item.href + "\" target=\"_blank\">" + item.text + "</a>"; }) + "\n    <ul>\n    ";
})(AppLinks || (AppLinks = {}));
