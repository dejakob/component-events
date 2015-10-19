(function (angular) {
    'use strict';

    angular
        .module('ComponentEvents')
        .controller('ChatController', ChatController);

    function ChatController ($scope)
    {
        $scope.chatMessages         = [];
        $scope.chatRandomizerNew    = chatRandomizerNew;

        function chatRandomizerNew (message)
        {
            $scope.chatMessages.push(message);
        }
    }


})(window.angular);