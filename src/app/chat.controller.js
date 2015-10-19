(function (angular) {
    'use strict';

    angular
        .module('ComponentEvents')
        .controller('ChatController', ChatController);

    function ChatController ($scope)
    {
        $scope.chatMessages         = [];
        $scope.chatRandomizerNew    = chatRandomizerNew;

        $scope.messageListEvents    = {};
        $scope.messageListReady     = messageListReady;
        $scope.clearMessageList     = componentIsLoading;

        function chatRandomizerNew (message)
        {
            $scope.chatMessages.push(message);
        }

        function messageListReady ()
        {
            $scope.clearMessageList = $scope.messageListEvents.clear;
        }

        function componentIsLoading ()
        {
            console.log('component is not yet compiled...');
        }
    }


})(window.angular);