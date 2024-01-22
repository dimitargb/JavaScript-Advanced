document.getElementById("publish").addEventListener("click", function() {
    var firstName = document.getElementById("first-name").value;
    var lastName = document.getElementById("last-name").value;
    var age = document.getElementById("age").value;
    var genre = document.getElementById("genre").value;
    var storyTitle = document.getElementById("story-title").value;
    var storyText = document.getElementById("story-text").value;
  
    if (firstName && lastName && age && storyTitle && storyText) {
      var previewList = document.getElementById("preview-list");
      var li = document.createElement("li");
      li.innerHTML = "Author: " + firstName + " " + lastName + ", " + age + " years old, " + genre + "<br>" + "Title: " + storyTitle + "<br>" + "Story: " + storyText;
      previewList.appendChild(li);
  
      document.getElementById("first-name").value = "";
      document.getElementById("last-name").value = "";
      document.getElementById("age").value = "";
      document.getElementById("genre").value = "";
      document.getElementById("story-title").value = "";
      document.getElementById("story-text").value = "";
  
      document.getElementById("publish").disabled = true;
      document.getElementById("edit").disabled = false;
      document.getElementById("save").disabled = false;
      document.getElementById("delete").disabled = false;
    }
  });
  
  document.getElementById("edit").addEventListener("click", function() {
    var previewList = document.getElementById("preview-list");
    var li = previewList.getElementsByTagName("li")[0];
    var authorInfo = li.innerHTML.split("<br>")[0];
    var title = li.innerHTML.split("<br>")[1].split(": ")[1];
    var story = li.innerHTML.split("<br>")[2].split(": ")[1];
  
    var firstName = authorInfo.split(" ")[1];
    var lastName = authorInfo.split(" ")[2].split(",")[0];
    var age = authorInfo.split(" ")[4];
    var genre = authorInfo.split(" ")[7];
  
    document.getElementById("first-name").value = firstName;
    document.getElementById("last-name").value = lastName;
    document.getElementById("age").value = age;
    document.getElementById("genre").value = genre;
    document.getElementById("story-title").value = title;
    document.getElementById("story-text").value = story;
  
    previewList.removeChild(li);
  
    document.getElementById("publish").disabled = false;
    document.getElementById("edit").disabled = true;
    document.getElementById("save").disabled = true;
    document.getElementById("delete").disabled = true;
  });