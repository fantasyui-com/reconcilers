# reconcilers
A collection of common reconcilers.

## Definition
A reconciler is a function that uses program logic to alter DOM in a way that matches incoming data.

## Fine disregard for rule.
A reconciler should only concern it self with a list of objects on the data end,
the UI end must be a non-destructive node renderer.

## Get Ready
Future proof translates to heavy reliance of string based data attributes.

```HTML

  <div data-bind="collections/todo" data-template="#todo-template" data-resolver="plain"></div>

```

## Data Source

Expect the following as a data source, there will be a buffer to store a local copy of list of objects

```JavaScript


window.addEventListener("data", function(e){

        enbuffer(e.data)

});


```
