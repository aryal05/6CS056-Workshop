<?php

namespace Database\Factories;

use App\Models\Course;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends Factory<Course>
 */
class CourseFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'name' => fake()->unique()->sentence(3),
            'code' => fake()->unique()->bothify('CRS-###??'),
            'description' => fake()->paragraph(),
            'duration_weeks' => fake()->numberBetween(1, 52),
            'fee' => fake()->randomFloat(2, 100, 10000),
        ];
    }
}
