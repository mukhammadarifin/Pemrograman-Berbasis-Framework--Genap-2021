<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class ArticleController extends Controller
{
    public function index()
    {
        $articles = \App\Models\Article::all();
 
        return $articles->toJson();
    }
 
    public function store(Request $request)
    {
        $validatedData = $request->validate([
          'nama' => 'required',
          'alamat' => 'required',
          'penyakit' => 'required',
          'ruangan' => 'required',
          'dokter' => 'required',
        ]);
 
        $project = \App\Models\Article::create([
          'nama' => $validatedData['nama'],
          'alamat' => $validatedData['alamat'],
          'penyakit' => $validatedData['penyakit'],
          'ruangan' => $validatedData['ruangan'],
          'dokter' => $validatedData['dokter'],
        ]);
 
        $msg = [
            'success' => true,
            'message' => 'Article created successfully!'
        ];
 
        return response()->json($msg);
    }
 
    public function getArticle($id) // for edit and show
    {
        $article = \App\Models\Article::find($id);
        
 
        return $article->toJson();
    }
 
    public function update(Request $request, $id)
    {
        $validatedData = $request->validate([
            'nama' => 'required',
            'alamat' => 'required',
            'penyakit' => 'required',
            'ruangan' => 'required',
            'dokter' => 'required',
        ]);
 
        $article = \App\Models\Article::find($id);
        $article->nama = $validatedData['nama'];
        $article->alamat = $validatedData['alamat'];
        $article->penyakit = $validatedData['penyakit'];
        $article->ruangan = $validatedData['ruangan'];
        $article->dokter = $validatedData['dokter'];
        $article->save();
 
        $msg = [
            'success' => true,
            'message' => 'Article updated successfully'
        ];
 
        return response()->json($msg);
    }
 
    public function delete($id)
    {
        $article = \App\Models\Article::find($id);
        if(!empty($article)){
            $article->delete();
            $msg = [
                'success' => true,
                'message' => 'Article deleted successfully!'
            ];
            return response()->json($msg);
        } else {
            $msg = [
                'success' => false,
                'message' => 'Article deleted failed!'
            ];
            return response()->json($msg);
        }
    }
}
