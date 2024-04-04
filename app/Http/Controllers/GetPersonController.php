<?php

namespace App\Http\Controllers;

use App\Http\Resources\PersonResource;
use App\Models\Person;
use Illuminate\Http\Request;

class GetPersonController extends Controller
{
    public function __invoke($id)
    {
        return new PersonResource(Person::findOrFail($id));
    }
}
