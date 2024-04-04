<?php

namespace App\Http\Controllers;

use App\Http\Requests\EditPersonRequest;
use App\Models\Person;
use Illuminate\Http\Request;

class DeletePersonController extends Controller
{
    public function __invoke($id)
    {
        $personToDelete = Person::findOrFail($id);
        $personToDelete->delete();
        return null;
    }
}
