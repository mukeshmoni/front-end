<?php
include 'config.php';

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Get the form data
    $category = $_POST['category'];
    $productName = $_POST['product-name'];
    $userName = $_POST['user-name'];
    $contactNumber = $_POST['contact-number'];
    $mailId = $_POST['mail-id'];
    $institutionName = $_POST['institution-name'];
    $courseName = $_POST['course-name'];
    $totalAmount = $_POST['total-amount'];
    $paymentMode = $_POST['payment-mode'];
    $transactionNumber = $_POST['transaction-number'];
    $remarks = $_POST['remarks'];

    // Prepare and bind
    $stmt = $conn->prepare("INSERT INTO form_data (category, productName, userName, contactNumber, mailId, institutionName, courseName, totalAmount, paymentMode, transactionNumber, remarks) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)");
    $stmt->bind_param("sssssssssss", $category, $productName, $userName, $contactNumber, $mailId, $institutionName, $courseName, $totalAmount, $paymentMode, $transactionNumber, $remarks);

    // Execute the statement
    if ($stmt->execute()) {
        echo "Form submitted successfully!";
    } else {
        echo "Error: " . $stmt->error;
    }

    // Close the statement and connection
    $stmt->close();
    $conn->close();
}
?>
