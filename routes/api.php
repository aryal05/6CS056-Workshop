<?php

use App\Http\Controllers\Api\CourseController;
use App\Http\Controllers\Api\StudentController;
use Illuminate\Support\Facades\Route;

Route::apiResources([
    'students' => StudentController::class,
    'courses' => CourseController::class,
]);
