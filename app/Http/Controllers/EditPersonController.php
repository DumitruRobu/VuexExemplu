<?php

namespace App\Http\Controllers;

use App\Http\Requests\EditPersonRequest;
use App\Http\Resources\PersonResource;
use App\Models\Person;
use Illuminate\Http\Request;

class EditPersonController extends Controller
{
    public function __invoke(EditPersonRequest $request, $id)
    {
        $personToEdit = Person::findOrFail($id);
        $data = $request->validated();
        $personToEdit->update($data);
        return new PersonResource($personToEdit);
    }
}
