<?php

test('email verification routes are unavailable', function () {
    $this->get('/email/verify')->assertNotFound();
    $this->get('/email/verify/1/hash')->assertNotFound();
});
