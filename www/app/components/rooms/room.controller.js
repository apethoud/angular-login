(function (angular) {
    angular
        .module("application")

        .controller("roomComponentController", function (roomService) {
            this.$onInit = function() {
                this.roomService = roomService;

                this.startTime = new Date();
                this.startTime.setHours(0, 0, 0, 0);

                this.endTime = new Date();
                this.endTime.setHours(0, 0, 0, 0);

                this.reserveReasons = [
                    "Birthday",
                    "Conference",
                    "Interview",
                    "Scrum Meeting",
                    "Honeymoon"
                ];

                this.master = {};
            };

            this.roomSubmission = function() {
                console.log("start", this.startTime);
                console.log("end", this.endTime);

                if (this.startTime >= this.endTime) return alert("Message from controller: time invalid");

                if (this.myForm.$invalid) return alert("Message from controller: form invalid");

                alert("Room submitted");
            };
        });
}(window.angular));
