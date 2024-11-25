CREATE DATABASE sbi_connect;

USE sbi_connect;

CREATE TABLE form_data (
    id INT AUTO_INCREMENT PRIMARY KEY,
    category VARCHAR(255),
    productName VARCHAR(255),
    userName VARCHAR(255),
    contactNumber VARCHAR(20),
    mailId VARCHAR(255),
    institutionName VARCHAR(255),
    courseName VARCHAR(255),
    totalAmount DECIMAL(10, 2),
    paymentMode VARCHAR(255),
    transactionNumber VARCHAR(255),
    remarks TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
