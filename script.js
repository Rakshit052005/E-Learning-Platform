// Function to mark a course as completed
function markCompleted() {
  // Course name (hardcoded here; can be dynamic if needed)
  let course = "HTML & CSS Basics";

  // Fetch previously completed courses from localStorage
  let completed = JSON.parse(localStorage.getItem("completedCourses") || "[]");

  // Check if this course is already marked
  if (!completed.includes(course)) {
    // Add course to completed list
    completed.push(course);
    localStorage.setItem("completedCourses", JSON.stringify(completed));
    alert("Marked as completed!");
  } else {
    alert("Already marked as completed.");
  }
}

// On page load, update the progress list if on progress page
window.onload = () => {
  const progressList = document.getElementById("progress-list");
  if (progressList) {
    // Get list from localStorage
    const completed = JSON.parse(localStorage.getItem("completedCourses") || "[]");

    // If no courses are completed
    if (completed.length === 0) {
      progressList.innerHTML = "<li>No courses completed yet.</li>";
    } else {
      // Create list items for each completed course
      completed.forEach(course => {
        const li = document.createElement("li");
        li.textContent = course + " ✅";
        progressList.appendChild(li);
      });
    }
  }
};
