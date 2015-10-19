# Events between components in Angular 1.4

This example shows how to trigger events between components in Angular 1.4.
$broadcast and $on seem to be very unperformant, so attaching events right to the directive might be the way.

## Attach event to a directive
```
<chat-randomizer on-ready="chatRandomizerReady"
                 on-new-message="chatRandomizerNew"
></chat-randomizer>
```

## Declare event in controller or service
```
$scope.chatRandomizerNew = function () {...};
```
