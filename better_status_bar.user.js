// ==UserScript==
// @name        Better Status Bar
// @namespace   josh.lubaway.com
// @description Chrome's status bar blows. It doesn't show you the full uri.
// @include     *
// ==/UserScript==

var StatusBar = {

  initialize: function() {
    StatusBar.createStatusBar("I'm a status bar!");
    StatusBar.hide();

    var links = document.getElementsByTagName('a');
    for (var i=0; i<links.length; i++) {
      links[i].addEventListener("mouseover", StatusBar.show);
      links[i].addEventListener("mouseout", StatusBar.hide);
    }
  },

  createStatusBar: function(text) {
    var element  = document.createElement('div');
    var textNode = document.createElement('p');

    element.style.position = 'fixed';
    element.style.top = '0px';
    element.style.left = '0px';
    element.style.background = '#f6f6f6';
    element.style.margin = '0px';
    element.style['border-bottom'] = '1px solid #cdcdcd';
    element.style['border-right'] = '1px solid #cdcdcd';
    element.style['-webkit-border-bottom-right-radius'] = '5px';
    element.style.zIndex = '20000';

    textNode.innerHTML = text;
    textNode.style.color = '#161616';
    textNode.style.margin = '2px 4px';
    textNode.style.fontFamily = 'Arial';
    textNode.style.fontSize = '11px';
    textNode.style.textShadow = '1px 1px #fefefe';
    textNode.style['letter-spacing'] = '1px';

    element.appendChild(textNode);
    document.body.appendChild(element);

    StatusBar.textNode = textNode;
    StatusBar.bar      = element;
  },

  text: function(value) {
    if (value == 'undefined') {
      value = window.location;
    }

    StatusBar.textNode.innerHTML = value;
  },

  hide: function() {
    StatusBar.bar.style.display = 'none';
  },

  show: function(event) {
    StatusBar.text(event.target.href);
    StatusBar.bar.style.display = 'block';
  }

}

StatusBar.initialize();
