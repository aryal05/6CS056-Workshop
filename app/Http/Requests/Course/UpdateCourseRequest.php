<?php

namespace App\Http\Requests\Course;

use App\Models\Course;
use Illuminate\Contracts\Validation\ValidationRule;
use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Rule;

class UpdateCourseRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, ValidationRule|array<mixed>|string>
     */
    public function rules(): array
    {
        /** @var Course $course */
        $course = $this->route('course');

        return [
            'name' => ['required', 'string', 'max:255'],
            'code' => [
                'required',
                'string',
                'max:30',
                Rule::unique('courses', 'code')->ignore($course),
            ],
            'description' => ['nullable', 'string', 'max:2000'],
            'duration_weeks' => ['required', 'integer', 'min:1', 'max:520'],
            'fee' => ['required', 'numeric', 'min:0', 'max:99999999.99'],
        ];
    }
}
