function validationContractorAccount(id, validate) {
  $("#unapprove").addClass("disabled");
  $("#approve").addClass("disabled");
  $.ajax({
    url: '/updateValidationContractorAccount',
    method: 'post',
    data: {id: id, validated: validate}
  }).done((data) => {})
}
