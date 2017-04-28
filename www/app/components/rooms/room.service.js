(function(angular) {
    angular
        .module("application")

        .factory("roomService", function() {
            return {
                getRooms,
                getRoomById,
                fetchRoomsFromDB
            };

            let rooms = null;

            function getRooms() {
                return rooms;
            }

            function getRoomById(id) {
                // todo:  implement
            }

            function fetchRoomsFromDB() {
                rooms = [
                    {
                        name    : "Donkey Kong",
                        id      : 1,
                        picture : '/assets/images/dk.jpg'
                    },
                    {
                        name    : "Sonic",
                        id      : 2,
                        picture : '/assets/images/sonic.jpg'
                    },
                    {
                        name    : "Zelda",
                        id      : 3,
                        picture : '/assets/images/zelda.jpg'
                    },
                ];

                return rooms;
            }
        });
}(window.angular));
