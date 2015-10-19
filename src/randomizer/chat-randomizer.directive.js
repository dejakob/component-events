(function (angular) {
    'use strict';

    angular
        .module('ComponentEvents')
        .directive('chatRandomizer', ChatRandomizer);

    function ChatRandomizer ()
    {
        return {
            restrict: 'E',
            templateUrl: 'randomizer/chat-randomizer.html',
            controller: ChatRandomizerController,
            compile: ChatRandomizerCompiler,
            scope: {
                onReady: '=?',
                onNewMessage: '=?'
            }
        }
    }

    function ChatRandomizerController ($scope, $timeout)
    {
        const MESSAGE_INTERVAL = 1000;

        var allMessages = [
            new ChatMessage({text: 'Hello'}),
            new ChatMessage({text: 'How are you?'}),
            new ChatMessage({text: 'Yolo'}),
            new ChatMessage({text: 'Chat message'}),
            new ChatMessage({text: 'Everything alright?'})
        ];

        $scope.messages     = [];
        $scope.start        = start;
        $scope.stop         = stop;
        $scope.isStarted    = false;

        function start (index) {
            $scope.isStarted = true;
            $timeout(addMessage.bind(this, index || 0), MESSAGE_INTERVAL);
        }

        function stop () {
            $scope.isStarted = false;
        }

        function addMessage ()
        {
            var randomIndex     = Math.floor(Math.random() * allMessages.length);
            var randomMessage   = allMessages[randomIndex];

            $scope.messages.push(randomMessage);

            if (typeof $scope.onNewMessage === 'function') {
                $scope.onNewMessage(randomMessage);
            }

            if ($scope.isStarted) {
                start();
            }
        }
    }

    function ChatRandomizerCompiler ()
    {
        return {
            post: ChatRandomizerPostCompiler
        }
    }

    function ChatRandomizerPostCompiler (scope)
    {
        if (typeof scope.onReady === 'function') {
            scope.onReady();
        }
    }

})(window.angular);