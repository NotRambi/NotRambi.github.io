<?php
    session_start();
    if (isset($_SESSION['lang'])) {
        echo json_encode(['status' => 'success', 'lang' => $_SESSION['lang']]);
    } else {
        echo json_encode(['status' => 'error', 'message' => 'Language not set']);
    }
?>
