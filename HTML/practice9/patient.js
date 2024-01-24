$(function () {
  var $patientform = $("#patientMedHistoryForm");
  if ($patientform.length) {
    $patientform.validate({
      rules: {
        gender: {
          required: true,
        },
        txtFrstName: {
          required: true,
          minlength: 2,
        },
        txtLstName: {
          required: true,
          minlength: 2,
        },
        patientEmail: {
          required: true,
          email: true,
        },
        month: {
          required: true,
        },
        bDay: {
          required: true,
        },
        bYear: {
          required: true,
        },
        numPatientHeight: {
          required: true,
        },
        numPatientWeight: {
          required: true,
        },
        patientReason: {
          required: true,
        },
        agree: "required",
      },

      // messages as per rules
      messages: {
        gender: {
          required: "This field is required",
        },
        txtFrstName: {
          required: "Please enter the first name.",
          minlength: "Your name must consist of at least 2 characters",
        },
        txtLstName: {
          required: "Please enter the last name.",
          minlength: "Your name must consist of at least 2 characters",
        },
        patientEmail: {
          required: "Please enter a valid email address.",
          email: "Please enter a valid email address.",
        },
        month: {
          required: "Please select a month.",
        },
        bDay: {
          required: "Please select a day.",
        },
        bYear: {
          required: "Please select a year.",
        },
        numPatientHeight: {
          required: "Please enter height.",
        },
        numPatientWeight: {
          required: "Please enter weight.",
        },
        patientReason: {
          required: "Please Enter a reason.",
        },
        agree: "Please accept our policy",
      },

      // Form submission handler
      submitHandler: function (form) {
        alert("Your details have been added successfully");

        // Now, submit the form
        form.submit();
      },
    });
  }
});
