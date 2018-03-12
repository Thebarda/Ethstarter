$(document).ready(() => {
  $.ajax({
      url: "/fetchNbCampagnesWaitingForValidation",
      method: "get",
  }).done(function (data) {
    let nbCampaignWaiting = $(data).filter("#emptyView").text().trim();
    $("#nbCampaignsWaiting").text(nbCampaignWaiting);
  });
});
