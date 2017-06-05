(function(angular) {
    angular
        .module("application")

        .factory("roomService", function($http, applicationSettings) {
            return {
                getRooms,
                getRoomById,
                fetchRoomsFromDB,
                writeRoomReservation
            };

            let rooms = null;

            function getRooms() {
                console.log("getRooms is: ", getRooms);
                return rooms;
            }

            function getRoomById(id) {
              debugger;
              return $http.get(applicationSettings.getFirebaseRestUrl("rooms/${id}"))
                .then(response => response.data)
                .then(data => {
                    data.id = id;
                    return data;
                });
                    // let roomsArray = [];
                    // let myRoom = "";
                    // roomsArray.push(rooms);
                    //
                    // for(var i = 0; i < roomsArray[0].length; i++) {
                    //     if(roomsArray[0][i].id === parseInt($routeParams.id, 10)) {
                    //         myRoom = roomsArray[0][i].name;
                    //     }
                    // }
                    // return myRoom;
            }

            function fetchRoomsFromDB() {
              return $http.get(applicationSettings.getFirebaseRestUrl("rooms"))
                .then(response => response.data)
                .then(rooms => {
                    angular.forEach(rooms, function(value, key) {
                        value.id = key;
                        console.log("Room updated during fetch", value);
                    });
                    return rooms;
                });
            }

            function writeRoomReservation(id, reservation) {
              return getRoomById(id)
                .then(room => {
                  return $http.post(
                    applicationSettings.getFirebaseRestUrl(`rooms/${id}/reservations/${getRoomDateKey()}`),
                    reservation
                  )
                })
            }

            function getRoomDateKey(date) {
              let dateKey;

              dateKey = date
                          ? new Date(date).toDateString()
                          : new Date().toDateString();

              dateKey = dateKey.replace(/ /g, "");

              return dateKey;
            }
        });
}(window.angular));
