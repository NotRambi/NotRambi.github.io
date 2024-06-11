<?php
    session_start();
    if (isset($_POST['lang'])) {
        $_SESSION['lang'] = $_POST['lang'];
        echo json_encode(['status' => 'success', 'message' => 'Language set successfully']);
    } else {
        echo json_encode(['status' => 'error', 'message' => 'No language provided']);
    }
?>
