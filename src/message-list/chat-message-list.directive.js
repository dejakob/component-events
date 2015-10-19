(function (angular) {
    'use strict';

    angular
        .module('ComponentEvents')
        .directive('chatMessageList', ChatMessageList);

    function ChatMessageList ()
    {
        return {
            restrict: 'E',
            templateUrl: 'message-list/chat-message-list.html',
            controller: ChatMessageListController,
            compile: ChatMessageListCompiler,
            scope: {
                onReady: '=?',
                messages: '=?'
            }
        }
    }

    function ChatMessageListController ()
    {

    }

    function ChatMessageListCompiler ()
    {
        return {
            post: ChatMessageListPostCompiler
        }
    }

    function ChatMessageListPostCompiler (scope)
    {
        if (typeof scope.onReady === 'function') {
            scope.onReady();
        }
    }

})(window.angular);