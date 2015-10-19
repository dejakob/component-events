# Events between components in Angular 1.4

This example shows how to trigger events between components in Angular 1.4.
$broadcast and $on seem to be very unperformant, so attaching events right to the directive might be the way.

## Trigger on parent by component
### Attach event to a directive
```
<chat-randomizer on-new-message="chatRandomizerNew"></chat-randomizer>
```

### Declare event in controller or service
```
$scope.chatRandomizerNew = function () {...};
```

## Trigger event into component from parent
### Add onReady event and events object to directive
Template:
```
<chat-message-list on-ready="messageListReady"
                   events="messageListEvents"
></chat-message-list>
```

Controller scope:
```
$scope.messageListReady     = messageListReady;
$scope.messageListEvents    = {};
```

### Use event from the moment the component is ready
```
function messageListReady ()
{
    $scope.clearMessageList = $scope.messageListEvents.clear;
}
```

### What magic happens in the component?
It will attach its own methods to the events binding by reference:
```
if (typeof $scope.events === 'object') {
    $scope.events.clear = clear;
}
```

It will trigger the onReady event when it got postCompiled:
```
function ChatMessageListPostCompiler (scope)
{
    if (typeof scope.onReady === 'function') {
        scope.onReady();
    }
}
```
