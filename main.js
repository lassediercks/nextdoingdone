document.addEventListener("DOMContentLoaded", function() {
  const SubmitButton = document.getElementById("submitButton");
  const TextArea = document.getElementById("MailText");
  let body;

  TextArea.addEventListener("input", () => {
    body = TextArea.value;
  });

  SubmitButton.addEventListener("click", () => {
    window.location.href = `mailto:question@nextdoindone.de?subject=Frage&body=${body}`;
  });
});
