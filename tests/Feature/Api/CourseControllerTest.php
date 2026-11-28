<?php

use App\Models\Course;

describe('course API', function () {
    test('returns every course with 200', function () {
        Course::factory()->create(['name' => 'Laravel Fundamentals']);
        Course::factory()->create(['name' => 'Mobile App Development']);

        $response = $this->getJson(route('courses.index'));

        $response
            ->assertOk()
            ->assertJsonCount(2, 'data')
            ->assertJsonPath('data.0.name', 'Laravel Fundamentals')
            ->assertJsonPath('data.1.name', 'Mobile App Development');
    });

    test('creates a course and returns 201', function () {
        $courseData = [
            'name' => 'REST API Development',
            'code' => 'API-101',
            'description' => 'Learn to build simple REST APIs with Laravel.',
            'duration_weeks' => 8,
            'fee' => 1500,
        ];

        $response = $this->postJson(route('courses.store'), $courseData);

        $response
            ->assertCreated()
            ->assertJsonPath('data.name', 'REST API Development')
            ->assertJsonPath('data.code', 'API-101')
            ->assertJsonPath('data.duration_weeks', 8)
            ->assertJsonPath('data.fee', '1500.00')
            ->assertJsonStructure(['data' => ['id', 'name', 'code', 'description', 'duration_weeks', 'fee']]);
        $this->assertDatabaseHas('courses', $courseData);
    });

    test('returns 422 when required course fields are missing', function () {
        $response = $this->postJson(route('courses.store'), []);

        $response
            ->assertUnprocessable()
            ->assertJsonValidationErrors(['name', 'code', 'duration_weeks', 'fee']);
        $this->assertDatabaseCount('courses', 0);
    });

    test('returns one course with 200', function () {
        $course = Course::factory()->create([
            'name' => 'PHP for Beginners',
            'code' => 'PHP-100',
        ]);

        $response = $this->getJson(route('courses.show', $course));

        $response
            ->assertOk()
            ->assertJsonPath('data.id', $course->id)
            ->assertJsonPath('data.name', 'PHP for Beginners')
            ->assertJsonPath('data.code', 'PHP-100');
    });

    test('updates a course and returns 200', function () {
        $course = Course::factory()->create(['code' => 'OLD-101']);
        $updatedData = [
            'name' => 'Advanced Laravel',
            'code' => 'LAR-202',
            'description' => 'An advanced Laravel course.',
            'duration_weeks' => 12,
            'fee' => 2500,
        ];

        $response = $this->patchJson(route('courses.update', $course), $updatedData);

        $response
            ->assertOk()
            ->assertJsonPath('data.id', $course->id)
            ->assertJsonPath('data.name', 'Advanced Laravel')
            ->assertJsonPath('data.code', 'LAR-202')
            ->assertJsonPath('data.fee', '2500.00');
        $this->assertDatabaseHas('courses', ['id' => $course->id, ...$updatedData]);
    });

    test('returns 422 when a course code is already used', function () {
        Course::factory()->create(['code' => 'TAKEN-101']);
        $course = Course::factory()->create(['code' => 'CURRENT-101']);

        $response = $this->putJson(route('courses.update', $course), [
            'name' => 'Duplicate Course',
            'code' => 'TAKEN-101',
            'description' => null,
            'duration_weeks' => 4,
            'fee' => 500,
        ]);

        $response
            ->assertUnprocessable()
            ->assertJsonValidationErrors('code');
        $this->assertDatabaseHas('courses', [
            'id' => $course->id,
            'code' => 'CURRENT-101',
        ]);
    });

    test('deletes a course and returns 204', function () {
        $course = Course::factory()->create();

        $response = $this->deleteJson(route('courses.destroy', $course));

        $response->assertNoContent();
        $this->assertModelMissing($course);
    });
});
