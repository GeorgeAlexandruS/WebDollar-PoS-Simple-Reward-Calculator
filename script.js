    function calculatePos() {

      const totalDailyReward = 12960000;
      const posReward = 0.666666666667 * totalDailyReward;

      var currentDistribution = 7224421128; //this value must be updated manually or you can install webdollar explorer(see instructions)

      var yourStake = document.getElementById("stake").value;
      var report = posReward / currentDistribution;

      var yourDailyPosReward = Math.round(report * yourStake) + ' Web$';
      var yourMonthlyPosReward = Math.round(report * yourStake) * 30 + ' Web$';
      var yourAnnualPosReward = Math.round(report * yourStake) * 360 + ' Web$';

      document.getElementById("dailyPos").innerHTML = yourDailyPosReward.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
      document.getElementById("monthlyPos").innerHTML = yourMonthlyPosReward.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
      document.getElementById("annualPos").innerHTML = yourAnnualPosReward.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");

      document.getElementById("show1").style.display = "block";
      document.getElementById("show2").style.display = "block";
      document.getElementById("show3").style.display = "block";

    }

var input = document.getElementById("stake");
input.addEventListener("keyup", function(event) {
  event.preventDefault();
  if (event.keyCode === 13) {
    document.getElementById("js-trigger-overlay").click();
  }
});
