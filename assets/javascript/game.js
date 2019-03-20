//define the variable targetScore and initialize its value at a random number between 19 and 120

var targetScore = Math.floor(Math.random() * 102) + 19;

//define the variable totalScore and intialize its value as 0;
var totalScore = 0;

//define the variable wins and losses and initialize their value as 0;
var wins = 0;
var losses = 0;

//put the targetScore varibale in html
$(".target-score").text(targetScore);


//put the variable totalScore in html
$("#score-counter").text(totalScore);

//put the variable wins and the variable losses in html
$("#wins").text(wins);
$("#losses").text(losses);


//assign each crystal image a random value from 1 to 12 by using for loop and set the iterator i as part of the image id


for (var i = 1; i < 5; i++) {

    var crystalValue = Math.floor(Math.random() * 12) + 1;
    $("#crystal" + i.toString()).attr("value", crystalValue);

    //everytime the user click an crystal image, the following function will be executed
    $("#crystal" + i.toString()).on("click", function () {

        //the value attribute will be extracted from the clicked crystal image and store it in a variable
        var crystalValueNumber = ($(this).attr("value"));
        //since the data type of an attribute is a string, we need to turn it into number;
        crystalValueNumber = parseInt(crystalValueNumber);
        //the variable totalSocre will be added by the variable crystalValueNumbe
        totalScore += crystalValueNumber;
        //the related div in html will be updated
        $("#score-counter").text(totalScore);
        //compare the variable targetScore and totalScore to decide bump up the variable wins or the variable losses
        if (totalScore === targetScore) {
            wins++;
            $("#wins").text(wins);
            //when the variable wins is bumped up, wait for 2 seconds and the reset function will be executed;
            setTimeout(reset, 2000);
        }
        else if (totalScore > targetScore) {
            losses++;
            $("#losses").text(losses);
            //when the variable losses is bumped up, wait for 2 seconds and the reset function will be executed;
            setTimeout(reset, 2000);
        }





    })


}

//define the reset function
function reset() {
    //the variable targetScore will be reassigened a random number from 19 to 120, and updated the related div in html
    targetScore = Math.floor(Math.random() * 102) + 19;
    $(".target-score").text(targetScore);

    //the variable totalScore will be reassigned the value 0, and related div will be updated

    totalScore = 0;
    $("#score-counter").text(totalScore);

    //the hidden value behind each image will be reassigned

    for (var i = 1; i < 5; i++) {
        var crystalValue = Math.floor(Math.random() * 12) + 1;
        $("#crystal" + i.toString()).attr("value", crystalValue);

    }

}













