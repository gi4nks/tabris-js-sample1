var page = tabris.create("Page", {
  title: "Hello, World!",
  topLevel: true
});
 
var textView = tabris.create("TextView", {
  font: "18px",
  layoutData: {centerX: 0, top: 100},
  text: "Hello World",
  background: "red",
  text-color: "green"
}).appendTo(page);
 
page.open();
