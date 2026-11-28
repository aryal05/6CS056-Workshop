<?php

test('email verification notification route is unavailable', function () {
    $this->post('/email/verification-notification')->assertNotFound();
});
