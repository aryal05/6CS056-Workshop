<?php

use App\Models\Student;

describe('student API', function () {
    test('returns every student with 200', function () {
        Student::factory()->create(['name' => 'Aarav Sharma']);
        Student::factory()->create(['name' => 'Maya Rai']);

        $response = $this->getJson(route('students.index'));

        $response
            ->assertOk()
            ->assertJsonCount(2, 'data')
            ->assertJsonPath('data.0.name', 'Aarav Sharma')
            ->assertJsonPath('data.1.name', 'Maya Rai');
    });

    test('creates a student and returns 201', function () {
        $studentData = [
            'name' => 'Sita Karki',
            'email' => 'sita@example.com',
            'phone' => '+9779812345678',
            'address' => 'Kathmandu, Nepal',
            'date_of_birth' => '2002-04-15',
        ];

        $response = $this->postJson(route('students.store'), $studentData);

        $response
            ->assertCreated()
            ->assertJsonPath('data.name', 'Sita Karki')
            ->assertJsonPath('data.email', 'sita@example.com')
            ->assertJsonPath('data.date_of_birth', '2002-04-15')
            ->assertJsonStructure(['data' => ['id', 'name', 'email', 'phone', 'address', 'date_of_birth', 'age']]);
        $this->assertDatabaseHas('students', [
            ...$studentData,
            'date_of_birth' => '2002-04-15 00:00:00',
        ]);
    });

    test('returns 422 when required student fields are missing', function () {
        $response = $this->postJson(route('students.store'), []);

        $response
            ->assertUnprocessable()
            ->assertJsonValidationErrors(['name', 'email', 'phone']);
        $this->assertDatabaseCount('students', 0);
    });

    test('returns one student with 200', function () {
        $student = Student::factory()->create([
            'name' => 'Hari Gurung',
            'date_of_birth' => '2000-01-20',
        ]);

        $response = $this->getJson(route('students.show', $student));

        $response
            ->assertOk()
            ->assertJsonPath('data.id', $student->id)
            ->assertJsonPath('data.name', 'Hari Gurung')
            ->assertJsonPath('data.date_of_birth', '2000-01-20');
    });

    test('updates a student and returns 200', function () {
        $student = Student::factory()->create(['email' => 'old@example.com']);
        $updatedData = [
            'name' => 'Updated Student',
            'email' => 'updated@example.com',
            'phone' => '+9779800000000',
            'address' => 'Pokhara, Nepal',
            'date_of_birth' => '2001-03-10',
        ];

        $response = $this->putJson(route('students.update', $student), $updatedData);

        $response
            ->assertOk()
            ->assertJsonPath('data.id', $student->id)
            ->assertJsonPath('data.name', 'Updated Student')
            ->assertJsonPath('data.email', 'updated@example.com');
        $this->assertDatabaseHas('students', [
            'id' => $student->id,
            ...$updatedData,
            'date_of_birth' => '2001-03-10 00:00:00',
        ]);
    });

    test('returns 422 when a student email is already used', function () {
        Student::factory()->create(['email' => 'taken@example.com']);
        $student = Student::factory()->create(['email' => 'current@example.com']);

        $response = $this->putJson(route('students.update', $student), [
            'name' => 'Duplicate Email',
            'email' => 'taken@example.com',
            'phone' => '+9779800000000',
            'address' => null,
            'date_of_birth' => null,
        ]);

        $response
            ->assertUnprocessable()
            ->assertJsonValidationErrors('email');
        $this->assertDatabaseHas('students', [
            'id' => $student->id,
            'email' => 'current@example.com',
        ]);
    });

    test('deletes a student and returns 204', function () {
        $student = Student::factory()->create();

        $response = $this->deleteJson(route('students.destroy', $student));

        $response->assertNoContent();
        $this->assertModelMissing($student);
    });
});
