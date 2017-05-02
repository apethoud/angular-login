(function(angular) {
    angular
        .module("application")

        .factory("roomService", function($location, $routeParams) {
            return {
                getRooms,
                getRoomById,
                fetchRoomsFromDB
            };

            let rooms = null;

            function getRooms() {
                console.log("getRooms is: ", getRooms);
                return rooms;
            }

            function getRoomById() {
                let roomsArray = [];
                let myRoom = "";
                roomsArray.push(rooms);

                for(var i = 0; i < roomsArray[0].length; i++) {
                    if(roomsArray[0][i].id === parseInt($routeParams.id, 10)) {
                        myRoom = roomsArray[0][i].name;
                    }
                }
                return myRoom;
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
