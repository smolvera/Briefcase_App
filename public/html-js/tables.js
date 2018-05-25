// When user clicks the register button
$(document).ready(function () {


    var addNewJob = {
      jobTitle: $("#jobTitle").val().trim(),
      companyName: $("#companyName").val().trim(),
      contactPerson: $("#contactPerson").val().trim(),
      contactNumber: $("#contactNumber").val().trim(),
      currentStatus: $("#currentStatus").val().trim(),
      salary: $("#salary").val().trim()
    };

    var jobWell = $("#dataTable");
  
    
  
    // add event listener
    $(document).on("submit", "#addJobForm", addJobOnPage);
  
    // get initial list of jobs already added to database
    getJobs();
  
    // A function to handle what happens when the form is submitted to create a new Author
    function submitNewJob(event) {
      event.preventDefault();
      // Don't do anything if the name fields hasn't been filled out
      if (!addNewJob.length.val().tri()) {
        return;
        alert("Please fill in all fields")
        console.log(addNewJob);
      } else {
        upsertJob(addNewJob);
      }
      
      // stopped here
      function upsertJob()
        // Send an AJAX POST-request with jQuery
        $.post("/api/addNewJob", addNewJob)
          // On success, run the following code
          .then(function (data) {
            // Log the data we found
            console.log(data);
          });
  
      
    }
  
      function createRowsForAddedJob(addNewJobData) {
        var newTr = $("<tr>");
        newTr.data("addNewJob", addNewJobData);
        newTr.append("<td>" + addNewJobData.id + "</td>");
        newTr.append("<td> " + addNewJobData.jobTitle + "</td>");
        newTr.append("<td>" + addNewJobData.companyName + "</td>");
        newTr.append("<td>" + addNewJobData.contactPerson + "</td>");
        newTr.append("<td>" + addNewJobData.contactNumber + "</td>");
        newTr.append("<td>" + addNewJobData.currentStatus + "</td>");
        newTr.append("<td>" + addNewJObData.salary + "</td>");
        return newTr;
      }
  
      function addJobs() {
        $.get("/api/addNewJob", function (data) {
          var rowsToAdd = [];
          for (var i = 0; i < data.length; i++) {
            rowsToAdd.push(createRowsForAddedJob(data[i]));
          }
          renderAuthorList(rowsToAdd);
          // Empty each input box by replacing the value with an empty string
          $("#jobTitle").val("");
          $("#companyName").val("");
          $("#contactPerson").val("");
          $("#contactNumber").val("");
          $("#currentStatus").val("");
          $("#salary").val("");
        });
      }
  
    });
  
  